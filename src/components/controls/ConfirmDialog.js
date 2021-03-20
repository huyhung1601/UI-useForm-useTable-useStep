import { Dialog, DialogActions, DialogContent, DialogTitle, makeStyles, Typography, IconButton } from '@material-ui/core'
import { NotListedLocation } from '@material-ui/icons'
import React from 'react'
import { Controls } from './Controls'

const useStyles = makeStyles((theme)=>({
    dialog:{
        position:'absolute',
        padding: theme.spacing(2),
        top: theme.spacing(5)
    },
    DialogTitle:{
        textAlign: 'center'
    },
    dialogContent:{
        textAlign: 'center'
    },
    dialogActions:{
        justifyContent: 'center'
    },
    titleIcon:{
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.secondary.main,
        '&hover': {
            backgroundColor: theme.palette.secondary.light,
            cursor: 'default'
        },
        '& .MuiSvgIcon-root': {
            fontSize: '8rem'
        }
    }
}))

const ConfirmDialog = (props) => {

    const classes = useStyles();

    const { confirmDialog, setConFirmDialog} = props
    return (
        <Dialog open={confirmDialog.isOpen} classes={{paper: classes.dialog}}>
            <DialogTitle className={classes.DialogTitle}>
                <IconButton disableRipple className={classes.titleIcon}>
                    <NotListedLocation/>
                </IconButton>
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <Typography variant='h6'>
                    {confirmDialog.title}
                </Typography>
                <Typography variant='subtitle2'>
                    {confirmDialog.subTitle}
                </Typography>
            </DialogContent>
            <DialogActions className={classes.dialogActions}>
                <Controls.Button
                    text='No'
                    color='default'
                    onClick={()=> setConFirmDialog({...confirmDialog, isOpen:false})}
                />
                <Controls.Button
                    text='Yes'
                    color='secondary'
                    onClick={confirmDialog.onConfirm}
                />
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmDialog
