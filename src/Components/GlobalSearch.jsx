import React, { useEffect, useState } from 'react';
import { globalStyle } from '../Styles/globalStyle';
import { Bookstyle } from '../Styles/Bookstyle';
import bookService from '../Service/bookService';

const GlobalSearch = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([])
  const [bookcount, setBookcount] = useState(0);

  const getBooks = async () => {
    await bookService.getBooks().then((response) => {
      if (response && response.status === 200) {
        setBooks(response.data.result);
        setBookcount(response.data.result.length);
      }
    })
  }
  useEffect(() => {
    getBooks();
  }, []);


  const searchchange = (event)=>{
    setSearchQuery(event.target.value)
    const filterBooks = books.filter(books=>{
      return books.name.toLowerCase().includes(searchQuery.toLowerCase());
    })
    console.log(filterBooks)
  }
  



  return (
    <div style={globalStyle.searchContainer}>
      <input
      type='text'
      aria-label='Item search'
      placeholder='Search item...'
      style={Bookstyle.itemCountInput}
      value={searchQuery}
      onChange={searchchange}
      />
    </div>
  );
};

export default GlobalSearch;
