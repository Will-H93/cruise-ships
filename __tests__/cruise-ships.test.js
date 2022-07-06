/* globals describe it expect */
const Ship = require('../src/cruise-ships.js')
const Port = require('../src/port.js')
const Itinerary = require('../src/itinerary.js')

describe('ship', () => {
    describe('with ports and an itinerary', () => {
        let ship;
        let dover;
        let liverpool;
        let itinerary;
        
        beforeEach(() => {
            liverpool = new Port('Liverpool')
            dover = new Port('Dover')
            itinerary = new Itinerary([liverpool, dover])
            ship = new Ship(itinerary)
        })
        it('has an instance', () => {
                
                expect(ship).toBeInstanceOf(Object);
        })
        it('gets added to a port on instantiation', () => {
                
            expect(liverpool.ships).toContain(ship);
        })
        it('has a starting port', () => {
                
            expect(ship.currentPort).toBe(itinerary.ports[0])
        })
        it('can set sail', () => {
                        
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
    
})