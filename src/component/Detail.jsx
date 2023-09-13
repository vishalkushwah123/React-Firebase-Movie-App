import React from 'react'
import ReactStars from 'react-stars'
import { useParams } from 'react-router-dom'

function Detail() {
    const {id} = useParams()
    return (
        <div className='p-4 flex mt-4 flex-col md:flex-row item center w-full   '>
            <img className='md:h-96 md:sticky md:top-24  ' src="https://igimages.gumlet.io/telugu/gallery/movies/dhamaka22/poster.jpg?w=160&dpr=2.6" alt="" />
            <div className='md:ml-4 ml-0 w-full md:w1/2'>
                <h1 className='text-3xl font-bold text-gray-400'>Star War <span className='text-xl'> (2021)
                </span></h1>
                <ReactStars size={20} half={true} value={4.5} edit={false} />
                <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, temporibus commodi, enim quibusdam illum suscipit culpa sequi blanditiis accusantium architecto rem ducimus aspernatur quis saepe! Fugit, est quam illum quasi explicabo tenetur fugiat ullam eos cumque autem dolorem quis nesciunt. Magnam magni, mollitia cum culpa nostrum quibusdam repellat. Tempora facilis possimus quisquam quod ipsa labore ipsum voluptatem, eos perspiciatis mollitia debitis deserunt, rem inventore dolorem doloribus illo magnam repudiandae laboriosam, aperiam molestias fugiat sapiente! Natus, ratione odio eum quam at expedita autem fuga deleniti esse consectetur quis officiis libero. Obcaecati recusandae quidem, et itaque provident nisi deleniti id nam blanditiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, necessitatibus doloribus, porro veniam laudantium facilis hic qui, sit natus aliquam dicta quasi cumque omnis dignissimos temporibus iusto quibusdam culpa excepturi.</p>
 
            </div>
        </div>
    )
}

export default Detail
