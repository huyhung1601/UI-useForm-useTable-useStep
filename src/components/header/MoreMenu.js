import React from 'react'
import { IconButton,makeStyles,Menu, MenuItem } from '@material-ui/core'
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/More';
import LoginDrawer from './LoginDrawer';



const MoreMenu = () => {



    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuOpen = (e) => {
        setMobileMoreAnchorEl(e.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null)
    };

    const mobileMenuId = 'primay-search-account-menu-mobile';

        
    return (
        <div >
            <IconButton                            
                aria-label='show more'
                aria-controls={mobileMenuId}       
                aria-haspopup='true'    
                onClick = {handleMobileMenuOpen}               
                color='inherit'
            >
                <MoreIcon/>
            </IconButton>
            <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin = {{vertical: 'top', horizontal: 'right'}}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}            
            >
                <MenuItem>
                    <IconButton>
                        <MailIcon/>
                    </IconButton>
                </MenuItem>   
                <MenuItem>
                    <IconButton>
                        <NotificationsIcon/>
                    </IconButton>
                </MenuItem> 
                <MenuItem>
                <LoginDrawer/>
            </MenuItem> 
        </Menu>
        </div>
    )
}

export default MoreMenu
