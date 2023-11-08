const simpleStorageABI =[
    {
      "inputs": [],
      "name": "data",
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
      "inputs": [],
      "name": "get",
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
          "name": "_data",
          "type": "string"
        }
      ],
      "name": "set",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
  const simpleStorageAddress = '0x457c07608B7cb8DbB9F275a6251fa97822EE4D4c';
  const web3 = new Web3('http://127.0.0.1:7545');
  const simpleStorage = new web3.eth.Contract(simpleStorageABI, simpleStorageAddress);
  
  document.addEventListener('DOMContentLoaded', () => {
    const $setData = document.getElementById('setData');
    const $data = document.getElementById('data');
    let accounts = [];
  
    web3.eth.getAccounts()
    .then(_accounts => {
      accounts = _accounts;
    });
  
    const getData = () => {
      simpleStorage.methods
        .get()
        .call()
        .then(result => {
          $data.innerHTML = result;
        })
    };
    getData();
  
    $setData.addEventListener('submit', e => {
      e.preventDefault();
      const data = e.target.elements[0].value;
      simpleStorage.methods
        .set(data)
        .send({from: accounts[0]})
        .then(getData);
    });
  });