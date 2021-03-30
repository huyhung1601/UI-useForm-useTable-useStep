import { IconButton,Drawer , Typography,   } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import React from 'react'
import  UserForm from '../userform/UserForm';



const LoginDrawer = () => {
    

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true)
    };
    const handleDrawerClose = () => {
        setOpen(false)
    };
    return (
        <div >
            <IconButton
                color= 'inherit'
                onClick= {handleDrawerOpen}
            >
                <AccountCircleIcon/>

            </IconButton>
            <Drawer
                role='presentation'
                open={open}
                anchor ='right'            
            >
                <div >
                    <IconButton
                        onClick= {handleDrawerClose}
                    >
                        <CancelIcon/>
                    </IconButton>
                    <Typography variant='inherit'>
                        'Please login to continue'
                    </Typography>
                </div>
                <UserForm/>
            </Drawer>    
        </div>

        
    )
}

export default LoginDrawer
