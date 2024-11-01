import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList, addToStoredWishList } from '../../Utility/AddToDb';

const BookDetail = () => {
    const { bookId } = useParams();
    const data = useLoaderData();
    const id = parseInt(bookId);
    // console.log(data, id, bookId);
    const book = data.find(book => book.bookId === id);
    const { bookId: currentId, image } = book;

    const handleMarkAsRead = (id)=>{
        addToStoredReadList(id);
    }

    const handleWishList = (id)=>{
        addToStoredWishList(id);
    }

    return (
        <div>
            <h2>Details {bookId}</h2>
            <img className='w-32' src={image} alt="" />
            <button onClick={()=>handleMarkAsRead(bookId)} className='btn btn-outline btn-accent mr-4'>Mark as Read</button>
            <button onClick={()=>handleWishList(bookId)} className='btn btn-accent'>Wishlist</button>
        </div>
    );
};

export default BookDetail;