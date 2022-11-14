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

// using some command
// command is : node app.js --help
// command is : node app.js --title="write anything and store as a value of tilte"
// command is : node app.js --title
// command is : node app.js -title ,give error because title is require and invalid command


// yargs.command({
//     command : 'read',
//     description : 'Read your notes !',
//     builder : {
//         title :{
//             description : 'Note Title !',
//             demandOption : false,   // this option make command option is required or not if it is "true" that mean it is required otherwise it also value is "false" that mean not require by default
//             type : 'string'
//         }
//     },
//     handler : (argv) => {console.log('Title : ',argv.title)}
// })


// yargs.command({   // right command for using this " node app.js details --title="This is my title" --body="This is my body" "
//     command : 'details',
//     description : 'This is description about details command !',
    // builder : {
    //     title : {
    //         description : 'This is title option descripiton',
    //         demandOption : true, // means required
    //         type : 'string' //accepted data type
    //     },
    //     body : {
    //         description : "This is body of details command !",
    //         demandOption : true,
    //         type : 'string'
    //     }
    // },
//     handler : (argv) => {
//         console.log("Title : ",argv.title)
//         console.log("Body : ",argv.body)
//     }
// })



yargs.parse()  // IMPORTANT without this line Yargs result not show in console !!!
// console.log(yargs.argv)  //This is another way to print yargs result on console







// taking Input in javascript using command line argument
// const command = process.argv;
// console.log(command);
// console.log(command[2])



// Module export and import


// console.log(name);
// note();

// var temp = chalk.bold.green.inverse('Hello world!');
// console.log(temp);



// const validator = require('validator');
// var email = "valueadda@gmail.com";
// console.log(validator.isEmail(email));



// const fs = require('fs');
// const fun = require('./utils');
// const name = require('./utils');

// fs.appendFileSync('note.txt','This is node fs.writeFileSync method.');

// fun();
// console.log(name.name);

































// before convert into "ARROW FUNCTION SHORT HAND or ES6"



// const chalk = require('chalk');
// const yargs = require("yargs");
// const notes = require('./notes')

// // // Customize yargs vesion
// yargs.version('99.999.9999');  // checking result using command "node app.js --version"


// // // create add command
// yargs.command({   // checking about this using command "node app.js --help" and run handler code using command "node app.js add"
//     command : 'add',
//     description : "Add a new Note",
//     builder : {
//         title : {
//             description : 'Note Title',
//             demandOption : true, // means required
//             type : 'string' //accepted data type
//         },
//         body : {
//             description : "Note Body",
//             demandOption : true,
//             type : 'string'
//         }
//     },
//     handler : (argv) => {
//         notes.addNote(argv.title, argv.body);
//     }
// })

// // // create remove command
// yargs.command({   // checking working using command "node app.js remove"
//     command : 'remove',
//     description : 'Remove a Note',
//     builder : {
//         title : {
//         description : "Note Title",
//         demandOption : true,
//         type : 'string'
//         }
//     },
//     handler : (argv) => { 
//         notes.removeNote(argv.title);
//     }
// })

// // // create list command
// yargs.command({   // checking working using command "node app.js list"
//     command : 'list',
//     description : 'Show all list of notes',
//     handler : () => { console.log("This is list feature !")}
// })

// // // create read command
// // yargs.command({   // checking working using command "node app.js read -title="New title"
// //     command : 'read',
// //     description : 'Read your notes !',
// //     builder : {
// //         title :{
// //             description : 'Note Title !',
// //             demandOption : true,
// //             type : 'string'  // if it is comment title value is true show in console
// //         }
// //     },
// //     handler : (argv) => {console.log('This is reading feature !',argv)}
// // })

// // using some command
// // command is : node app.js --help
// // command is : node app.js --title="write anything and store as a value of tilte"
// // command is : node app.js --title
// // command is : node app.js -title ,give error because title is require and invalid command


// // yargs.command({
// //     command : 'read',
// //     description : 'Read your notes !',
// //     builder : {
// //         title :{
// //             description : 'Note Title !',
// //             demandOption : false,   // this option make command option is required or not if it is "true" that mean it is required otherwise it also value is "false" that mean not require by default
// //             type : 'string'
// //         }
// //     },
// //     handler : (argv) => {console.log('Title : ',argv.title)}
// // })


// // yargs.command({   // right command for using this " node app.js details --title="This is my title" --body="This is my body" "
// //     command : 'details',
// //     description : 'This is description about details command !',
//     // builder : {
//     //     title : {
//     //         description : 'This is title option descripiton',
//     //         demandOption : true, // means required
//     //         type : 'string' //accepted data type
//     //     },
//     //     body : {
//     //         description : "This is body of details command !",
//     //         demandOption : true,
//     //         type : 'string'
//     //     }
//     // },
// //     handler : (argv) => {
// //         console.log("Title : ",argv.title)
// //         console.log("Body : ",argv.body)
// //     }
// // })



// yargs.parse()  // IMPORTANT without this line Yargs result not show in console !!!
// // console.log(yargs.argv)  //This is another way to print yargs result on console







// // taking Input in javascript using command line argument
// // const command = process.argv;
// // console.log(command);
// // console.log(command[2])



// // Module export and import


// // console.log(name);
// // note();

// // var temp = chalk.bold.green.inverse('Hello world!');
// // console.log(temp);



// // const validator = require('validator');
// // var email = "valueadda@gmail.com";
// // console.log(validator.isEmail(email));



// // const fs = require('fs');
// // const fun = require('./utils');
// // const name = require('./utils');

// // fs.appendFileSync('note.txt','This is node fs.writeFileSync method.');

// // fun();
// // console.log(name.name);