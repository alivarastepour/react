const mockMe = jest.fn(a => Math.sqrt(a))
const t = (list) => {
    for (let index = 0; index < list.length; index++) {
        mockMe(list[index])
    }
}
t([1, 4, 6])
test('test121', () => {
    expect(mockMe.mock.calls.length).toBe(3);
})
test('test122', () => {
    expect(mockMe.mock.calls[2][0]).toBe(6);
})
test('test123', () => {
    expect(mockMe.mock.results[0].value).toBe(1);
})