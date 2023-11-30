import React from 'react'
import AddBook from './AddBook';
import Link from 'next/link';
const Navbar = () => {
  return (
    <div>
        <div className="bg-blue-800">
            <div className="h-20 px-8 flex items-center">
                <Link href='/' className="text-white flex-bold flex-auto text-center">Book Review</Link>
                <Link href='/new-book' className="text-white flex-bold flex-auto text-center">Add New Book</Link>
                <Link href='/delete-book' className="text-white flex-bold flex-auto text-center">Delete Book</Link>
            </div>
        </div>
    </div>
  );
}

export default Navbar