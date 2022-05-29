import React from 'react'
import useJsonFetch from '../hooks/useJsonFetch';


function GetError() {
    const [data, loading, error] = useJsonFetch('http://localhost:7070/error');

    if(loading || !error){return}
    
  return (
    <p>Ошибка: {error.status}</p>
  )
}

GetError.propTypes = {}

export default GetError
