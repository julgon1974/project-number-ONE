let notes = [];

function addThisNote() {
    let note = getNote();
    notes.push(note);
    displayNotes();
    saveToStorage();
}

function getNote() {
    let textArea1 = document.getElementById("textArea1");
    let inputDate = document.getElementById("inputDate");
    let inputTime = document.getElementById("inputTime");

    let task = textArea1.value;
    let dateInput = inputDate.value;
    let date = dateInput.split("-").reverse().join("-");

    let time = inputTime.value;

    let note = { task, date, time };

return note;
}

function displayNotes() {
    let notesContainer = document.getElementById("notes-container");
    let content = "";
    let counter = 0;

    for (const note of notes) {
        note.counter = counter;
        let noteUI = `<div ><button  style = "background-color: #705d5d00;  border: 0px; color: #845d31" id="xdelete" onclick='deleteNote(${counter})'  class="glyphicon glyphicon-remove-circle"></button><br>${note.task}<br><div id="footer">${note.date}<br>${note.time}</div></div>`;
        content += noteUI;
        counter++;
    }
notesContainer.innerHTML = content;
}

function deleteNote(counter) {
    notes.splice(counter, 1);
    displayNotes();
    saveToStorage();
}

function saveToStorage() {
    const json = JSON.stringify(notes);
    localStorage.setItem("notes", json);
}

function loadFromStorage() {
    const json = localStorage.getItem("notes");
    notes = json ? JSON.parse(json) : [];
    displayNotes();
}
