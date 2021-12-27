const fetchData = require('./fetchData');


test('typeTest', () => {
    expect(fetchData()).toBe('alivarastepour');
})