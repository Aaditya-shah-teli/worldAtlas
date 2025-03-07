import React from 'react'
import { Headers } from '../UI/Headers'
import { Footer } from '../UI/Footer'
import { Outlet } from 'react-router-dom'
export const AppLayout = () => {
  return (
  <>
<Headers/>
<Outlet/>
<Footer/>
</>
  )
}
