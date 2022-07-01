import { CircularProgress, Grid } from "@mui/material"



export const CheckingAuth = () => {
    return (
        <Grid
        container
        alignContent='center'
        direction='column'
        justifyContent='center'
        spacing={0}
        sx={{
            minHeight: '100vh',
            backgroundColor: 'primary.main',
            padding: '4'
            }}
        >

            <Grid item
                direction="row"
                justifyContent="center"
            >
                <CircularProgress color="warning"/>
            </Grid>
        </Grid>
    )
}
