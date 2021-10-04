import { Button } from "@material-ui/core"
import React from 'react'
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'
import "../App.css"
const FinalPage = () => {
const info =useParams();
console.log(info.name);
    return (
      <center>

        <div className="finalPage">
           <span className="welcome">WELCOME {info.name} <EmojiEmotionsIcon style={{fontSize:'4rem'}}/>
           <br/>
         <span className='backToPage'>
         <Link to={'/'} style={{textDecoration:'none'}}>
         <Button variant="contained" color="secondary" style={{textDecoration:'none',padding:'1%',margin:'2%'}}>Sign In</Button>
         </Link>
         <Link to={'/login'} style={{textDecoration:'none'}}>
         <Button variant="contained" color="secondary" style={{textDecoration:'none',padding:'1%'}}>Login</Button>
         </Link>
           </span>
         </span>
           
           <img className="finalImg" alt="forest" src='https://images.pexels.com/photos/418831/pexels-photo-418831.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'></img>
         </div>
      </center>
    )
}

export default FinalPage
