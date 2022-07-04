import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useMemo } from "react";

export const SideBarItem = ({title = '', body, id}) => {

    const newTitle = useMemo( ()=> {
        return title.length > 17
        ? title.substring(0,17) + '...'
        : title;
    },[title])
    const textBody = useMemo( ()=> {
        return title.length > 33
        ? body.substring(0,33) + '...'
        : body;
    },[body])

    return (
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid item>
                    <ListItemText primary={newTitle}/>
                    <ListItemText secondary={textBody}/>
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
