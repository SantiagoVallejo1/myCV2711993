import React from 'react'
import "./footer.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';




export default function Footer() {
  return (
    <div className='footer'>
        <ul className='ulFooter'>
            <li className='contactListItemFooter'><a href="https://github.com/SantiagoVallejo1"><p><GitHubIcon/></p></a></li>
            <li className='contactListItemFooter'><a href="https://co.linkedin.com/in/santiago-vallejo-7a4611263"><p><LinkedInIcon/></p></a></li>
            <li className='contactListItemFooter'><a href="https://www.facebook.com/santiago.vallejo.77312?mibextid=JRoKGi"><p><FacebookIcon/></p></a></li>
        </ul>

    </div>
  )
}
