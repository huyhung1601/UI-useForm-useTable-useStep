import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Button } from '@material-ui/core'
import React from 'react'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) =>({
    container: {
        margin: theme.spacing(1),        
    }

}))

const ProfileForm = ({formData, setForm, navigation}) => {

    const classes = useStyles();

    const {firstName, lastName, gender} = formData

    return (
        <form>
            <FormControl className={classes.container}>
                <TextField
                    name='firstName'
                    label='First Name'
                    variant='outlined'
                    value={firstName}
                    autoComplete='off'
                    onChange={setForm}
                />
            </FormControl>
            <br/>
            <FormControl className={classes.container}>
                <TextField
                    name='lastName'
                    label='Last Name'
                    variant='outlined'
                    value={lastName}
                    autoComplete='off'
                    onChange={setForm}
                />
            </FormControl>
            <br/>
            <FormControl className={classes.container}>
                <FormLabel>Gender</FormLabel>
                <RadioGroup
                    name='gender'
                    variant='contained'
                    value={gender}
                    onChange={setForm}
                >
                    <FormControlLabel value='male' control={<Radio/>} label='Male' />
                    <FormControlLabel value='female' control={<Radio/>} label='Female' />
                    <FormControlLabel value='other' control={<Radio/>} label='Other' />
                </RadioGroup>
            </FormControl>
            <br/>
            <FormControl className={classes.container} >
                <Button variant='contained' color='primary' onClick={navigation.next } fullWidth='true' >Continue</Button>
            </FormControl>
            
        </form>
    )
}

export default ProfileForm
