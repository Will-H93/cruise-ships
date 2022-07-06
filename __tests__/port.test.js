const Port = require('../src/port.js')

describe('port', () => {
    it('has an instance', () => {
        expect(new Port('Liverpool')).toBeInstanceOf(Object)
    })
    it('has a name', () => {
        const port = new Port('Liverpool')
        
        port.name = 'Liverpool'

        expect(port.name).toEqual('Liverpool')
    })
    it('can add a ship', () => {
        const port = new Port('Dover');
        const ship = {}

        port.addShip(ship)

        expect(port.ships).toContain(ship);
    })
    it('can remove a ship', () => {
        const port = new Port('Dover');
        const titanic = {};
        const queenMary = {};
        
        port.addShip(titanic)
        port.addShip(queenMary)
        port.removeShip(queenMary)

        expect(port.ships).toEqual([titanic])
    })
})