import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError();
  console.log(error);
  // provide the error that was thrown
  return (
    <div>
      Something went wrong!
      <p> {error.statusText} </p>
    </div>
  )
}

export default Error