import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Dashboard from '@/pages/Dashboard/Dashboard'
import Finance from '@/pages/Finance/Finance'
import UserProfile from '@/pages/UserProfile/UserProfile'
import { BackgroundWrapper } from '@/components/BackgroundWrapper'
import AuthWrapper from '@/components/AuthWrapper'
import Sidebar from '@/components/sidebar/Sidebar'
import { ROUTES } from '@/constants/routes'

function App() {
  return (
    <Router>
      <BackgroundWrapper defaultTheme="dark" storageKey="ui-theme">
        <AuthWrapper>
          <div className='flex w-screen'>
            <Sidebar />
            <main className="flex-1 overflow-x-hidden overflow-y-auto">
              <Routes>
                <Route path="/" element={<Navigate to={ROUTES.DASHBOARD} replace />} />
                <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
                <Route path={ROUTES.FINANCE} element={<Finance />} />
                <Route path={ROUTES.PROFILE} element={<UserProfile />} />
              </Routes>
            </main>
          </div>
        </AuthWrapper>
      </BackgroundWrapper>
    </Router>
  )
}

export default App