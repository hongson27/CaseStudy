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
    edit(name, price, connectionStandard, switchType, image, quantity) {
        this.name = name;
        this.price = price;
        this.connectionStandard = connectionStandard;
        this.switchType = switchType;
        this.image = getImage();
        this.quantity = quantity;
    }
}