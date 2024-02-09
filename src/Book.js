import { Header } from "./Header";

const Book = ({bookData, testVar, dummyVar=1}) => {
    console.log(bookData);
    console.log(testVar);
    console.log(dummyVar);
    return (
        <>
            <p>Book</p>
            <Header bookData={bookData}></Header>
        </>
    )
}

export default Book;