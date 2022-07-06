const Itinerary = require('../src/itinerary.js')
const Port = require('../src/port.js')

describe('itinerary', () => {
    it('has an instance', () => {
        expect(new Itinerary(['Liverpool', 'Dublin', 'Dover'])).toBeInstanceOf(Object)
    })
    it('can contain a list of ports', () => {
        const dover = new Port('Dover');
        const liverpool = new Port('Liverpool');
        const dublin = new Port('Dublin');
        
        const itinerary = new Itinerary([liverpool, dublin, dover])

        expect(itinerary.ports).toEqual([liverpool, dublin, dover])
    })
})