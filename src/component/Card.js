import React from 'react'

function Card() {
    return (
        <div className='flex flex-wrap justify-between p-3 mt-4'>
            <div className='card shadow-lg rounded-lg hover:-translate-y-2 cursor-pointer'>
                <img src='https://igimages.gumlet.io/telugu/gallery/movies/dhamaka22/poster.jpg?w=160&dpr=2.6' className='h-70' />
                <h1 className='mb-1'>  <span className=' text-gray-400 font-bold pr-1'>Movie:  </span> Surya Bhai</h1>
                <h1 className='mb-1'> <span className=' text-gray-400 font-bold pr-1'>Rating:  </span> 5</h1>
                <h1 className='mb-1'> <span className=' text-gray-400 font-bold pr-1'>Year:  </span>  2022</h1>
            </div>

        </div >
    )
}

export default Card
