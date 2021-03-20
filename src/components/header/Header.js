import React from 'react'
import { Badge, fade, Grid, IconButton, InputBase, makeStyles, Toolbar, Typography,} from '@material-ui/core'
import AppBar from "@material-ui/core/AppBar";
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import MoreMenu from './MoreMenu';
import LoginDrawer from './LoginDrawer';



const useStyle = makeStyles((theme) => ({
 
    root: {
        backgroundColor:'#fff',
        transform: 'translateZ(0)'
    },
    searchInput:{
        opacity: '1',
        padding:'0px 8px',
        fontSize: '0.6',
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover':{
            backgroundColor: fade(theme.palette.common.white, 0.25) 
        },
    },
    icons: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
          display: 'none',
        },
    },
    mobileMoreMenu: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
          display: 'flex',
        },
    },
}));

const Header = () => {

    const classes = useStyle();

    

    return (
        <div className={classes.root}>
            <AppBar position='static'>
            <Toolbar>
                <Grid container spacing={2} alignItems='center'>
                    <Grid item >
                        <Typography variant='h6' noWrap>
                            Neighbor-Clean
                        </Typography>                        
                    </Grid>
                    <Grid item>
                        <InputBase 
                            placeholder='search'
                            className={classes.searchInput}
                            startAdornment={<SearchIcon/>}
                        />
                    </Grid>
                    <Grid item sm/>
                    <Grid item className={classes.icons}>
                        <IconButton color='inherit'>
                            <Badge badgeContent={4} color='secondary'>
                                <MailIcon/>
                            </Badge>
                        </IconButton>
                        <IconButton color='inherit'>
                            <Badge badgeContent={4} color='secondary'>
                                <NotificationsIcon/>
                            </Badge>
                        </IconButton>

                        <LoginDrawer/>                       
                    </Grid>
                    <Grid item className={classes.mobileMoreMenu} >
                        <MoreMenu/>
                    </Grid>
                </Grid>

            </Toolbar>
        </AppBar>
                           
        </div>
    )
}

export default Header
