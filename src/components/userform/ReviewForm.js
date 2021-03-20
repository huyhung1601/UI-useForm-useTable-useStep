import React from 'react'
import Container from '@material-ui/core/Container'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import EditIcon from '@material-ui/icons/Edit';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {Button, IconButton, ListItemText,} from '@material-ui/core';

const ReviewForm = ({formData, navigation}) => {
    const {go} = navigation;

    const { 
        account ,
        email, 
        firstName ,
        lastName, 
        gender ,
    } = formData;

    

    return (
        
        <Container >
            <h3>Review</h3>
            <RenderAccordion summary='Account'go={go} details={[ 
                {'Account': account } ,    
                {'Email': email } ,         
            ]}/>
            <RenderAccordion summary='Profile' go={go} details={[ 
                {'First Name': firstName },
                {'Last Name': lastName},
                {'Gender': gender},               
            ]}/>
            <Button
                color='primary'
                variant='contained'
                fullWidth='true'
                style={{marginTop: '1.5rem'}}
                
                type='submit'
            >
                Submit
            </Button>
        </Container>
    )
}

export default ReviewForm

export const RenderAccordion = ({ summary, details,go}) =>{   

    return(
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
        >{summary}</AccordionSummary>
        <AccordionDetails>
            <div>                
                {details.map((data, index)=>
                    <ListItemText key={index}>{`${Object.keys(data)[0]} : ${data[Object.keys(data)[0]]}`} </ListItemText>
                )}
                <IconButton
                    color='primary'
                    component='span'
                    onClick={()=>go(`${summary.toLowerCase()}`)}
                ><EditIcon/></IconButton>
            </div>
        </AccordionDetails>
        
    </Accordion>
)}