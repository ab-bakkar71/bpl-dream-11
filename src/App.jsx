
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Players from './Components/Players/Players'
import { Suspense, useState } from 'react'

const fetchPlayer = async () => {
  const res = await fetch('/player.json')
  return res.json();
}

function App() {
  const playersPromise= fetchPlayer();
  const [coin, setCoin] = useState(2497000)
  
  

  return (
    <>
    <header>
      <Navbar coin ={coin}></Navbar>
      <Banner/>
    </header>
    <main>
      <Suspense fallback-={<span className="loading loading-dots loading-xl"></span>}>
        <Players playersPromise={playersPromise} setCoin={setCoin} coin={coin}></Players>
      </Suspense>
    </main>
    
    </>
  )
}

export default App
