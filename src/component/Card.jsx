import React from 'react'
import { useState, useEffect } from 'react'
// import { TailSpin } from 'react-loader-spinner'
import ReactStars from 'react-stars'
import { getDocs } from 'firebase/firestore'
import { movieRef } from './firebase/Firebase'
// {
//     name: "Suriya Bhai",
//     rating: 5,
//     year: 2022,
//     img: 'https://igimages.gumlet.io/telugu/gallery/movies/dhamaka22/poster.jpg?w=160&dpr=2.6'
// },

function Card() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function getData() {
            const _data = await getDocs(movieRef)
            _data.forEach((doc) => {
                setData((prev) => [...prev, { ...(doc.data()), id: doc.id }])
            })
        }
        getData()
    }, [])
    return (
        <div className='flex flex-wrap justify-between px-3 mt-4'>
            {

                data.map((e, i) => {
                    return (
                        <div key={i} className='card shadow-lg rounded-lg hover:-translate-y-2 cursor-pointer mt-5'>
                            <img src={e.image} className=' h-60 md:h-72' />
                            <h1 className='mb-1'>  <span className=' text-gray-400 font-bold pr-1'>Movie:  </span>{e.title}</h1>
                            <h1 className='mb-1 flex items-center'> <span className=' text-gray-400 font-bold pr-1'>Rating:  </span> <ReactStars size={20} edit={false} value={5} half={true} /></h1>
                            <h1 className='mb-1'> <span className=' text-gray-400 font-bold pr-1'>Year:  </span>  {e.year}</h1>
                        </div>
                    )
                })
            }



        </div >
    )
}

export default Card
