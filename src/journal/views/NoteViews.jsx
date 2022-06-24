import { SaveAltOutlined } from '@mui/icons-material'
import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

export const NoteViews = () => {
    return (
        <Grid
        container direction='row' justifyContent='space-between'
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
                <Button>
                    <SaveAltOutlined
                        sx={{
                            fontSize: 30,
                            mr: 1
                        }}
                    />
                    Save
                </Button>
            </Grid>
        </Grid>
    )
}
