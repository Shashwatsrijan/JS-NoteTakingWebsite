console.log('welcome to the first project')
showNotes();

//if user adds a node, add it to the local storage.

let addbtn = document.getElementById("addbtn");
// console.log(addbtn)

addbtn.addEventListener('click', function (e) {

    let addtxt = document.getElementById('addtxt');
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notes_obj = [];
    }
    else {
        notes_obj = JSON.parse(notes);
    }
    notes_obj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notes_obj));
    addtxt.value = "";
    console.log(notes_obj);

    showNotes();


})

//function to show elements form local storage
function showNotes() {
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notes_obj = [];
    }
    else {
        notes_obj = JSON.parse(notes);
    }
    let html = "";

    notes_obj.forEach(function (element, index) {
        html += `
        <div class="notecard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="delNode(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
        </div>`;


    });
    let noteselem = document.getElementById('notes');
    if (notes_obj.length != 0) {
        noteselem.innerHTML = html;
    }
    else {
        noteselem.innerHTML = `Nothing to show here. Please add a note!`;
    }

}
//function to delete a note.
function delNode(index) {

    console.log("deleting", index);

    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notes_obj = [];
    }
    else {
        notes_obj = JSON.parse(notes);
    }
    notes_obj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notes_obj));
    showNotes();



}






