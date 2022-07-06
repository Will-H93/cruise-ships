/* globals describe it expect */
const Ship = require('../src/cruise-ships.js')
const Port = require('../src/port.js')
const Itinerary = require('../src/itinerary.js')

describe('ship', () => {
    it('has an instance', () => {
        const port = new Port('Liverpool')
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary)

        expect(ship).toBeInstanceOf(Object);
    })
    it('gets added to a port on instantiation', () => {
        const dover = new Port('Dover')
        const itinerary = new Itinerary([dover])
        const ship = new Ship(itinerary);

        expect(dover.ships).toContain(ship);
    })
    it('has a starting port', () => {
        const port = new Port('Liverpool')
        const itinerary = new Itinerary([port])
        const ship = new Ship(itinerary)

        expect(ship.currentPort).toBe(port)
    })
    it('can set sail', () => {
        const liverpool = new Port('Liverpool')
        const dover = new Port('Dover')
        const itinerary = new Itinerary([liverpool, dover])
        const ship = new Ship(itinerary)
        
        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
        expect(ship.previousPort).toBe(liverpool);
        expect(liverpool.ships).not.toContain(ship);
    })
    it('can dock at a different port', () => {
        const dover = new Port('Dover');
        const liverpool = new Port('Liverpool');
        const itinerary = new Itinerary([dover, liverpool])
        const ship = new Ship(itinerary)

        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toBe(liverpool);
        expect(liverpool.ships).toContain(ship);
    })
    it('can\'t sail further than its itinerary', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();

        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    })
})