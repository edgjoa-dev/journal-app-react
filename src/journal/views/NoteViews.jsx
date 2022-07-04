import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm'
import { ImageGallery } from '../components/ImageGallery'
import { useDispatch, useSelector } from 'react-redux'
import { SaveAltOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { useMemo } from 'react'
import { setActiveNote } from '../../store/journal/journalSlice'
import { startSaveNote } from '../../store/journal/thunks'

export const NoteViews = () => {

    const dispatch = useDispatch();
    const {active:note} = useSelector( state => state.journal );

    const { body, title, date, formState, onInputChange } = useForm( note )

    const dateString = useMemo( () => {
        const newDate= new Date( date );
        return newDate.toUTCString();
    }, [date])

    useEffect(() => {
        dispatch( setActiveNote( formState ) )
    }, [formState]);

    const onSaveNote = () => {
        dispatch( startSaveNote() )
    }

    return (
        <Grid
        container direction='row'
        justifyContent='space-between'
        alignItems='center'
        sx={{
            mb: 1
        }}
        >
            <Grid item>
                <Typography fontSize={39} fontWeight='ligth'>
                    {dateString}
                </Typography>
            </Grid>
                <Grid item>
                    <Button
                    onClick={onSaveNote}
                    color='primary'
                    sx={{
                        padding: 2
                    }}
                    >
                        <SaveAltOutlined
                            sx={{
                                fontSize: 30,
                                mr: 1
                            }}
                        />
                        Save
                    </Button>
                </Grid>
                    <Grid container>
                        <TextField
                            type='text'
                            variant='filled'
                            fullWidth
                            placeholder='Enter title'
                            label="Title"
                            sx={{
                                border: 'none',
                                mb: 1
                            }}
                            name="title"
                            value={title}
                            onChange={onInputChange}
                        />
                            <TextField
                                type='text'
                                variant='filled'
                                fullWidth
                                multiline
                                placeholder='What´s up today!'
                                minRows={ 10 }
                                name="body"
                                value={body}
                                onChange={onInputChange}
                            />
                    </Grid>

                    {/* images */}
                    <ImageGallery />
        </Grid>
    )
}
