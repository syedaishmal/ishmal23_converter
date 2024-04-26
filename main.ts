#! /usr/bin/env node

import inquirer from "inquirer";

// define the list of currencies and their exchange rates
let currency: any =  {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 280,
    "AFN": 71.23,
    // Add more currencies and their exchange rate here
}

// prompt the user toselect currencies to convert from and to 
let user_answer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "select the currency to convert from:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD","AFN","PKR", ]
},
{
    name: "to",
    type: "list",
    message: "select the currency to convert into:",
    choices: ["USD", "EUR", "JYP", "CAD", "AUD","AFN","PKR",]

},
{
    name: "amount", 
    type: "number",
    message: "Enter the amount to convert:",
}
]);

// perform currency conversion by using formula 
let fromAmount = currency[user_answer.from];
    let toAmount = currency[user_answer.to];
    let amount = user_answer.amount

    // formula of conversion 
    let baseAmount = amount / fromAmount
    let convertedAmount = baseAmount * toAmount

    console.log(convertedAmount);


