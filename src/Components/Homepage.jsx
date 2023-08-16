import React from 'react'
import withAuth from '../layout/withAuth';
const Homepage = () => {
  return (
    <div>
      This is home page
    </div>
  )
}

export default withAuth(Homepage);
