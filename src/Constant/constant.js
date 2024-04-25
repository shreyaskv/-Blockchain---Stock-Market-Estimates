const contractAddress = "0xd1525e5C6457f8C9EDA68349ed023E0dD55dcA20";

const contractAbi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "companyID",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "reportingPeriod",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "earningsEstimate",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "revenueEstimate",
          "type": "string"
        }
      ],
      "name": "ForecastSubmitted",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "getAllForecasts",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "companyID",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "reportingPeriod",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "earningsEstimate",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "revenueEstimate",
              "type": "string"
            }
          ],
          "internalType": "struct ForecastSubmission.Forecast[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_companyID",
          "type": "string"
        }
      ],
      "name": "hasSubmitted",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_companyID",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_reportingPeriod",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_earningsEstimate",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_revenueEstimate",
          "type": "string"
        }
      ],
      "name": "submitForecast",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
  

export {contractAbi, contractAddress};