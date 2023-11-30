import React from 'react'

const Book = ({book, deleteBook}) => {
    return (
        <tr key={book.id}>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{book.title}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{book.author}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{book.releaseDate}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">
                    <a href={book.reviewLink} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{book.title} Youtube Review Link</a></div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">
                    <img src={book.poster} />
                    </div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <a 
                href="#" 
                className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer px-4">
                    Edit</a>
                <a 
                onClick={(e,id) => deleteBook(e, book.id)}
                href="#" 
                className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer">
                    Delete</a>
            </td>

        </tr>
    )
}

export default Book