import React, { useEffect, useState } from 'react'
import Orders from './component/Orders'
import './App.css'

function App() {
  const [dataSQL, setDataSQL] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://kesko-backend.onrender.com/');
        const data = await response.json();
        setDataSQL(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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