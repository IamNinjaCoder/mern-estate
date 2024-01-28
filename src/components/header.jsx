import React from 'react'
import {FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default function header() {
  return (
    <header className='bg-slate-200 shadow-md'>
    
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
      <Link to="/">

      
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
          <span className='text-orange-500'>Rajput</span>
          <span className="text-slate-400">Estate</span>
        </h1>
        </Link>
    <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
      <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
      <button>
        <FaSearch className='text-slate-600' />
      </button>
    </form>
    <ul className='flex gap-4'>
      <Link to='/'>
        <li className="sm:inline text-blue-700 hover:underline">
          Home
        </li>
      </Link>
      <Link to='/About.jsx'>
        <li className="hidden sm:inline text-blue-700 hover:underline">
          About
        </li>
      </Link>
      <Link to='/SignIn.jsx'>
        <li className="sm:inline text-red-700 hover:underline">
          SignIn
        </li>
      </Link>
    </ul>

    </div>




    </header>
  )
}
