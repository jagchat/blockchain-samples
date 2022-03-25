pragma solidity >=0.4.22 <0.9.0;

contract HelloWorld {
    string public name;

    constructor(string memory yourName) public {
        name = yourName;
    }

    function changeName(string memory yourName) public {
        name = yourName;
    }

    function getName() public returns (string memory){
        return name;
    }
}