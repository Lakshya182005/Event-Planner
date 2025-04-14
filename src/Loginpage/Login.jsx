import React from 'react'

function Login({setlogin}) {
  return (
    <div>
        
        <form onSubmit={()=>{setlogin(true)}}>
            <div>
                <p>
                    Login to your account
                </p>
            </div>
            <div className="email">
                <label htmlFor="email">Email</label>
                <input id="email" type = "text" placeholder="email" required/>
            </div>
            <div className="Password">
                <label htmlFor="password">Password</label>
                <input id="password" type = "Password" placeholder="Password"/>
            </div>
            <input type="submit" placeholder="Login"/>
        </form>
    </div>
  )
}

export default Login