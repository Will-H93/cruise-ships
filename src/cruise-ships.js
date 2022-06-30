class Ship {
    ship(name) {
        this.name = name;
        this.currentPort = 'Liverpool';
    };
    setSail() {
        this.currentPort = ''
    }
};

module.exports = Ship;