class Keyboard {
    constructor (name, price, connectionStandard, switchType, image, quantity) {
        this.name = name;
        this.price = price;
        this.connectionStandard = connectionStandard;
        this.switchType = switchType;
        this.image = image;
        this.quantity = quantity;
    }
    getName() { return this.name; }
    getPrice() { return this.price; }
    getQuantity() { return this.quantity; }
    getConnectionStandard() { return this.connectionStandard }
    getSwitchType() { return this.switchType; }
    getImage() { return this.image; }
    setImage(image) { this.image = image; }
    setName(name) { this.name = name; }
    setPrice(price) { this.price = price; }
    setQuantity(quantity) { this.quantity = quantity; }
    setConnectionStandard(connectionStandard) { this.connectionStandard = connectionStandard; }
    setSwitchType(switchType) { this.switchType = switchType; }
    edit(name, price, connectionStandard, switchType, image, quantity) {
        this.name = name;
        this.price = price;
        this.connectionStandard = connectionStandard;
        this.switchType = switchType;
        this.image = image;
        this.quantity = quantity;
    }
}