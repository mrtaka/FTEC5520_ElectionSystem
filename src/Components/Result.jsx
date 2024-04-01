import React from "react";
import { useState } from 'react';
import { useEffect } from 'react';
import Card from "@mui/material/Card";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

import IconButton from "@mui/material/IconButton";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const Result = (props) => {

    const [selectCanditate, setSelectCanditate] = useState(-1);

    function changeSelectCanditate(selectIndex){
        setSelectCanditate(selectIndex); //set the value local
        props.handleNumberChange(selectIndex); //set the value global
    }

    function getCanditatesInfo(candidateIndex){
        return `Resource/R1_0${candidateIndex+1}.jpg`
    }

    return (
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center",}}>
        <Card sx={{margin: "10px", maxWidth: "1000px"}}>
            {/* <Typography sx={{ color: "#595857", fontWeight: "bold", fontSize: "10px", textAlign: "left" }}>You are Connected to Metamask</Typography> */}
            
            <img src="Resource/Election_map.png" style={{ width: '100%', height: 'auto' }}/>
            <Box sx={{paddingLeft: "20px", paddingRigth: "20px"}}>
                <h2 >View the real time Election system</h2>
                <p >View Region: 沙田西 Sha Tin West</p>
                <p >Remaining Time: {(props.remainingTime/360).toFixed(0)} mins {((props.remainingTime%360)*60/360).toFixed(0)} sec</p>
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
                    {props.candidates.map((candidate, index) => (
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