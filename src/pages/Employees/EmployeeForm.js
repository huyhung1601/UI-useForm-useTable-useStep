import { Grid, } from '@material-ui/core'
import React, { useEffect } from 'react'
import {Controls} from '../../components/controls/Controls'
import * as employeeService  from '../../services/employeeService'
import {useForm, Form} from '../../components/useForm'

const genderItems =[
    {id:'male', title:'Male'},
    {id:'female', title:'FeMale'},
    {id:'other', title:'Other'}
]   

const initialValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile:'',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: true,
}

const EmployeeForm = (props) => {
    const {addOrEdit, recordForEdit} = props

    //Set validation    
    const validate = (fieldValues= values) =>{
        let temp = {...errors}
        if('fullName' in fieldValues)
            temp.fullName= fieldValues.fullName? '':'This field is required'
        if('email' in fieldValues)
            temp.email= (!fieldValues.email)? 'Email is required' : (/$^|.+@.+..+/).test(fieldValues.email)? '':'Email is not valid'
        if('mobile' in fieldValues)
            temp.mobile= fieldValues.mobile.length>9? '':'Minimum 10 numbers required'
        if('departmentId' in fieldValues)
            temp.departmentId= fieldValues.departmentId.length !== 0? '':'This field is required'
        setErrors({
            ...temp
        })

        if(fieldValues === values)
            return Object.values(temp).every(x => x === '')        
    }

    // Extract useForm
    const {values, handleInputChange, errors, setErrors, resetForm, setValues} = useForm(initialValues, true, validate);
    
    //handle Submit
    const handleSubmit = (e) =>{
        e.preventDefault()
        if (validate())
            {addOrEdit(values, resetForm)}
    }

    //set edit records
    useEffect(()=>{
        if(recordForEdit != null)
        setValues({
            ...recordForEdit
        })
    },[recordForEdit])

    return (        
            <Form onSubmit={handleSubmit}>
            <Grid container >
                <Grid item xs={6} >
                    <Controls.Input
                       name='fullName'
                       label='FullName'
                       value={values.fullName}
                       onChange={handleInputChange} 
                       error={errors.fullName}                      
                    />
                    <Controls.Input
                        name='email'
                        label='Email'                        
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <Controls.Input
                        name='mobile'
                        label='Mobile'                        
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile}
                    />
                    <Controls.Input
                        name='city'
                        label='City'                        
                        value={values.city}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup
                        name='gender'
                        value={values.gender}
                        lable='Gender'
                        onChange={handleInputChange}
                        items={genderItems}
                    /> 
                    <Controls.Select
                        name='departmentId'
                        label='Department'
                        value={values.departmentId}
                        onChange={handleInputChange}
                        options={employeeService.getDepartmentCollection()}
                        error={errors.departmentId}
                    /> 
                    <Controls.DatePicker
                        name='hireDate'
                        label='Hire Date'
                        onChange={handleInputChange}
                        value={values.hireDate}
                    />
                    <Controls.Checkbox
                        name='isPermanent'
                        label='Permanent Employee'
                        onChange={handleInputChange}
                        value={values.isPermanent}
                    />
                    <div>
                    <Controls.Button 
                        type='submit'                      
                        text='Submit'
                    />
                    <Controls.Button 
                        color='default'                     
                        text='Reset'
                        onClick={resetForm}
                    />
                    </div>

                </Grid>                
            </Grid>
            </Form>
        
    )
}

export default EmployeeForm
