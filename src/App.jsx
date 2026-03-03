import Footer from './Component/Footer/Footer'
import Main from './Component/Main/Main'
import Navbar from './Component/Navbar/Navbar'
import Banner from './Component/Banner/Banner'
import './index.css'

function App() { 

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner> 
      <div className='mb-10'>
        <Main></Main>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
