import React, { useEffect, useState } from 'react';
import Slider from './Slider';


const Home = () => {
    const [chef,setChef]=useState([]);
    useEffect(()=>{
        fetch('https://the-chef-server-site-mahbubnishan.vercel.app/chef')
        .then(res=>res.json())
        .then(data =>setChef(data))
        .catch(error=>console.error(error))
    },[])
    return (
        <div>

            <h1 className='text-4xl font-bold text-emerald-600 text-center my-10'>  Welcome to Chef Hunter </h1>
            <Slider></Slider>  

            <h2 className=' text-3xl font-bold text-fuchsia-700 my-10 text-center'> .....Our Chef.....</h2>
            <div>
                {
                    chef.map(c=>

                        <>

                       
                        <div className=' flex flex-col items-center justify-items-center my-10 rounded-lg border-teal-400'>
                            <div className='flex flex-row items-center justify-items-center my-5' >
                           <img className='w-20 h-20 rounded-e' src={c.photo_url} alt="" /> 
                        <p>I am <span className='text-2xl text-amber-600'>{c.name}</span> </p>
                        </div>
                        <h1>My Experience about <span className='text-sky-600'>{c.experience}</span> </h1>
                        <h2>My Specail recipi... <span className=' text-fuchsia-950'>{c.specialty}</span></h2>
                        </div>
                        
                        
                        </>
                        )
                }
            </div>
        </div>
    );
};

export default Home;