import React, { useEffect } from 'react'
import { useMemo } from 'react'
import { useForm } from '../../hooks/useForm'
import { ImageGallery } from '../components/ImageGallery'
import { setActiveNote } from '../../store/journal/journalSlice'
import { startDeleteNote, startSaveNote, startUpLoadingFiles } from '../../store/journal/thunks'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteOutline, SaveAltOutlined } from '@mui/icons-material'
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material'
// import Swal from 'sweetalert2'
// import 'sweetalert2/dist/sweetalert2.css';
import toast, { Toaster } from 'react-hot-toast';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useRef } from 'react'


export const NoteViews = () => {

    const dispatch = useDispatch();
    const {active:note, messageSaved, isSaving} = useSelector( state => state.journal );

    const { body, title, date, formState, onInputChange } = useForm( note )

    const dateString = useMemo( () => {
        const newDate= new Date( date );
        return newDate.toUTCString();
    }, [date])

    const fileInputRef = useRef();

    useEffect(() => {
        dispatch( setActiveNote( formState ) )
    }, [formState]);

    useEffect(() => {
        if ( messageSaved.length > 0 ){
            //Swal.fire('Nota actualizada', messageSaved, 'success')
            toast.success('Nota Guardada!',
                {
                    //icon: <DoneAllIcon />,
                    style: {
                    borderRadius: '10px',
                    background: '#06283D',
                    color: '#fff',
                    height: '80px',
                    width: '380px',
                    padding: '15px'
                    },
                }
                );
        }
    }, [messageSaved]);

    const onSaveNote = () => {
        dispatch( startSaveNote() )
    }

    const onFileInputChange = ({target}) => {
        if(target.files === 0) return;
        dispatch(startUpLoadingFiles(target.files));
    }

    const onDelet = () => {
        dispatch( startDeleteNote() );
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

                    <input
                        type='file'
                        multiple
                        ref={fileInputRef}
                        onChange={onFileInputChange}
                        style={{ display: 'none' }}
                    />

                    <IconButton
                        color='primary'
                        disabled={isSaving}
                        onClick={ ()=> fileInputRef.current.click() }
                    >
                        <CloudUploadIcon />
                    </IconButton>

                    <Button
                    disabled={isSaving}
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
                    <Toaster
                        position="top-center"
                        reverseOrder={false}
                    />
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
                                placeholder='What??s up today!'
                                minRows={ 10 }
                                name="body"
                                value={body}
                                onChange={onInputChange}
                            />
                    </Grid>
                    <Grid container justifyContent='end'>
                            <Button
                            onClick={ onDelet }
                            sx={{ mt: 2 }}
                            color='error'
                            >
                                <DeleteOutline />
                                Borrar
                            </Button>
                            <Toaster
                            position="top-center"
                            reverseOrder={false}
                    />
                    </Grid>

                    <ImageGallery images={ note.imageURL }/>
        </Grid>
    )
}
