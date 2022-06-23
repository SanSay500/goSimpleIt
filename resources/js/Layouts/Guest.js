import React from 'react'
import HeaderLoginContainer from '@/Components/header-login'
import Footer from '@/Components/footer'

export default function Guest ({ children }) {
  return (
      <>
      <HeaderLoginContainer/>
        <div className="loginContainer flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
       <Footer/> 
       </>
  )
}
