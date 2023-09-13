import React from 'react'
import AddIcon from '@mui/icons-material/Add'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className=' header bg-black sticky z-10 top-0 text-3xl font-bold p-5 border-b-2 flex items-center justify-between border-gray-500'>
            <Link to={'/'}><span> <span className='text-red-500'>Filmy</span>Verse</span></Link>
            <Link to='/addmovie'><Button><h1 className='text-white text-xl  items-center'><AddIcon className='text-inherit mr-1 text-blue-500' /> <span className='font-bold'>Add New </span></h1></Button></Link>
        </div>
    )
}

export default Header