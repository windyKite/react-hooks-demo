import React from 'react'
import { useHistory } from 'react-router-dom'

const Home = () => {
  let history = useHistory()

  const list = [
    'useState'
  ]
  
  const navTo = (url: String) => {  
    console.log(1)
    history.push(`/${url}`)
  }

  return (
    <div>
      <ul>
        {
          list.map((item, index) => {
            return (
            <li onClick={()=>{
              navTo(item)
            }} key={index}>{item}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Home