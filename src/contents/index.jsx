import React from 'react'


// import react router components
import { Route, Routes } from 'react-router-dom'


// import Pages
import HomePage from './Home'
import AccountPage from './Account'
import BookingPage from './Booking'



const Pages = () => {
  return (
    <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/booking" exact element={<BookingPage />} />
        <Route path="/account" exact element={<AccountPage />} />
    </Routes>
  )
}

export default Pages