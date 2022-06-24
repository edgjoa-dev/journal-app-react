import { SaveAltOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { ImageGallery } from '../components/ImageGallery'

export const NoteViews = () => {
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
                    24 de Julio, 2022
                </Typography>
            </Grid>
                <Grid item>
                    <Button
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
                        />
                            <TextField
                                type='text'
                                variant='filled'
                                fullWidth
                                multiline
                                placeholder='What´s up today!'
                                minRows={ 10 }
                            />
                    </Grid>

                    {/* images */}
                    <ImageGallery />
        </Grid>
    )
}
