#! /usr/bin/env node

// Create a readline interface
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question(`What would you like to log today? `, item => {
    console.log(item);
    readline.close();
})