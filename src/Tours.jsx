import React from 'react'
import Tour from './Tour'

function Tours({tours, removeTour}){
  
  return (
    <section className='home'>
        <div className="heading">
            <h2>Our tours</h2>
        </div>
        <div>
            {tours.map((tour)=>{
                    return  <Tour  {...tour} removeTour={removeTour} />
                }
            )}
        </div>  
    </section>
  )
}

export default Tours