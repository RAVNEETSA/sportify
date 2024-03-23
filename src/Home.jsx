import React from 'react'

import Playlist from './Playlist'
import style from './CSS/Spotify.module.css'

import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
 import img4 from './assets/img4.png';
import img5 from './assets/img5.png';
 
import Slider from './Slider';
export default function App() 

{
  const playlistitems=[{
   
    img:img1,
       name:'Arjit singh  Radio',
    desc:'with neha kakkar,Pritam,kk and more'
  },
  {
    img:img2,
    name:'Diljit Dosanjh Radio',
    desc:'with Garry sandhu , Ranjit bawa and more'
  },
  {
    img:img3,
    name:'Kumar Sanu Radio',
    desc:'with Udit Narayan,alka yagnik and more'
  },
  {
    img:img4,
    name:'Sidhu Moosewalla Radio',
    desc:'With Ammy virk,Amritmaan  and more'
  },
  {
    img:img5,
    name:'KK Radio',
    desc:'With Ankit Tiwari,Mohit chohan,Javed Ali and more'
  },

  ]

 return (
   
    <>
      <div style={{display:'flex', marginTop:'10px'}}>
      <div className={style.leftside}>
        <Slider />
      </div>
      <div className={style.rightside}>
<Playlist item={playlistitems} />

  </div>
  </div>
   
    </>
  )
}