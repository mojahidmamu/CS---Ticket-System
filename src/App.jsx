import Footer from './Component/Footer/Footer'
import Main from './Component/Main/Main'
import Navbar from './Component/Navbar/Navbar'
import Banner from './Component/Banner/Banner'
import './index.css'
import { useState } from 'react'

function App() { 

  const [inProgressTickets, setInProgressTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  return (
    <>
      <Navbar />
      <Banner inProgressCount={inProgressTickets.length}  resolvedCount={resolvedTickets.length} />
      <div className='mb-10'>
        <Main
          inProgressTickets={inProgressTickets}
          setInProgressTickets={setInProgressTickets}
          resolvedTickets={resolvedTickets}
          setResolvedTickets={setResolvedTickets}
        />
      </div>

      <Footer />
    </>
  )
}

export default App;