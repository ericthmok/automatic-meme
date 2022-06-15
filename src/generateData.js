const generateManager = function (manager){
    return`
    <div>
        <h2>${manager.getName}</h2>
        <h2>Manager</h2>
    </div>

    <div>
        <p>ID:${manager.id}</p>
        <p>Email:${manager.email}</p>
        <p>Office Number:${manager.getOfficeNumber()}</p>
    </div>
    `;
}

const generateEngineer = function (engineer){
    return`
    <div>
        <h2>${engineer.name}</h2>
        <h2>Engineer</h2>
    </div>

    <div>
        <p>ID:${engineer.id}</p>
        <p>Email:${engineer.email}</p>
        <p>Github:${engineer.github}</p>
    </div>
    `;
}

const generateIntern = function (intern){
    return`
    <div>
        <h2>${intern.name}</h2>
        <h2>Intern</h2>
    </div>

    <div>
        <p>ID:${intern.id}</p>
        <p>Email:${intern.email}</p>
        <p>School:${intern.school}</p>
    </div>
    `;
};

function generateData(data){
    return`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
    <h1>Team Profile</h1>
    </div>
    <div>
    ${generateData(data)}
    <div>
</body>
</html>
`;
}

module.exports = generateData;