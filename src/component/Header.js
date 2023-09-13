import React from 'react'
import AddIcon from '@mui/icons-material/Add'
import { Button } from '@mui/material'

function Header() {
    return (
        <div className='text-3xl font-bold p-5 border-b-2 flex items-center justify-between border-gray-500'>
            <span> <span className='text-red-500'>Filmy</span>Verse</span>
            <Button><h1 className='text-white text-xl  items-center'><AddIcon className='text-inherit mr-1 text-blue-500' /> <span className='font-bold'>Add New </span></h1></Button>
        </div>
    )
}

export default Header