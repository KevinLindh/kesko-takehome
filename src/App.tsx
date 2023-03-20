import React, { useEffect, useState } from 'react'
import Orders from './component/Orders'
import './App.css'

function App() {
  const [dataSQL, setDataSQL] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then((response) => response.json())
      .then((data) => {
        setDataSQL(data)
      })
  }, [])

  return (
   <div>
    <section>
    <div className='App'>
      <h1>NORTHWIND</h1>
    </div>
      </section>
    <section className='allOrders'>
      <Orders data={dataSQL}></Orders>
    </section>
  </div>
  )
}

export default App