import React from 'react'
import useJsonFetch from '../hooks/useJsonFetch';


function GetLoading() {

    const [data, loading, error] = useJsonFetch('http://localhost:7070/loading');

    if(!loading){return}
  return (
    <progress />
    )
}



export default GetLoading
