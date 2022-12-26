import web3 from './web3';
const address = '0x0a68623D64Fc20aA692955656F5623c7BDfD5b68';

const abi = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "action",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "Registerer",
                "type": "address"
            }
        ],
        "name": "FileUploadedEvent",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "contractName",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "Email",
                "type": "string"
            }
        ],
        "name": "getAttachedAccount",
        "outputs": [
            {
                "internalType": "address payable",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "Email",
                "type": "string"
            }
        ],
        "name": "getRegisterEmailinfo",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "WalletInfo",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "RegistrationTime",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "RegistererIpaddress",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "Registerer",
                        "type": "address"
                    }
                ],
                "internalType": "struct TransactionwithEmail.Info",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "WalletInfo",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "RegistererIpaddress",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "Registerer",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "Email",
                "type": "string"
            }
        ],
        "name": "RegisterEmail",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "Email",
                "type": "string"
            }
        ],
        "name": "Transaction",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
        "payable": true
    }
]
export default new web3.eth.Contract(abi, address);
