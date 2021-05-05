// index.test.js

// jshint esversion: 6
const fizzBuzz = require('./index');

describe('fizzBuzz( )', ( ) => {
    it ('returns "FizzBuzz" for multiples of 3 and 5', ( ) => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
        expect(fizzBuzz(30)).toBe('FizzBuzz');
    });

    it('returns the given number for multiples of neither 3 nor 5', ( ) => {
        expect(fizzBuzz(1)).toBe('1');
        expect(fizzBuzz(44)).toBe('44');
        expect(fizzBuzz(7)).toBe('7');
    });

    it('returns "Fizz" for multiplies of 3', ( ) => {
        expect(fizzBuzz(3)).toBe('Fizz');
        expect(fizzBuzz(6)).toBe('Fizz');
        expect(fizzBuzz(9)).toBe('Fizz');
        expect(fizzBuzz(99)).toBe('Fizz');
    });

    it('returns "Buzz" for multiplies of 5', ( ) => {
        expect(fizzBuzz(5)).toBe('Buzz');
        expect(fizzBuzz(10)).toBe('Buzz');
        expect(fizzBuzz(25)).toBe('Buzz');
        expect(fizzBuzz(100)).toBe('Buzz');
    });


});