/* globals describe it expect */
const Ship = require('../src/cruise-ships.js')

describe('ship', () => {
    it('has an instance', () => {
        expect(new Ship('Boaty McBoatface')).toBeInstanceOf(Object);
    })
    it('has a startingPort', () => {
        const ship = new Ship('Boaty McBoatface')

        ship.startingPort = 'Liverpool';

        expect(ship.startingPort).toBe('Liverpool')
    })
})