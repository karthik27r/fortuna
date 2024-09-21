import { useEffect, useState } from 'react'
import './App.css'
import Dashboard from '@/pages/Dashboard'
import Login from '@/pages/Login'
import { BackgroundWrapper } from '@/components/BackgroundWrapper'

function App() {

  return (
    <>
      <BackgroundWrapper defaultTheme="dark" storageKey="ui-theme">
        <Dashboard /> 
      </BackgroundWrapper>
    </>
  )
}

export default App
