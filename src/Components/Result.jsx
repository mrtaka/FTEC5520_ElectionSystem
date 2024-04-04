import React from "react";
import { useState } from 'react';
import { useEffect } from 'react';
import Card from "@mui/material/Card";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

import IconButton from "@mui/material/IconButton";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const Result = (props) => {


    const MulticandidateList = props.candidates;
    const MultiremainTime = props.remainingTime;
    const MultipoolNames = ['沙田西 Sha Tin West','油尖旺北 Yau Tsim Mong North']

    const [selectPool, setSelectPool] = useState(0);
    const [numOfPool, setNumOfPool] = useState(MulticandidateList.length);

    const [selectedCandidateList, setSelectedCandidateList] = useState(MulticandidateList[0]);
    const [selectRemainTime, setSelectRemainTime] = useState(MultiremainTime[0]);
    const [selectedPoolName, setSelectedPoolName] = useState(MultipoolNames[0]);


    const handleChange = (event) => {
        setSelectPool(event.target.value);
        setSelectedCandidateList(MulticandidateList[event.target.value]);
        setSelectRemainTime(MultiremainTime[event.target.value])
        setSelectedPoolName(MultipoolNames[event.target.value])

    };

    return (
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center",}}>
        <Card sx={{margin: "10px", maxWidth: "1000px"}}>
            {/* <Typography sx={{ color: "#595857", fontWeight: "bold", fontSize: "10px", textAlign: "left" }}>You are Connected to Metamask</Typography> */}
            
            <img src="Resource/Election_map.png" style={{ width: '100%', height: 'auto' }}/>

            <FormControl sx={{padding: "20px", wdith: "100%"}}>
            {/* <InputLabel id="demo-simple-select-label">View Region:</InputLabel> */}
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectPool}
                label="Age"
                onChange={handleChange}
            >
                {MultipoolNames.map((poolName, index) => (
                    <MenuItem key={index} value={index}>{poolName}</MenuItem>
                ))}
            </Select>
            </FormControl>

            <Box sx={{paddingLeft: "20px", paddingRigth: "20px"}}>
                <h2 >View the real time Election system</h2>
                <p >View Region: {selectedPoolName}</p>
                <p >Remaining Time: {(selectRemainTime/360).toFixed(0)} mins {((selectRemainTime%360)*60/360).toFixed(0)} sec</p>
            </Box>
            {/* 550000 */}

            <Table>
                <TableHead>
                    <TableRow>
                    <TableCell>Index</TableCell>
                    <TableCell>Candidate name</TableCell>
                    <TableCell>Candidate votes</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {selectedCandidateList.map((candidate, index) => (
                    <TableRow key={index}>
                        <TableCell>{candidate.index + 1}</TableCell>
                        <TableCell>{candidate.name}</TableCell>
                        <TableCell>{candidate.voteCount}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
            
        </Card>
        </Box>
    )
}

export default Result;