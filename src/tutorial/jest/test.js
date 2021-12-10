const exp = (n) => {
    if(n<100)
        throw new Error('this is not valid')
}
test('wtf', () => {
    expect(() => exp(2)).toThrow();
})
test('wtf1', () => {
    expect(() => exp(2)).toThrow(Error);
})
test('wtf2', () => {
    expect(() => exp(2)).toThrow('this is not valid');
})