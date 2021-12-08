import React, { useEffect, useState } from 'react'
import { allorders } from '../config/Myservice'
import { NavigationBar } from './NavigationBar'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const AllOrders = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        allorders().then(res => {
            console.log(res.data)
            setdata(res.data)
        })
    },[])
    return (
        <div>
            <NavigationBar/>
        
            <TableContainer component={Paper} style={{marginTop:'30px'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sr. NO</TableCell>
            <TableCell align="right">Details</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Status</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
        {data.map((ele, index) =>
            <TableRow
        
            >
             
              <TableCell align="right">{index+1}</TableCell>
              <TableCell align="right">{ele.details}</TableCell>
              <TableCell align="right">{ele.price}</TableCell>
              <TableCell align="right">{ele.status}</TableCell>
            
          
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>

        </div>
    )
}
