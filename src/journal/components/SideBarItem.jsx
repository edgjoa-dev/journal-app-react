import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";
import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

export const SideBarItem = ({title = '', body, id, date, imageURL = []}) => {
    const dispatch = useDispatch();

    const onClickNote = () => {
        dispatch(setActiveNote({id, body, title, date, imageURL}))
    }

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
            <ListItemButton onClick={onClickNote} >
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
