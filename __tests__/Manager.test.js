const Manager = require('../lib/Manager');
const manager = new Manager ('eric', '222222', 'manager@gmail.com', '12345');

test('a new manager',()=>{
    expect(manager.name).toEqual('eric');
    expect(manager.id).toEqual('222222');
    expect(manager.email).toEqual('manager@gmail.com');
    expect(manager.officeNumber).toEqual('12345');
});

test('getting name with getName', ()=>{
    expect(manager.getName()).toEqual('eric');
});

test('getting id with getId', ()=>{
    expect(manager.getId()).toEqual('222222');
});

test('getting email with getEmail', ()=>{
    expect(manager.getEmail()).toEqual('manager@gmail.com');
});

test('gettting office number with getOfficeNumber', ()=>{
    expect(manager.getOfficeNumer()).toEqual('12345');
});

test('getting role with getRole', ()=>{
    expect(manager.getRole()).toEqual('Manager');
});