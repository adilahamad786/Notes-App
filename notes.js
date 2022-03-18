const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return "Your Notes ..."
}

//-------------------------------------Notes Load Section-------------------------------------------//

const loadNotes = () => {

    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const stringJSON = dataBuffer.toString();
        return JSON.parse(stringJSON);

    } catch (error) {   // if any error or file not found for open then we retrun empty list
        return [];
    }   
}

//-------------------------------------Notes Save Section-------------------------------------------//

const saveNotes = (notes) => {
    const stringJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', stringJSON);
}

//-------------------------------------Add Section-------------------------------------------//
const addNote = (title, body) => {

    const notes = loadNotes();   // return empty list that means notes is empty list if file not fount or occuring error in loadNotes() function
    
    //const duplicateNotes = notes.filter( (note) => note.Title === title ); non efficient code so remove
    const duplicateNote = notes.find( (note) => note.Title === title ); // efficient solution so use
        // Note : inside notes list means file have Title as a key so we access vaule using note.Title

    // if(duplicateNotes.length === 0){  // remove because it is part of non efficient code so remove
    if (!duplicateNote) {
        notes.push({
        Title : title,
        Body : body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse("New Note Added !"));
    }
    else{
        console.log(chalk.red.inverse("Note Title Taken ?"));
    } 
}

//--------------------------------------Remove Section-----------------------------------//

const removeNote = (title) => {

    const notes = loadNotes();   // load all notes

    const notesToKeep = notes.filter((note) => note.Title !== title)   // remove which note this title is match or put all unmatch notes in notesToKeep

    if (notes > notesToKeep) {
        console.log(chalk.green.inverse('Note removed !'));
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.red.inverse('No note found !'));
    }
}

//--------------------------------------List Section-----------------------------------//

const listNotes = () => {
    const notes = loadNotes();

    console.log(chalk.inverse("Your notes"));

    notes.forEach( (note) => {
        console.log(note.Title);
    });
}

//--------------------------------------Read Section-----------------------------------//

const readNote = (title) => {

    const notes = loadNotes();
    const note = notes.find((note) => note.Title === title );

    if (note) {
        console.log(chalk.inverse(note.Title));
        console.log(note.Body)
    } else {
        console.log(chalk.red.inverse('Note not found !'));
    }

}


module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    removeNote : removeNote,
    listNotes : listNotes,
    readNote : readNote
}