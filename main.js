let keyboard1 = new Keyboard ('Asus Rog', "3.899.000", 'Wireless 2.4Ghz/ Bluetooth /USB',
    'Brown',
    'download.jpg','14' );
let keyboard2 = new Keyboard ('AKKO','1.399.000','USB',
    'Blue',
    'gearvn-ban-phim-akko-3087-v2-bilibili-akko-switch-466_db76245a5b164c93a1e3db7fe689424e.jpg','4');
let keyboard3 = new Keyboard ('Logitech','4.299.000','Wireless 2.4Ghz lightspeed/ Bluetooth /USB',
    'Red',
    '6235_7.jpg','27');
let arr =[keyboard1, keyboard2, keyboard3];
let manage = new KeyboardManagement(arr);

function addKeyboard(){
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let connectionStandard = document.getElementById('connectionStandard').value;
    let switchType = document.getElementById('switchType').value;
    let image = getImage();
    let quantity = document.getElementById('quantity').value;

    let keyboard = new Keyboard(name, price, connectionStandard, switchType, image, quantity);
    manage.addKeyboard(keyboard);
    manage.showList();
    clear();
}

function clear(){
    document.getElementById('name').value = '';
    document.getElementById('price').value = '';
    document.getElementById('connectionStandard').value = '';
    document.getElementById('switchType').value = '';
    document.getElementById('image').value = '';
    document.getElementById('quantity').value= '';
}

function deleteKeyBoard(id) {
    manage.delete(id);
    manage.showList();
}
//
let keyboardId = 0;

function editKeyBoard(id){
    let keyboard = manage.findKeyboardById(id);
    document.getElementById('name').value = keyboard.getName();
    document.getElementById('price').value = keyboard.getPrice();
    document.getElementById('connectionStandard').value = keyboard.getConnectionStandard();
    document.getElementById('switchType').value = keyboard.getSwitchType();
    document.getElementById('image').value = keyboard.getImage();
    document.getElementById('quantity').value = keyboard.getQuantity();

    keyboardId = id;
}
//
function updateKeyboard(){
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let connectionStandard = document.getElementById('connectionStandard').value;
    let switchType = document.getElementById('switchType').value;
    let image = getImage();
    let quantity = document.getElementById('quantity').value;

    let keyboard = manage.findKeyboardById(keyboardId);
    manage.edit(keyboard, name, price, connectionStandard, switchType, image, quantity)
    manage.showList();
    clear();
 //   alert(image);
}

manage.showList();

function getImage(){
    let inputImage = document.getElementById('image').files;
    return inputImage[0].name;
}