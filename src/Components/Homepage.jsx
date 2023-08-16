import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material';
import withAuth from '../layout/withAuth';
import { Typography } from '@mui/material';
import { Bookstyle } from '../Styles/Bookstyle';
import Card from './Card';
import bookService from '../Service/bookService';

const Homepage = () => {
  const [bookcount, setBookcount] = useState(0);
  const [sortBy, setSortBy] = useState('name');
  const [books, setBooks] = useState([])
  const [searchQuery, setSearchQuery] = useState('');

  const getBooks = async () => {
    await bookService.getBooks().then((response) => {
      if (response && response.status === 200) {
        setBooks(response.data.result);
        setBookcount(response.data.result.length);
      }
    })
  }


  const searchchange = (event)=>{
    setSearchQuery(event.target.value)
    const filterBooks = books.filter(books=>{
      return books.name.toLowerCase().includes(searchQuery.toLowerCase());
    })
    console.log(filterBooks)
  }

  useEffect(() => {
    getBooks();
  }, []);

  // Sorting logic
  const sortedBooks = [...books]; // Create a copy of the books array

  if (sortBy === 'name') {
    sortedBooks.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'cost') {
    sortedBooks.sort((a, b) => a.price - b.price);
  }

  const filteredBooks = sortedBooks.filter((book) =>
  book.name.toLowerCase().includes(searchQuery.toLowerCase())
);

  return (
    <div style={Bookstyle.booklistContainer}>
      <Typography variant='h4' sx={Bookstyle.booklistTitle}>
        Book Store
      </Typography>
      <hr />
      <div>
        <div style={Bookstyle.booklistCount}>
          <div>Items : {bookcount} Items</div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
            type='text'
            aria-label='Item search'
            placeholder='Search item...'
            style={Bookstyle.itemCountInput}
            value={searchQuery}
            onChange={searchchange}
            />
          </div>
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Sort By
            </button>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => setSortBy('name')}
                >
                  Name
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => setSortBy('cost')}
                >
                  Cost
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className='books' style={Bookstyle.cardContainer}>
            {Array.isArray(filteredBooks) && filteredBooks.map((book, index) => (
              <div key={index} style={{ ...Bookstyle.cardContainer, width: 'calc(33.33% - 20px)' }}>
                <Card key={index} title={book.name} description={truncateDescription(book.description, 5)} 
                img={book.base64image} category={book.category} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
function truncateDescription(description, wordCount) {
  if (!description) return ''; // Handle empty descriptions
  const words = description.split(' ');
  const truncatedWords = words.slice(0, wordCount);
  return truncatedWords.join(' ') + (words.length > wordCount ? '...' : ''); // Add ellipsis if truncated
}


export default withAuth(Homepage);









