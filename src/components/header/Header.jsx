import React from 'react'
import "./header.css"
import fotopersonal from "./imgCV.jpeg";
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';



export default function Header() {
  return (
    <div className='header'>
        <div className="headerPhoto">
          <img src={fotopersonal} alt="foto-personal" className={"headerPhotoImg"}/>
        </div>
        <div className="headerNombres">
          <h1>Santiago Vallejo Rodriguez</h1>
          <p>Tecnologo en analisis y desarrolo de software</p>
          <p>Desarrollador Web FullStack</p>
        </div>
        <div className="headerContacto">
          <ul className='contactList'>
              <li className='contactListItem'><p><SmartphoneIcon/></p>    <p>(+57) 3006861582</p></li>           
              <li className='contactListItem'><p><LocationOnIcon/></p>    <p>Pereira / Risaralda - Colombia</p></li>
              <li className='contactListItem'><p><EmailIcon/></p> <p>omasvallejo@misena.edu.co</p></li>  
              <li className='contactListItem'><p><AlternateEmailIcon/></p> <p>santtyvallejo6@gmail.com</p></li>            
          </ul>
        </div>       
    </div>
  )
}
