import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

export default function Admin() {
    const {user} = useContext(GlobalContext)
    console.log(user)
  return (
    <div>


      <h1 style={{ marginTop: '70px' }}>Admin</h1>
    

    </div>
  )
}
