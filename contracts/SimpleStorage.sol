// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {

    string public data;

    function get() view public returns(string memory) {
        return data;
    }

    function set(string memory _data) public {
        data = _data;
    }
}