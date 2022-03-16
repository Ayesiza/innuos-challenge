import React from 'react'
import Filter from './Filter'

const Filters = () => {
  return (
    <div  className='borderedContainer'>
    <b>Filter: </b>
    {["All", "Qobuz", "Local"]
    .map(category =>(
        <Filter category={category}
       
        />
    ))
    }
    </div>
  )
}

export default Filters