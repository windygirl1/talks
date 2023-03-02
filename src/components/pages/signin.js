import React from "react"

export const SignIn = () => {
  
  return (
    <div className="card" style={{width: '300px', margin: 'auto', marginTop: '150px'}}>
      <input className="card" placeholder="email"/>
      <input className="card" placeholder="password"/>    
      <button className="btn btn-primary">Sign in</button>
    </div>
  )  
}