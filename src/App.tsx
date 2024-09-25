import { useEffect, useState } from 'react'
import './App.css'
import Dashboard from '@/pages/Dashboard'
import Login from '@/pages/Login'
import { BackgroundWrapper } from '@/components/BackgroundWrapper'
import Sidebar from '@/components/sidebar/Sidebar'
import AuthWrapper from '@/components/AuthWrapper'

function App() {

  return (
    <>
      <BackgroundWrapper defaultTheme="dark" storageKey="ui-theme">
        <AuthWrapper>
          <div className='flex'>
            <Sidebar />
            <Dashboard />
          </div>
        </AuthWrapper>
      </BackgroundWrapper>
    </>
  )
}

export default App
