const Port = require('../src/port.js')

describe('port', () => {
    describe('with ships', () => {
        let port;

        beforeEach(() => {
            port = new Port('Liverpool')
        })

        it('has an instance', () => {
            expect(new Port('Liverpool')).toBeInstanceOf(Object)
        })
        it('has a name', () => {

            expect(port.name).toEqual('Liverpool')

        })
        it('can add a ship', () => {
            const ship = {}
    
            port.addShip(ship)
    
            expect(port.ships).toContain(ship);
        })
        it('can remove a ship', () => {
            const titanic = {};
            const queenMary = {};
            
            port.addShip(titanic)
            port.addShip(queenMary)
            port.removeShip(queenMary)
    
            expect(port.ships).toEqual([titanic])
        })
    })
    
})