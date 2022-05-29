import React from 'react'
import useJsonFetch from '../hooks/useJsonFetch'


function GetData() {

    const [data, loading, error] = useJsonFetch('http://localhost:7070/data');
    
    if(loading || !data){return};
  
  return (
      <p>Запрос выполнен со статусом: {data.status}</p>
  )
}



export default GetData
