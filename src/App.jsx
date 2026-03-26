
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Players from './Components/Players/Players'
import { Suspense } from 'react'

const fetchPlayer = async () => {
  const res = await fetch('/player.json')
  return res.json();
}

function App() {
  const playersPromise= fetchPlayer();
  
  

  return (
    <>
    <header>
      <Navbar></Navbar>
      <Banner/>
    </header>
    <main>
      <Suspense fallback-={<span className="loading loading-dots loading-xl"></span>}>
        <Players playersPromise={playersPromise}></Players>
      </Suspense>
    </main>
    
    </>
  )
}

export default App
