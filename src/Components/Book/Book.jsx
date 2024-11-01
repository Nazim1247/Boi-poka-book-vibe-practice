import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, image, bookName, author, tags, category } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div>
                <div className="card bg-base-100 border-2">
                    <figure className='w-full h-52 px-32 py-8'>
                        <img
                            src={image}
                            alt="Image" />
                    </figure>
                    <div className="card-body">
                        <div className="flex gap-4">
                            {
                                tags.map((tag, index) => <button key={index} className="btn btn-xs">{tag}</button>)
                            }
                        </div>
                        <h2 className="card-title">
                            {bookName}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>By: {author}</p>
                        <div className="border-t-2 border-dashed"></div>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">{category}</div>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;