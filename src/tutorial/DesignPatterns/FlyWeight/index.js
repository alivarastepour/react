import {addBook,getBook} from "./bookStore";

const FlyWeight = () => {
    addBook('crime and punishment');
    addBook('crime and punishment');
    addBook('crime and punishment');
    addBook('war and peace')
    addBook('war and peace')
    addBook('war and peace')
    const books = getBook();
    for (const book of books) {
        console.log(book[0])
    }
    return <>
        {

        }
    </>
}
export default FlyWeight;