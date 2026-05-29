import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'
import Usegif from '../hooks/Usegif'

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

const Random = () => {
     
    const {gif, loading, fetchData} = Usegif()
    
  return (
    <div className='mt-[15px] w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5'>
      <h1 className='text-2xl underline uppercase font-bold'>A Random GIF</h1>

      {
        loading ? (<Spinner />): (<img src={gif} width="450" />)
      }
      <button onClick={() => fetchData()}
      className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]'>
        Generate
      </button>
    </div>
  )
}

export default Random
