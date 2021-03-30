import { Button, FormControl, makeStyles, TextField, Container, Input, InputLabel, FormHelperText } from '@material-ui/core'
import { ErrorOutlineSharp } from '@material-ui/icons'
import React, {useState} from 'react'

const useStyles = makeStyles((theme) =>({
    container: {
        margin: theme.spacing(1)
    }

}))

const LoginForm = ({formData, setForm, navigation}) => {
    const [errors, setErrors] = useState(false)


             
    const classes = useStyles();
    
    const {account, password} = formData;
    
    const handleLogin = (e)=>{  
        e.preventDefault()
        if (account == ''){
            setErrors(true)
        } else {setErrors(false)}
    }

    return (
        <form onSubmit={handleLogin}>

            <FormControl className={classes.container}>
                <TextField
                    name='account'
                    label='Account'
                    variant='outlined'
                    value={account}                  
                    autoComplete='off'  
                    onChange={setForm} 
                    error={errors}
                      
                />
                
            </FormControl>
            <br/>
            <FormControl className={classes.container}>
                <TextField
                    name='password'
                    label='Password'
                    variant='outlined' 
                    value= {password}                     
                    autoComplete='off'  
                    onChange={setForm} 
                    type='password'              
                />
            </FormControl >
            <br/>
            <FormControl className={classes.container}>
                <Button variant='contained' color='primary'  type='submit'>Login</Button>
            </FormControl>
           
            <FormControl className={classes.container}>
                <Button variant='contained' color='secondary' onClick={navigation.next}>Register</Button>
            </FormControl>
        </form>
    )
}

export default LoginForm
