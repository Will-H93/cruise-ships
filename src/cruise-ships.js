class Ship {
    ship(port) {
        this.currentPort = port.name;
    };
    setSail() {
        this.previousPort = this.currentPort;
        this.currentPort = ''
    }
    dock(port) {
        this.currentPort = port;
    }
};

module.exports = Ship;