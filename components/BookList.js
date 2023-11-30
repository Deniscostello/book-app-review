import React, { useEffect, useState } from 'react'
import Book from './Book';

export const BookList = ({book}) => {
    const BOOK_API_BASE_URL = "http://localhost:8080/api/books";
    const [books, setBooks] = useState(null);
    const [loading, setLoading] = useState(true);
    const [bookId, setBookId] = useState(null);
    const [responseBook, setResponseBook] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(BOOK_API_BASE_URL, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const books = await response.json();
            setBooks(books);
        }catch (error) {
            console.log(error);
        }
        setLoading(false);
    }
    fetchData();
    }, [book, responseBook]);

    const deleteBook = (e, id) =>{
        e.preventDefault;
        fetch(BOOK_API_BASE_URL + "/" + id , {
            method: "DELETE", 
        }).then((res) => {
            if(books) {
                setBooks((prevElement) =>{
                    return prevElement.filter((book) => book.id !== id);
                });
            }
        });
    };


    return (
        
        <div className="container mx-auto my-8">
            <div className="flex shadow border-b">
                <table className="min-w-full">
                    <thead className="bg-gray-50">
                            <th className="text-center flex justify-centerfont-medium text-gray-800 uppercase tracking-wide py-3 px-6 ">Current Books</th>
                    </thead>
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6 ">Title</th>
                            <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6 ">Author</th>
                            <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6 ">Release Date</th>
                            <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6 ">Review Link</th>
                            <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6 ">Poster</th>
                            <th className="text-right font-medium text-gray-500 uppercase tracking-wide py-3 px-6 "> Actions</th>
                        </tr>
                    </thead>
                    {!loading && (
                        <tbody className="bg-white">
                            {books?.map((book) => (
                                 <Book  book={book} key={book.id} deleteBook={deleteBook} />
                            ))}
                       
                    </tbody>
                    )}
                    
                </table>

            </div>
        </div>
        
    )
}
export default BookList;