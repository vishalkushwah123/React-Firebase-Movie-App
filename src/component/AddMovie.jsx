import React from 'react'
import { useState } from 'react'
import { addDoc } from 'firebase/firestore'
import { TailSpin } from 'react-loader-spinner'
import { movieRef } from './firebase/Firebase'
import swal from 'sweetalert'

function AddMovie() {
    const [form, setForm] = useState({
        title: '',
        year: '',
        description: '',
        image: ''
    })

    const addmovie = async () => {
        setLoading(true)
        await addDoc(movieRef, form)
        swal({
            title: 'Successfully Added',
            icon: 'success',
            button: false,
            timer: 3000
        })
        setLoading(false)
    }
    const [loading, setLoading] = useState(false)


    return (
        <div>
            <section class="text-white-600 body-font relative">
                <div class="container px-5 py-20 mx-auto">
                    <div class="flex flex-col text-center w-full mb-4">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Add New Movie</h1>
                    </div>
                    <div class="lg:w-1/2 md:w-2/3 mx-auto">
                        <div class="flex flex-wrap -m-2">
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="title" class="leading-7 text-lg text-white-600">Title</label>
                                    <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} type="text" id="title" name="title" class="w-full bg-white-100 bg-opacity-50 rounded border border-white-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="year" class="leading-7 text-xl text-white-600">Year</label>
                                    <input value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} type="number" id="year" name="year" class="w-full bg-white-100 bg-opacity-50 rounded border border-white-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="p-2 w-full">
                                <div class="relative">
                                    <label for="image" class="leading-7 text-xl text-white-600">Image Link</label>
                                    <input value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} id="image" name="image" class="w-full bg-white-100 bg-opacity-50 rounded border border-white-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                                </div>
                            </div>
                            <div class="p-2 w-full">
                                <div class="relative">
                                    <label for="description" class="leading-7 text-xl text-white-600">Description</label>
                                    <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} id="description" name="description" class="w-full bg-white-100 bg-opacity-50 rounded border border-white-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>

                            <div class="p-2 w-full">
                                <button onClick={addmovie} type='submit' class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"> {loading ? <TailSpin height={25} color='white' /> : "Submit"} </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AddMovie
