import React from 'react'
import { useHistory } from 'react-router-dom'
import routes from './routers/routes'

const Home = () => {
  let history = useHistory()

  const navTo = (url: String) => {  
    console.log(1)
    history.push(`${url}`)
  }

  return (
    <div>
      <ul>
        {
          routes.map((item, index) => {
            return (
            <li onClick={()=>{
              navTo(item.path)
            }} key={index}>{item.path}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Home