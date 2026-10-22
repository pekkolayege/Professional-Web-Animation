const test = require("node:test");
const assert = require("node:assert/strict");
const { isPrime } = require("../index.js");

test("Asal sayılar true döndürmeli", () => {
  for (const value of [2, 3, 5, 7, 11, 97, 7919]) {
    assert.equal(isPrime(value), true, `${value} asal olmalı`);
  }
});

test("Asal olmayan sayılar false döndürmeli", () => {
  for (const value of [0, 1, 4, 9, 15, 100, 7920]) {
    assert.equal(isPrime(value), false, `${value} asal olmamalı`);
  }
});

test("Geçersiz değerler false döndürmeli", () => {
  for (const value of [-7, 2.5, NaN, Infinity, "7", null]) {
    assert.equal(isPrime(value), false);
  }
});
