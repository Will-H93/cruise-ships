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
})