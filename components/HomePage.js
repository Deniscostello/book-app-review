import React, { useEffect, useState } from 'react'
import Book from './Book';
import Layout from './Layout';

export const HomePage = () => {
  const BOOK_API_BASE_URL = "http://localhost:8080/api/books";
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState({
      id: "",
      bookId: "",
      title: "",
      author: "",
      releaseDate: "",
      reviewLink: "", 
      poster: "",

  });

  //All existing values of book will be added and updated
  const handleChange = (event) => {
      const value = event.target.value;
      setBook({ ...book, [event.target.name]: value });
  }
  
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
        console.log(books);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6 ">First Name</th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6 ">Last Name</th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6 ">EmailId</th>
              <th className="text-right font-medium text-gray-500 uppercase tracking-wide py-3 px-6 "> Actions</th>
            </tr>
          </thead>
          {!loading && (
            <tbody>
              {books?.map((book) => (
                <Layout book={book} key={book.id} />
              ))}

            </tbody>

          )}
        </table>
      </div>
    </div>
  )
}
export default HomePage;
