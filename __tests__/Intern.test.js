const Intern = require('../lib/Intern');
const intern = new Intern ('eric','444444','intern@gmail.com','Canada');

test('a new intern',()=>{
    expect(intern.name).toEqual('eric');
    expect(intern.id).toEqual('444444');
    expect(intern.email).toEqual('intern@gmail.com');
    expect(intern.school).toEqual('Canada');
});

test('test getting name with getName',()=>{
    expect(intern.getName()).toEqual('eric');
});

test('test getting id with getId',()=>{
    expect(intern.getId()).toEqual('444444');
});

test('test getting email with getEmail',()=>{
    expect(intern.getEmail()).toEqual('intern@gmail.com');
});

test('test getting school with getSchool',()=>{
    expect(intern.getSchool()).toEqual('Canada');
});

test('test getting role with getRole',()=>{
    expect(intern.getRole()).toEqual('Intern')
});