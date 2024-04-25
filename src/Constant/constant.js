const contractAddress = "0x44295ae2f24eF1fff400cAB8E3Df8fC53feea08C";

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
              "internalType": "string",
              "name": "user",
              "type": "string"
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
  },
  {
      "inputs": [],
      "name": "getAllForecasts",
      "outputs": [
          {
              "components": [
                  {
                      "internalType": "string",
                      "name": "user",
                      "type": "string"
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
      "inputs": [],
      "name": "forecasts",
      "outputs": [
          {
              "components": [
                  {
                      "internalType": "string",
                      "name": "user",
                      "type": "string"
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
              "internalType": "struct ForecastSubmission.Forecast",
              "name": "",
              "type": "tuple[]"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "owner",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "submissionEnd",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "submissionStart",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  }
]








export {contractAbi, contractAddress};