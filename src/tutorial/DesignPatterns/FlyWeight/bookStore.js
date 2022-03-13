let books = new Map();
export const addBook = (name) => {
    if (books.has(name))
        books.set(name, books.get(name) + 1)
    else
        books.set(name, 1)
}
export const getBook = () => books;
