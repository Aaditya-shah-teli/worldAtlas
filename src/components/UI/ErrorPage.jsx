import React from 'react'
import {NavLink, useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  
  return (
<div><h1>
  Opps ! an {error.data}
  </h1>
  <NavLink to="/"><button>Go home</button></NavLink>
</div>
  )
}
