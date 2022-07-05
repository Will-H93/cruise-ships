/* globals describe it expect */
const Ship = require('../src/cruise-ships.js')
const Port = require('../src/port.js')

describe('ship', () => {
    it('has an instance', () => {
        expect(new Ship('Liverpool')).toBeInstanceOf(Object);
    })
    it('has a starting port', () => {
        const port = new Port('Liverpool')
        const ship = new Ship(port)

        expect(ship.currentPort).toBe(port.name)
    })
    it('can set sail', () => {
        const port = new Port('Liverpool')
        const ship = new Ship(Port)
        
        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
    })
    it('can dock at a different port', () => {
        const dover = new Port('Dover');
        const ship = new Ship(dover);

        const liverpool = new Port('Liverpool');
        ship.dock(liverpool);

        expect(ship.currentPort).toBe(liverpool);
    })
})