//import { Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { AddOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteViews, NothingSelectedView } from '../views'
import { startNewNotes } from '../../store/journal/thunks'

export const JournalPage = () => {

    const dispatch = useDispatch();
    const { isSaving, active } = useSelector( state => state.journal );

    const onClickNewNote = () => {
        dispatch(startNewNotes());
    }


    return (
        <JournalLayout>

            {
                (!!active)
                ?<NoteViews />
                :<NothingSelectedView />
            }

                <IconButton
                disabled={isSaving}
                onClick={onClickNewNote}
                size='large'
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': { backgroundColor: 'error.main', opacity:0.7 },
                    position: 'fixed',
                    right: 50,
                    bottom: 50
                }}
                >
                    <AddOutlined sx={{ fontSize: 30 }}/>
                </IconButton>

        </JournalLayout>
    )
}
