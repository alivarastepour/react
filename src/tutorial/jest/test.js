const sum = require('./sum')
const a = [1,2,3,4,5,6,7,8,9,0];
const b = {'a':2, 'b':44};
const c = {'a':2, 'b':44, 'c':21};
test('wtf', () => {
    expect(b).toEqual(c);
})