import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState({})
    // useEffect(() => {
    //  fetch('https://api.github.com/users/charumehra')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-red-100 text-black p-4 text-3xl flex flex-col  justify-center items-center gap-6'>Github name: {data.name}
    <link rel="stylesheet" href="https://api.github.com/users/charumehra" />
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/charumehra')
    return response.json()
}