import { Grid, Typography } from "@mui/material";
import StarOutlineIcon from '@mui/icons-material/StarOutline';


export const NothingSelectedView = ( ) => {

    return (
        <Grid
        className="box-shadow"
        container
        spacing={ 0 }
        direction="column"
        alignItems="center"
        justifyContent="center"
            sx={{
            minHeight: 'calc(100vh - 110px)',
            backgroundColor: 'primary.main',
            borderRadius: 3
            }}
        >
            <Grid item xs={12}>
                <StarOutlineIcon sx={{ fontSize: 100, color: 'white' }}/>
            </Grid>

            <Grid item xs={12} >
                <Typography variant="h5" color="white">
                    Selecciona una entrada o crea una
                </Typography>
            </Grid>
        </Grid>
    )
}
