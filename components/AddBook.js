import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import BookList from './BookList';
import Navbar from './Navbar';

const AddBook = () => {
    const BOOK_API_ADD_URL = "http://localhost:8081/api/books/add";
    const [isOpen, setIsOpen] = useState(false);
    const [book, setBook] = useState({
        id: "",
        bookId: "",
        title: "",
        author: "",
        releaseDate: "",
        reviewLink: "", 
        poster: "",

    });
    const [responseBook, setResponseBook] = useState({
        id: "",
        bookId: "",
        title: "",
        author: "",
        releaseDate: "",
        reviewLink: "", 
        poster: "",
    })

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    //All existing values of book will be added and updated
    const handleChange = (event) => {
        const value = event.target.value;
        setBook({ ...book, [event.target.name]: value });
    };

    const saveBook =async (e) => {
        e.preventDefault();
        const response = await fetch(BOOK_API_ADD_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(book),
        });
        if(!response.ok){
            throw new Error("Something wrong");
        }
        const _book =await response.json();
        setResponseBook(_book);
        reset(e);
    }

    const reset = (e) => {
        e.preventDefault;
        setBook({
            id: "",
            bookId: "",
            title: "",
            author: "",
            releaseDate: "",
            reviewLink: "", 
            poster: "",
            genres:"",
            backdrops: "",
            reviewIds:"",
        })
        setIsOpen(false);
    }

    return (
        <>
        <Navbar />
            <div className="container mx-auto my-8">
                <div className="h-12">
                    <button onClick={openModal} className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">Add Book</button>

                </div>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95">
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 "> Add New Book
                                </Dialog.Title>
                                <div className="flex max-w-md max-auto">
                                    <div className="py-2">
                                        <div className="h-14 my-4">
                                            <label className="block text-gray-600 text-sm font-normal">Title</label>
                                            <input
                                                type="text"
                                                name="title"
                                                value={book.title}
                                                onChange={(e) => handleChange(e)}
                                                className="h-10 w-96 border mt-2 px-2 py-2">

                                            </input>
                                        </div>                                        
                                        <div className="h-14 my-4">
                                            <label className="block text-gray-600 text-sm font-normal">Book Id</label>
                                            <input
                                                type="text"
                                                name="bookId"
                                                value={book.bookId}
                                                onChange={(e) => handleChange(e)}
                                                className="h-10 w-96 border mt-2 px-2 py-2">

                                            </input>
                                        </div>
                                        <div className="h-14 my-4">
                                            <label className="block text-gray-600 text-sm font-normal">Author</label>
                                            <input
                                                type="text"
                                                name="author"
                                                value={book.author}
                                                onChange={(e) => handleChange(e)}
                                                className="h-10 w-96 border mt-2 px-2 py-2">

                                            </input>
                                        </div>
                                        <div className="h-14 my-4">
                                            <label className="block text-gray-600 text-sm font-normal">releaseDate</label>
                                            <input
                                                type="text"
                                                name="releaseDate"
                                                value={book.releaseDate}
                                                onChange={(e) => handleChange(e)}
                                                className="h-10 w-96 border mt-2 px-2 py-2">

                                            </input>
                                        </div>
                                        <div className="h-14 my-4">
                                            <label className="block text-gray-600 text-sm font-normal">reviewLink</label>
                                            <input
                                                type="text"
                                                name="reviewLink"
                                                value={book.reviewLink}
                                                onChange={(e) => handleChange(e)}
                                                className="h-10 w-96 border mt-2 px-2 py-2">

                                            </input>
                                        </div>
                                        <div className="h-14 my-4">
                                            <label className="block text-gray-600 text-sm font-normal">poster</label>
                                            <input
                                                type="text"
                                                name="poster"
                                                value={book.poster}
                                                onChange={(e) => handleChange(e)}
                                                className="h-10 w-96 border mt-2 px-2 py-2">

                                            </input>
                                        </div>
                                        <div className="h-14 my-4 space-x-4 pt-4">
                                            <button onClick={saveBook} className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">
                                                Save
                                            </button>
                                            <button onClick={reset} className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
            <BookList book={responseBook}/>
        </>
    )
}

export default AddBook