import React from 'react'
import { Button, FormControl, makeStyles, TextField, withWidth } from '@material-ui/core'

const useStyles = makeStyles((theme) =>({
    container: {
        margin: theme.spacing(1),
            }

}))

const RegisterForm = ({formData, setForm, navigation}) => {

    const classes = useStyles();

    const{account, password, confirmPassword,email} = formData;

    
    return (
        <form >
            <FormControl className={classes.container}>
                <TextField
                    name='account'
                    label='Account'
                    variant='outlined' 
                    value={account}
                    autoComplete='off'
                    onChange={setForm}                   
                />
            </FormControl>
            <br/>
            <FormControl className={classes.container}>
                <TextField
                    name='email'
                    label='Email'
                    variant='outlined'
                    value={email}  
                    autoComplete='off' 
                    onChange={setForm}   
                    type='email'              
                />
            </FormControl >
            <br/>
            <FormControl className={classes.container}>
                <TextField
                    name='password'
                    label='Password'
                    variant='outlined'
                    value={password}
                    type='password'   
                    autoComplete='off'
                    onChange={setForm}
                />
            </FormControl >
            <br/>
            <FormControl className={classes.container}>
                <TextField
                    name='confirmPassword'
                    label='Confirm Password'
                    variant='outlined'
                    value={confirmPassword}
                    type='password'   
                    autoComplete='off'
                    onChange={setForm}                    
                />
                
            </FormControl >
            <br/>
            <FormControl className={classes.container}>
                <Button variant='contained' color='primary' onClick={navigation.next}>continue</Button>
            </FormControl>

        </form>
    )
}

export default RegisterForm
