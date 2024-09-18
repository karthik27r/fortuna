import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import { BackgroundWrapper } from './components/BackgroundWrapper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BackgroundWrapper defaultTheme="dark" storageKey="ui-theme">
        <Dashboard/>
      </BackgroundWrapper>
    </>
  )
}

export default App
