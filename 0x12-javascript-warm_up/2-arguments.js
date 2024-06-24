#!/usr/bin/env node

const args = process.argv.slice(2);

if (args.length === 0)
{
    console.log("No arguments");
}
else if (args.length === 1){
    console.log("Argument found");
}
else{
    console.log("Arguments found");
    }
