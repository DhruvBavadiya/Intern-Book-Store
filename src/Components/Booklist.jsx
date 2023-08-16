import React, { useEffect, useState } from 'react'
// import Booktable from './Booktable'
import { Bookstyle } from '../Styles/Bookstyle'
import { Typography } from '@mui/material'
import bookService from '../Service/bookService'
import { useNavigate } from 'react-router-dom'

const Booklist = () => {
  const [books, setBooks] = useState([])
  const [bookcount, setBookcount] = useState(0);
  const navigate = useNavigate()

  const length = bookcount; // Replace with your desired length
  const booktableComponents = async () => {
    await bookService.getBooks().then((response) => {
      if (response && response.status === 200) {
        setBooks(response.data.result);
        setBookcount(response.data.result.length);
        // console.log(books)
      }
    })
  };

  useEffect(() => {
    booktableComponents();
  }, [])
 
  const handleEdit = (e)=>{
    e.preventDefault()
    navigate("/edit-book")
  }


  return (
    <div style={Bookstyle.booklistContainer}>
      <Typography variant='h4' sx={Bookstyle.booklistTitle}>
        Book List
      </Typography>
      <hr />
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Book Id</th>
            <th scope="col">Name</th>
            <th scope="col">Cost</th>
            <th scope="col">Category</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>

        {Array.isArray(books) && books.map((book, index) => (
          <tbody>
            <tr>
              <th scope="row">{book.id}</th>
              <td>{book.name}</td>
              <td>{book.price}</td>
              <td>{book.category}</td>
              <td>
                <button className='btn btn-primary m-1'
                onClick={handleEdit}
                >Edit</button>
                <button className='btn btn-danger'>Delete</button>
              </td>
            </tr>
          </tbody>
          // <Booktable bookname ={book.name} Price = {book.price} Category = {book.category}  />
        ))}
      </table>
    </div>
  )
}

export default Booklist




























// // import React, { useEffect, useState } from 'react';
// // import withAuth from '../layout/withAuth';
// // import { Typography } from '@mui/material';
// // import { Bookstyle } from '../Styles/Bookstyle';
// // import Card from './Card';
// // import bookService from '../Service/bookService';

// // const Booklist = () => {
// //   const [bookcount, setBookcount] = useState(0);
// //   const [sortBy, setSortBy] = useState('name');
// //   const [books, setbooks] = useState([])

// //   const getBooks = async () => {
// //     await bookService.getBooks().then((responce) => {
// //       if (responce && responce.status === 200) {
// //         setbooks(responce.data.result)
// //         setBookcount(responce.data.result.length);
// //       }
// //     })
// //   }
// //   useEffect(() => {
// //     getBooks()
// //   }, [])
// //   console.log(books)
// //   // setBookcount(books.length)

// //   const sortedBooks = [...books]; // Create a copy of the books array

// //   if (sortBy === 'name') {
// //     // Assuming sortedBooks is an array of book objects
// //     sortedBooks.sort((a, b) => {
// //       const titleA = a.title || ''; // Default to an empty string if title is missing
// //       const titleB = b.title || ''; // Default to an empty string if title is missing
// //       return titleA.localeCompare(titleB);
// //     });
// //   } else if (sortBy === 'cost') {
// //     sortedBooks.sort((a, b) => a.cost - b.cost);
// //   }


// //   return (
// //     <div style={Bookstyle.booklistContainer}>
// //       <Typography variant='h4' sx={Bookstyle.booklistTitle}>
// //         Book Store
// //       </Typography>
// //       <hr />
// //       <div>
// //         <div style={Bookstyle.booklistCount}>
// //           <div>Items : {bookcount} Items</div>
// //           <div style={{ display: 'flex', alignItems: 'center' }}>
// //             <input
// //               type='text'
// //               aria-label='Item search'
// //               placeholder='Search item...'
// //               style={Bookstyle.itemCountInput}
// //             />
// //           </div>
// //           <div class="dropdown">
// //             <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
// //               Sort By
// //             </button>
// //             <ul class="dropdown-menu">
// //               <li>
// //                 <a
// //                   class="dropdown-item"
// //                   href="#"
// //                   onClick={() => setSortBy('name')}
// //                 >
// //                   Name
// //                 </a>
// //               </li>
// //               <li>
// //                 <a
// //                   class="dropdown-item"
// //                   href="#"
// //                   onClick={() => setSortBy('cost')}
// //                 >
// //                   Cost
// //                 </a>
// //               </li>
// //             </ul>
// //           </div>

