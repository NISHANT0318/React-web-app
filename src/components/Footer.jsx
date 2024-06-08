import React from 'react'

export const Footer = ({loadMoreProducts}) => {
  return (
    <footer>
        <button onClick={loadMoreProducts}>Load More</button>
    </footer>
  )
}
