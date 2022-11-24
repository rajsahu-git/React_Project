import React from 'react'
import { useState } from 'react'
function Tour({id, image, info, price, name, removeTour}) {
  // console.log(images.small)
  const [readmore, setReadmore] = useState(false)
  return (
    <div className='card'>
      <div className='card-img'>
        <img src={image} alt={name} />
      </div>
      <div className='detail'>
      <div >
        <h4>{name}</h4>
        <h4>{price}</h4>
      </div>
      <div>
        <p>{readmore ? info:`${info.substring(0,200)}...`}</p>
        <button onClick={()=>setReadmore(!readmore)} >{readmore ? "showless" : "readmore"} </button>
        <button onClick={() =>removeTour(id)} >Not intrested</button>
      </div>
      </div>
    </div>
  )
}

export default Tour