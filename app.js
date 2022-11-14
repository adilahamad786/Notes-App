const chalk = require('chalk');
const yargs = require("yargs");
const { readNote } = require('./notes');
const notes = require('./notes')

// // Customize yargs vesion
yargs.version('99.999.9999');  // checking result using command "node app.js --version"


// // create add command
yargs.command({   // checking about this using command "node app.js --help" and run handler code using command "node app.js add"
    command : 'add',
    description : "Add a new Note",
    builder : {
       title : {
            description : 'Note Title',
            demandOption : true, // means required
            type : 'string' //accepted data type
        },
        body : {
            description : "Note Body",
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv)  {
        notes.addNote(argv.title, argv.body);
    }
})

// // create remove command
yargs.command({   // checking working using command "node app.js remove"
    command : 'remove',
    description : 'Remove a Note',
    builder : {
        title : {
        description : "Note Title",
        demandOption : true,
        type : 'string'
        }
    },
    handler(argv) { 
        notes.removeNote(argv.title);
    }
})

// // create list command
yargs.command({   // checking working using command "node app.js list"
    command : 'list',
    description : 'Show all list of notes',
    handler() { notes.listNotes()}
})

// create read command
yargs.command({   // checking working using command "node app.js read -title="New title"
    command : 'read',
    description : 'Read your notes !',
    builder : {
        title :{
            description : 'Note Title !',
            demandOption : true,
            type : 'string'  // if it is comment title value is true show in console
        }
    },
    handler : (argv) => {notes.readNote(argv.title)}
})

yargs.parse()  // IMPORTANT without this line Yargs result not show in console !!!
// console.log(yargs.argv)  //This is another way to print yargs result on console