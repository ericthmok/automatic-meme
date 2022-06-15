const Employee = require ('../lib/Employee');
const employee = new Employee ('eric', '111111', 'eric@email.com');

test('a new employee'), ()=>{
    expect (employee.name).toEqual('eric');
    expect (employee.id).toEqual('111111');
    expect (employee.email).toEqual('eric@email.com');
};

test('test getting name with getName',()=>{
    expect(employee.getName()).toEqual('eric')
});

test('test getting id with getId', ()=>{
    expect(employee.getId()).toEqual('111111');
});

test('test getting email with getEmail', ()=>{
    expect(employee.getEmail()).toEqual('eric@gmail.com');
});

test('test getting role with getRole', ()=>{
    expect(employee.getRole()).toEqual('Employee')
});