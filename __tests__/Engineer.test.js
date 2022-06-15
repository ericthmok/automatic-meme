const Engineer = require('../lib/Engineer')
const engineer = new Engineer ('eric', '333333','engineer@gmail.com','ericgithub')

test('a new engineer',()=>{
    expect(engineer.name).toEqual('eric');
    expect(engineer.id).toEqual('333333');
    expect(engineer.email).toEqual('engineer@gmail.com');
    expect(engineer.github).toEqual('ericgithub');
});

test('test getting name with getName',()=>{
    expect(engineer.getName()).toEqual('eric');
});

test('test getting id with getId',()=>{
    expect(engineer.getId()).toEqual('333333');
});

test('test getting email with getEmail',()=>{
    expect(engineer.getEmail()).toEqual('engineer@gmail.com');
});

test('test getting github with getGithub',()=>{
    expect(engineer.getGithub()).toEqual('ericgithub');
});

test('test getting role with getRole',()=>{
    expect(engineer.getRole()).toEqual('Engineer')
});