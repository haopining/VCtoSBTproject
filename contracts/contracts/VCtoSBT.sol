// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";



contract VCtoSBT is ERC721URIStorage, Ownable {
    mapping(string => address) private HashVCToAddress;
    mapping(uint256 => string) private SBTIdtoHashVC;

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("VerifiableCredentialSBT", "VCSBT") {}

    function assignVCSBTOwner(string memory HashVC, address holderDID) public onlyOwner {
        HashVCToAddress[HashVC] = holderDID;
    }

    function modifyVCSBTOwner(string memory HashVC, address newholderDID) public onlyOwner {
        HashVCToAddress[HashVC] = newholderDID;
    }

    function deleteVCSBTOwner(string memory HashVC) public onlyOwner {
        HashVCToAddress[HashVC] = address(0);
    }

    function mint(
        string memory HashVC,
        string memory tokenURI
    ) public {
        require(
            msg.sender == HashVCToAddress[HashVC],
            "Only specific HolderDID can mint this SBT"
        );
        uint256 tokenId = _tokenIdCounter.current();
        SBTIdtoHashVC[tokenId] = HashVC;
        _tokenIdCounter.increment();
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, tokenURI);
    }

    function getSBTURI(uint256 tokenId) public view returns (string memory) {
        return tokenURI(tokenId);
    }

    function getSBTinfo(uint256 tokenId) public view returns (string memory, string memory) {
        return (tokenURI(tokenId), SBTIdtoHashVC[tokenId]);
    }

    function burn(uint256 tokenId) public {
        require(
            _isApprovedOrOwner(_msgSender(), tokenId),
            "Caller is not owner nor approved"
        );
        _burn(tokenId);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) internal virtual override {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
        require(
            from == address(0) || from == msg.sender,
            "SBT is non-transferable"
        );
    }
}
