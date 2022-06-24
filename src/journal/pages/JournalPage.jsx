//import { Typography } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteViews, NothingSelectedView } from '../views'

export const JournalPage = () => {
    return (
        <JournalLayout>

            {/* <NothingSelectedView /> */}
            <NoteViews />
        </JournalLayout>
    )
}
