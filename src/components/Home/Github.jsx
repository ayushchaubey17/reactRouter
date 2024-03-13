import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'

function Github() {

  let [data,setData] = useState('');
  
  useEffect( ()=>{
  fetch('https://api.github.com/users/ayushchaubey17').then(
    (response)=>{return response.json()}
  )
  .then(
    (data)=>{
      setData(data);
    }
  ).catch();
 
  },[]);
    
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    {/* <img src={data.avatar_url} alt="Git picture" width={300} /> */}
    </div>
  )
}

export default Github

