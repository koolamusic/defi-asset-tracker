pragma solidity >=0.7.0 <0.9.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract Moralis is ERC20 {
    constructor() public ERC20('Moralis', 'MOR') {
        _mint(msg.sender, 1000000000000000000000000);
    }
}
