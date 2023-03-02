import React from "react"
import { Link } from "react-router-dom"
import './Nav.css'

export const Nav = () => {
  return (
    <div className="Nav">
      <div> 
        <h2 className="card-dark" style={{textAlign: 'left'}}>SEND</h2>
        <Link className='btn btn-primary' to="/home" style={{borderRadius: '5px'}}>Главная</Link>  
        <Link className='btn btn-primary' to="/write" style={{borderRadius: '5px'}}>Написать</Link>  
        {/* <Link className='btn btn-primary' to="/signin" style={{borderRadius: '5px'}}>Sign in</Link>   */}
      </div>  
    </div> 
  )  
}