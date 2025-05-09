import React from 'react'

const AddMovie = () => {
  return (
    <div className='addMovie'>
    <form>
        <input type="text" placeholder='Movie Name' required/>
        <input type="text" placeholder='Movie Genre' required/>
        <input type="text" placeholder='Movie Year'/>
        <button>Add Movie</button>
    </form>
    <div className='top'>
    <a href='#/' className=''>Back to top</a>
    </div>
    </div>
  )
}

export default AddMovie