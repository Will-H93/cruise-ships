/* globals describe it expect */
const Ship = require('../src/cruise-ships.js')
const Port = require('../src/port.js')
const Itinerary = require('../src/itinerary.js')

describe('ship', () => {
    describe('with ports and an itinerary', () => {
        let dover;
        let liverpool;
        
        beforeEach(() => {
            liverpool = {
                addShip: jest.fn(),
                removeShip: jest.fn(),
                name: 'Liverpool',
                ships: []
            };

            dover = {
                addShip: jest.fn(),
                removeShip: jest.fn(),
                name: 'Dover',
                ships: []
            }
            itinerary = new Itinerary([liverpool, dover])
            ship = new Ship(itinerary)
        })
        it('has an instance', () => {
                
                expect(ship).toBeInstanceOf(Object);
        })
        it('gets added to a port on instantiation', () => {
                
            expect(liverpool.addShip).toHaveBeenCalledWith(ship);
        })
        it('has a starting port', () => {
                
            expect(ship.currentPort).toBe(itinerary.ports[0])
        })
        it('can set sail', () => {
                        
            ship.setSail();
    
            expect(ship.currentPort).toBeFalsy();
            expect(ship.previousPort).toBe(liverpool);
            expect(liverpool.removeShip).toHaveBeenCalledWith(ship);
        })
        it('can dock at a different port', () => {
                
            ship.setSail();
            ship.dock();
    
            expect(ship.currentPort).toBe(dover);
            expect(dover.addShip).toHaveBeenCalledWith(ship);
        })
        it('can\'t sail further than its itinerary', () => {
                
            ship.setSail();
            ship.dock();
    
            expect(() => ship.setSail()).toThrowError('End of itinerary reached');
        })
    })
    
})