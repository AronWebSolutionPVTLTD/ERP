import React from 'react'
import {TfiBriefcase} from 'react-icons/tfi'
import {BsArrowUp} from 'react-icons/bs'
import {SiWebmoney} from 'react-icons/si'
import { Chart } from "react-google-charts";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
const columns = [
    { id: 'name', label: 'Client Name', minWidth: 170 },
    { id: 'code', label: 'Profile ID', minWidth: 100 },
    {
        id: 'population',
        label: 'Department',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'Date',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'density',
        label: 'Status',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
];
    
    function createData(name, code, population, size,density) {
        // const density = population / size;
    return { name, code, population, size, density };
    }

    const rows = [
    createData('John Doe', 'Arnav', 'Designing', '12 Nov 2022', 'Completed'),
    createData('John Doe', 'Arnav', 'Designing', '12 Nov 2022', 'Active'),
    createData('John Doe', 'Vijay Thakur','Designing', '12 Nov 2022', 'Completed'),
    createData('John Doe', 'Dharmender','Frontend', '12 Nov 2022', 'Completed'),
    createData('John Doe', 'Dharmender', 'Backend','12 Nov 2022', 'In Progress'),
    createData('John Doe', 'Dharmender', 'Backend','12 Nov 2022', 'In Progress'),
    createData('John Doe', 'Vijay Thakur', 'Backend','12 Nov 2022', 'In Progress'),
    createData('John Doe', 'Shivani', 'Backend','12 Nov 2022', 'Completed'),
    createData('John Doe', 'Arnav', 'Frontend','12 Nov 2022', 'In Progress'),
    createData('John Doe', 'Arnav', 'Backend','12 Nov 2022', 'Completed'),
    createData('John Doe', 'Dharmender', 'Backend', '12 Nov 2022', 'Completed'),
    createData('John Doe', 'Shivani', 'Frontend','12 Nov 2022', 'In Progress'),
    createData('John Doe', 'Dharmender', 'Frontend','12 Nov 2022', 'Completed'),
    createData('John Doe', 'Dharmender', 'Frontend','12 Nov 2022', 'In Progress'),
    createData('John Doe', 'Shivani', 'SEO','12 Nov 2022', 'In Progress'),
    ];
export default function Dashboard(){
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const data2 = [
        ['Weeks', 'Loss', 'Profit'],
        ['Week-1', 10, 20],
        ['Week-2', 6, 24],
        ['Week-3', 9, 30],
        ['Week-4', 23, 10],
    ];
    const options2 = {
        seriesType: 'bars',
        series: {
            2: { type: 'line', color: 'DE1010' },
            0: { color: '#333333' },
            1: { color: '#ff6d00' },
        },
        bar: { groupWidth: '45%' },
        legend: { position: 'none' },
        backgroundColor: 'none',
        responsive: true,
    }

    return(
        <div className=''>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5 my-10'>
                <div className='p-6 rounded-2xl shadow-md bg-white flex items-center justify-between gap-5 w-full '>
                    <div>
                        <p className='text-3xl font-bold mb-1'>352</p>
                        <p className='text-base font-semibold capitalize text-black/70'>Invoice sent</p>
                    </div>
                    <span className='w-20 h-20 rounded-full bg-lime-200 flex items-center justify-center text-4xl'><TfiBriefcase /></span>
                </div>
                <div className='p-6 rounded-2xl shadow-md bg-white flex items-center justify-between gap-5 w-full '>
                    <div>
                        <p className='text-3xl font-bold mb-1'>$37k</p>
                        <p className='text-base font-semibold capitalize text-black/70'>Credited</p>
                    </div>
                    <span className='w-20 h-20 rounded-full bg-indigo-200 flex items-center justify-center text-4xl'><SiWebmoney /></span>
                </div>
                <div className='p-6 rounded-2xl shadow-md bg-white flex items-center justify-between gap-5 w-full '>
                    <div>
                        <p className='text-3xl font-bold mb-1'>352</p>
                        <p className='text-base font-semibold capitalize text-black/70'>Invoice sent</p>
                    </div>
                    <span className='w-20 h-20 rounded-full bg-lime-200 flex items-center justify-center text-4xl'><TfiBriefcase /></span>
                </div>
                <div className='p-6 rounded-2xl shadow-md bg-white flex items-center justify-between gap-5 w-full '>
                    <div>
                        <p className='text-3xl font-bold mb-1'>352</p>
                        <p className='text-base font-semibold capitalize text-black/70'>Invoice sent</p>
                    </div>
                    <span className='w-20 h-20 rounded-full bg-lime-200 flex items-center justify-center text-4xl'><TfiBriefcase /></span>
                </div>
            </div>

            <div className='my-10 grid sm:grid-cols-2 gap-5'>
                <div className='bg-white shadow-md rounded-2xl'>
                    <div className='grid sm:flex items-start gap-5 justify-between px-10 pt-10 text-3xl'>
                        <p className='capitalize font-semibold'>Month sale</p>
                        <p className='font-bold flex items-end'>$89,99  <span className='text-green-500 flex text-base ml-3 mr-1'><BsArrowUp /></span> <span className='text-base bg-green-200 p-1 px-2 rounded italic'>4.89%</span></p>
                    </div>
                <Chart
                    chartType="ColumnChart"
                    data={data2}
                    width="100%"
                    height="400px"
                    options={options2}
                    legendToggle
                />
                </div>
                <div className='relative bg-white rounded-2xl shadow-md flex flex-wrap justify-center items-center p-10'>
                    <div className='w-full mb-10'><span className='text-6xl font-bold text-primary'>450</span> <p className='font-medium tracking-6px uppercase'>Invoice</p></div>
                    <img src='images/invoice-vector.png' className='max-w-full sm:max-w-370px' />
                </div>
            </div>

            <div className='my-10'>
                <div className='w-full bg-white rounded-2xl shadow-md p-5 md:p-10'>
                    <p className='capitalize font-semibold text-3xl mb-10'>List of Projects</p>
                    <div>
                        <Paper sx={{ width: '100%' }} className="!shadow-none border border-solid border-black/10"> 
                            <TableContainer sx={{ maxHeight: 440 }}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                        {columns.map((column) => (
                                            <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ top: 0, minWidth: column.minWidth }}
                                            className="!font-bold"
                                            >
                                            {column.label}
                                            </TableCell>
                                        ))}
                                        </TableRow>
                                    </TableHead>
                                <TableBody>
                                    {rows
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number'
                                                    ? column.format(value)
                                                    : value}
                                                </TableCell>
                                            );
                                            })}
                                        </TableRow>
                                        );
                                    })}
                                </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[10, 25, 100]}
                                component="div"
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Paper>
                    </div>
                </div>
                
            </div>
        </div>
    )
}