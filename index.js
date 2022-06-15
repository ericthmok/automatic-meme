const inquirer = require('inquirer');
const fs = require('fs');

const generateData = require('./src/generateData');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamArray = [];

const addManager = () =>{
    return inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:'Please enter the name of the manager.'
        },
        {
            type:'input',
            name:'id',
            message:'Please enter the ID of the manager.'
        },
        {
            type:'input',
            name:'email',
            message:'Please enter the email of the manager.'
        },
        {
            type:'input',
            name:'officeNumber',
            message:'Please enter the office number of the manager.'
        }
    ]).then(managerInfo =>{
        const {name, id, email, officeNumber}=managerInfo;
        const manager = new Manager(name, id, email, officeNumber);
        teamArray.push(manager);
        console.log(manager);
    });
}

const addEngineer = () =>{
    return inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:'Please enter the name of the engineer.'
        },
        {
            type:'input',
            name:'id',
            message:'Please enter the id of the engineer.'
        },
        {
            type:'input',
            name:'email',
            message:'Please enter the email of the engineer.'
        },
        {
            type:'input',
            name:'github',
            message:'Please enter the Github of the engineer.'
        },
    ]).then(engineerInfo =>{
        const {name, id, email, github}=engineerInfo;
        const engineer = new Engineer(name, id, email, github);
        teamArray.push(engineer);
        console.log(engineer);
    });
}

const addIntern = ()=>{
    return inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:'Please enter the name of the intern.'
        },
        {
            type:'input',
            name:'id',
            message:'Please enter the id of the intern.'
        },
        {
            type:'input',
            name:'email',
            message:'Please enter the email of the intern.'
        },
        {
            type:'input',
            name:'school',
            message:'Please enter the school of the intern.'
        }
    ]).then(internInfo =>{
        const {name, id, email, school}=internInfo;
        const intern = new Intern(name, id, email, school);
        teamArray.push(intern);
        console.log(intern);
    });
};

const writeFile = data =>{
    fs.writeFile('./dist/index.html', data,(err)=>{
        if(err){
            console.log(err);
            return
        };
        console.log('The team profile is created!')
    })
}
addManager()
    .then(addEngineer)
    .then(addIntern)
    .then(teamArray=>{
        return generateData(teamArray);
    })
    .then(pageHTML =>{
        return writeFile(pageHTML)
    })
