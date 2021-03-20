import React, {useState} from 'react'
import PageHeader from '../../components/PageHeader'
import EmployeeForm from './EmployeeForm'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { makeStyles, Paper, TableBody,TableCell, TableRow, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "../../components/controls/useTable";
import * as employeeService  from '../../services/employeeService'
import {Controls} from '../../components/controls/Controls'
import { Add, Delete, EditOutlined, Search } from '@material-ui/icons';
import Popup from '../../components/controls/Popup'
import Notification from '../../components/Notification';
import ConfirmDialog from '../../components/controls/ConfirmDialog';




const useStyles = makeStyles((theme)=>({
    pageContent:{
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },
    searchInput:{
        width: '75%'
    },
    newButton: {
        position:'absolute',
        right: ' 10px'
    }
}))

const headCells = [
    {id:'fullName', label:'Employee Name'},
    {id:'email', label:'Employee Address'},
    {id:'mobile', label:'Mobile Number'},
    {id:'department', label:'Department'},
    {id: 'action', label: 'Action', disableSorting: true}
]

const Employees = () => {

    //Set objects
    const classes= useStyles()
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [records, setRecords] = useState(employeeService.getAllEmployees())
    const [filterFn, setFilterfn] = useState({fn:items =>{return items;}})
    const [openPopup, setOpenPopup] = useState(false) 
    const [notify, setNotify] = useState({isOpen: false, message:'', type:''})
    const [confirmDialog, setConFirmDialog] = useState({isOpen:false, title:'', subTilte:''})

    // Extract useTable
    const {TblContainer, TblHead, TblPagination,recordsAfterPagingAndSorting,} = useTable(records, headCells,filterFn);

    // Handle Search
    const handleSearch = (e)=>{
        let target = e.target
        setFilterfn({
            fn: items =>{
                if(target.value=='')
                return items
                else
                return items.filter(x=>x.fullName.toLowerCase().includes(target.value.toLowerCase()))
            }
        })
    }

    // Add and Edit 
    const addOrEdit = (employee, resetForm)=>{
        if (employee.id == 0)
        employeeService.insertEmployee(employee)
        else
        employeeService.updateEmployee(employee)
        resetForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        setRecords(employeeService.getAllEmployees())
        setNotify({
            isOpen: true,
            message: 'Submitted Successfully',
            type: 'success'
        })
    }

    // Open in Popup
    const openInPopup = item =>{
        setRecordForEdit(item)
        setOpenPopup(true)
    }
    // Delete
    const onDelete= id =>{
        setConFirmDialog({
            ...confirmDialog,
            isOpen:false
        })        
            employeeService.deleteEmployee(id);
            setRecords(employeeService.getAllEmployees())
            setNotify({
                isOpen: true,
                message: 'Deleted Successfully',
                type: 'error'
            })
        
    }
    return (
        <>
        <PageHeader
            title='Page Header'
            subTitle='Page description'
            icon={<SupervisorAccountIcon/>}
        />
        <Paper className={classes.pageContent}>
            
            <Toolbar>
                <Controls.Input
                    className={classes.searchInput}
                    label = 'Search Employees'
                    InputProps= {{
                            startAdornment: (<InputAdornment position='start'>
                                <Search/>
                            </InputAdornment>)
                        }}
                    onChange={handleSearch}
                />
                <Controls.Button
                    text = 'Add new'
                    variant = 'outlined'
                    startIcon = {<Add/>}
                    className={classes.newButton}
                    onClick={()=> {setOpenPopup(true);setRecordForEdit(null)}}
                />
            </Toolbar>
            <TblContainer>
                <TblHead/>
                <TableBody>
                {
                    recordsAfterPagingAndSorting().map(item =>(
                        <TableRow key={item.id}>
                            <TableCell>{item.fullName}</TableCell>
                            <TableCell>{item.email}</TableCell>
                            <TableCell>{item.mobile}</TableCell>
                            <TableCell>{item.department}</TableCell>
                            <TableCell>
                                <Controls.ActionButton 
                                    color='primary' 
                                    onClick={()=>{openInPopup(item)}}
                                    fontSize='small'
                                >
                                    <EditOutlined/>
                                </Controls.ActionButton>
                                <Controls.ActionButton 
                                    color='secondary'
                                    onClick={()=> setConFirmDialog({
                                        isOpen: true,
                                        title: 'Are you sure to delete this record',
                                        subTitle: 'You cannot undo this operation',
                                        onConfirm: ()=> {onDelete(item.id)}
                                    })                                      
                                    }
                                >
                                    <Delete/>
                                </Controls.ActionButton>
                            </TableCell>
                        </TableRow>
                    ))            
                }
                </TableBody>
            </TblContainer>
            <TblPagination/>
        </Paper>
        <Popup 
            openPopup = {openPopup}
            title='Employee Form'
            setOpenPopup = {setOpenPopup}
        >
            <EmployeeForm
                recordForEdit = {recordForEdit}
                addOrEdit={addOrEdit}
            />
        </Popup>
        <Notification
            notify={notify}
            setNotify={setNotify}
        />
        <ConfirmDialog 
            confirmDialog={confirmDialog}
            setConFirmDialog={setConFirmDialog}
        />
        </>
    )
}

export default Employees
