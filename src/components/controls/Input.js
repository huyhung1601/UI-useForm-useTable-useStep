import React from 'react'
import { TextField,} from '@material-ui/core'
const Input = (props) => {

    const {name,label,value,onChange, error=null, ...other} = props
    return (
        <TextField
        
            name={name}
            label={label}
            variant='outlined'
            value={value}
            onChange={onChange}
            {...other}
            {...(error && {error:true, helperText: error})}
         />
    )
}

export default Input