// //         </div>
// //         <div >
// //           <div className='books' style={Bookstyle.cardContainer}>
// //             {Array.isArray(books) && books.map((book, index) => (
// //               <div key={index} style={{ ...Bookstyle.cardContainer, width: 'calc(33.33% - 20px)' }}>
// //                 <Card key={index} title={book.name} description={book.description} img={book.base64image} category={book.category} />
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default withAuth(Booklist);







// import React, { useEffect, useState } from 'react';
// import Pagination from '@mui/material';
// import withAuth from '../layout/withAuth';
// import { Typography } from '@mui/material';
// import { Bookstyle } from '../Styles/Bookstyle';
// import Card from './Card';
// import bookService from '../Service/bookService';

// const Booklist = () => {
//   const [bookcount, setBookcount] = useState(0);
//   const [sortBy, setSortBy] = useState('name');
//   const [books, setBooks] = useState([])
//   const [searchQuery, setSearchQuery] = useState('');

//   const getBooks = async () => {
//     await bookService.getBooks().then((response) => {
//       if (response && response.status === 200) {
//         setBooks(response.data.result);
//         setBookcount(response.data.result.length);
//       }
//     })
//   }


//   const searchchange = (event)=>{
//     setSearchQuery(event.target.value)
//     const filterBooks = books.filter(books=>{
//       return books.name.toLowerCase().includes(searchQuery.toLowerCase());
//     })
//     console.log(filterBooks)
//   }

//   useEffect(() => {
//     getBooks();
//   }, []);

//   // Sorting logic
//   const sortedBooks = [...books]; // Create a copy of the books array

//   if (sortBy === 'name') {
//     sortedBooks.sort((a, b) => a.name.localeCompare(b.name));
//   } else if (sortBy === 'cost') {
//     sortedBooks.sort((a, b) => a.price - b.price);
//   }

//   const filteredBooks = sortedBooks.filter((book) =>
//   book.name.toLowerCase().includes(searchQuery.toLowerCase())
// );

//   return (
//     <div style={Bookstyle.booklistContainer}>
//       <Typography variant='h4' sx={Bookstyle.booklistTitle}>
//         Book Store
//       </Typography>
//       <hr />
//       <div>
//         <div style={Bookstyle.booklistCount}>
//           <div>Items : {bookcount} Items</div>
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             <input
//             type='text'
//             aria-label='Item search'
//             placeholder='Search item...'
//             style={Bookstyle.itemCountInput}
//             value={searchQuery}
//             onChange={searchchange}
//             />
//           </div>
//           <div className="dropdown">
//             <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//               Sort By
//             </button>
//             <ul className="dropdown-menu">
//               <li>
//                 <a
//                   className="dropdown-item"
//                   href="#"
//                   onClick={() => setSortBy('name')}
//                 >
//                   Name
//                 </a>
//               </li>
//               <li>
//                 <a
//                   className="dropdown-item"
//                   href="#"
//                   onClick={() => setSortBy('cost')}
//                 >
//                   Cost
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div>
//           <div className='books' style={Bookstyle.cardContainer}>
//             {Array.isArray(filteredBooks) && filteredBooks.map((book, index) => (
//               <div key={index} style={{ ...Bookstyle.cardContainer, width: 'calc(33.33% - 20px)' }}>
//                 <Card key={index} title={book.name} description={truncateDescription(book.description, 5)}
//                 img={book.base64image} category={book.category} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// function truncateDescription(description, wordCount) {
//   if (!description) return ''; // Handle empty descriptions
//   const words = description.split(' ');
//   const truncatedWords = words.slice(0, wordCount);
//   return truncatedWords.join(' ') + (words.length > wordCount ? '...' : ''); // Add ellipsis if truncated
// }


// export default withAuth(Booklist);










// // import React, { useState } from 'react';
// // import withAuth from '../layout/withAuth';
// // import { Typography } from '@mui/material';
// // import { Bookstyle } from '../Styles/Bookstyle';
// // import Card from './Card';

// // const Booklist = () => {
// //   const [bookcount, setBookcount] = useState(0);



// //   return (
// //     <div style={Bookstyle.booklistContainer}>
// //       <Typography variant='h4' sx={Bookstyle.booklistTitle}>
// //         Book Store
// //       </Typography>
// //       <hr />
// //       <div>
// //         <div style={Bookstyle.booklistCount}>
// //           {/* ... other content */}
// //           <div className='books' style={Bookstyle.booksContainer}>
// //             {books.map((book, index) => (
// //               <div key={index} style={Bookstyle.cardContainer}>
// //                 <Card title={book.title} description={book.description} img={book.img} />
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default withAuth(Booklist);
