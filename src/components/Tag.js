import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'
import Usegif from '../hooks/Usegif'

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

const Tag = () => {
    const [tag, setTag] = useState('')
    const {gif, loading, fetchData} = Usegif(tag)
    

  return (
    <div className='mt-[15px] w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5'>
      <h1 className='text-2xl underline uppercase font-bold'>Random {tag} GIF</h1>

      {
        loading ? (<Spinner />): (<img src={gif} width="450" />)
      }

      <input className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
      onChange={(e) => setTag(e.target.value)}
      value={tag} />

      <button onClick={() => fetchData(tag)}
      className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]'>
        Generate
      </button>
    </div>
  )
}

export default Tag
