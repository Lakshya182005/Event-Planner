import React from 'react'

function Login({setlogin}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#640D5F] p-4">
        
        <form onSubmit={()=>{setlogin(true)}} className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden p-8">
            <div className="mb-8 text-center">
                <p className="text-2xl font-bold text-[#D91656]">
                    Login to your account
                </p>
            </div>
            <div  className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-[#640D5F] mb-1">
                Email
                </label>
                <input id="email" type = "email" placeholder="email" required className="w-full px-4 py-2 border border-[#FFB200] rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5B00]"/>
            </div>
            <div className="mb-8">
                <label htmlFor="password" className="block text-sm font-medium text-[#640D5F] mb-1">
                Password
                </label>
                <input id="password" type = "Password" placeholder="Password" className="w-full px-4 py-2 border border-[#FFB200] rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5B00]"/>
            </div>
            <input type="submit" placeholder="Login" className="w-full bg-[#D91656] hover:bg-[#EB5B00] text-white font-bold py-2 px-4 rounded-md transition duration-200 cursor-pointer"/>
        </form>
    </div>
  )
}

export default Login