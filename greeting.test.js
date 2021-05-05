// greeting.test.js

// jshint esversion: 6
const greeting = (guest) => `Hello, ${guest}`;

describe('greeting( )', ( ) => {
    it('says hello', ( ) => {
        expect(greeting('HouseHay')).toBe('Hello, HouseHay');
    });
});
