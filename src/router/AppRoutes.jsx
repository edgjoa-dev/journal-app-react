import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { useSelector } from 'react-redux'
import { CheckingAuth } from '../ui'

export const AppRoutes = () => {

    const {status} = useSelector( state => state.auth );
    if(status === 'checking') {
        return <CheckingAuth />
    }

    return (
        <Routes>
            {/* Login y Register */}
            <Route path='/auth/*' element={<AuthRoutes />}/>
            {/* Journal App */}
            <Route path='/*' element={<JournalRoutes />}/>
        </Routes>
    )
}
