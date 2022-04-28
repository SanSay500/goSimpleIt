import React from 'react'
import Create from '@/Pages/Order/Create'
import { myJson } from '../../mocks/review-data.js'
import ReviewContainer from './review-container'
import PortfolioContainer from './portfolio-container'
import Test from './Test'
import {Link} from "@inertiajs/inertia-react";

const Main = (props) => {

  return (
         <div className="mt-20">
             <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                 {props.auth.user
                     ? (
                         <Link href={route('dashboard')} className="text-sm text-gray-700 underline">
                             Dashboard
                         </Link>
                     )
                     : (
                         <>
                             <Link href={route('login')} className="text-sm text-gray-700 underline">
                                 Log in
                             </Link>

                             <Link href={route('register')} className="ml-4 text-sm text-gray-700 underline">
                                 Register
                             </Link>
                         </>
                     )}
             </div>
           <div className="container flex flex-col justify-center mx-auto">
           <Create />

              <PortfolioContainer portfolioList={myJson.portfolio}/>
              <ReviewContainer reviewsList={myJson.reviews}/>
            </div>
    </div>
  )
}
export default Main
