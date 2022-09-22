#!/usr/bin/env ts-node-esm
import getStdin from "get-stdin";

async function main() {
    let input = await getStdin();
    console.log("h=i  "+input);
}

main();
