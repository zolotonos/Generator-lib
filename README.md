# generator-lib

A JavaScript library for generating values using generators.

## Features

- Random Number Generator (float)
- Consume any iterator with timeout-based processing

## Usage

Install locally:

```bash
npm install ../generator-lib


const { randomNumberGenerator, consumeWithTimeout } = require("generator-lib");

const gen = randomNumberGenerator("float", 0, 100);
consumeWithTimeout(gen, 5); // runs for 5 seconds
