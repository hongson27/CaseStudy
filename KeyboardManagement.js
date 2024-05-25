class KeyboardManagement {
    constructor(arr) {
        this.keyBoards = arr;
    }

    showList() {
        let table = '';
        for (let i = 0; i < this.keyBoards.length; i++) {

            table += '<tr>';

            table += '<td>' + (i+1) + '</td>';

            table += '<td>';
            table += this.keyBoards[i].getName();
            table += '</td>';

            table += '<td>';
            table += this.keyBoards[i].getPrice();
            table += '</td>';

            table += '<td>';
            table += this.keyBoards[i].getConnectionStandard();
            table += '</td>';

            table += '<td>';
            table += this.keyBoards[i].getSwitchType();
            table += '</td>';

            table += '<td>';
            table += '<img id ="imageManage" width="100px" height="100px" src=" ' + this.keyBoards[i].getImage() + '">';
            table += '</td>';

            table += '<td>';
            table += this.keyBoards[i].getQuantity();
            table += '</td>';


            table += '<td>' +
                '<button style="background-color: red; color: white "  type="button" onclick="deleteKeyBoard(' + i + ')">Delete</button> ' + ' <button  style="background-color: orange ; color: white" type="button" onclick="editKeyBoard(' + i + ')">Edit</button>' +
                '</td>';
            table += '</tr>';
        }
        document.getElementById('list-keyboard').innerHTML = table;
    }


    addKeyboard(keyboard) {
        this.keyBoards.push(keyboard);
    }

    delete(id) {
        this.keyBoards.splice(id, 1);
    }

  findKeyboardById(id){
      return this.keyBoards[id];
  }

   edit(keyboard, name, price, connectionStandard, switchType, image, quantity){
       keyboard.edit(name, price, connectionStandard, switchType, image, quantity);   }
}