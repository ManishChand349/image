import React from 'react'

function imageCard({photo}) {
  return (
    <div className=" grid-cols-1">
     <img className='w-[300px] p' src={photo.url} alt={`${photo.title} image`} />
    </div>
  )
}

export default imageCard