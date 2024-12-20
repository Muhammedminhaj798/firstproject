import React from 'react'
import HomeShoe from '../image/HomeShoe'
import { Link } from 'react-router-dom'
import useFetch from '../useFetch'
import Man from './Man'

function Home() {
  const {data} = useFetch("https://jsonplaceholder.typicode.com/users")
  console.log(data);
  
  return (
    <div>
      <div>
        <div className='absolute top-64'>
        <h1 className='text-6xl text-slate-50 font-bold'>hello good morning</h1>
         <div className='absolute flex justify-between px-24 top-24'>
        <Link to={"/man"} className='px-6 h-15 bg-gray-500'><button>SHOP MEN</button></Link>
        <div className='px-11 '>
        <Link to={"/women"} className='px-3 h-20 bg-gray-600'><button>SHOP WOMEN</button></Link>
        <div>
          <Link to={"/kids"} className='px-6 ml-40 h-20 bg-gray-600'><button>SHOP KIDS</button></Link>
        </div>
        </div>
        </div>
        </div>
        <HomeShoe />
        <Man/>
      </div>
   </div>
  )
}

export default Home
