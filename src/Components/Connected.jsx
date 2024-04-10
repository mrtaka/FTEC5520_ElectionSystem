import React from "react";
import { useState } from 'react';
import Card from "@mui/material/Card";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import IconButton from "@mui/material/IconButton";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const Connected = (props) => {

    const [selectCanditate, setSelectCanditate] = useState(-1);

    function changeSelectCanditate(selectIndex){
        setSelectCanditate(selectIndex); //set the value local
        props.handleNumberChange(selectIndex); //set the value global
    }

    function getCanditatesInfo(candidateIndex){
        return `Resource/R1_0${candidateIndex+1}.jpg`
    }

    return (
        <Box sx={{margin: "10px"}}>
            {/* <Typography sx={{ color: "#595857", fontWeight: "bold", fontSize: "10px", textAlign: "left" }}>You are Connected to Metamask</Typography> */}
            <Box>
                <h1 >You are logined to Election system</h1>
                <p >Account ID (Metamask) : {props.account}</p>
                <p >Your Region: 沙田西 Sha Tin West</p>
                <p >Remaining Time: {(props.remainingTime/360).toFixed(0)} mins {((props.remainingTime%360)*60/360).toFixed(0)} sec</p>
            </Box>
            {props.showButton ? 
                <Box sx={{display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",textAlign: "left", height: "650px", }}>
                    <Typography sx={{color: "#595857", fontWeight: "bold", fontSize: "36px", textAlign: 'left'}}>你已經完成投票</Typography>
                    <Typography sx={{color: "#595857", fontWeight: "bold", fontSize: "20px", textAlign: 'left'}}>You have already voted</Typography>
                </Box>
                : 
                <>
                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", textAlign: "left", marginBottom: "10px" }}>
                        <button className="login-button" onClick={props.voteFunction}>Vote</button>
                        <Typography sx={{ color: "#595857", fontWeight: "bold", fontSize: "18px", textAlign: "left", marginLeft: "10px" }}>
                            你已經選擇了{selectCanditate + 1}號候選人
                        </Typography>
                    </Box>

                    {props.candidates.map((candidate, index) => (
                        <Card key={index} sx={{marginTop: "10px", padding: "10px", borderRadius: 2, boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)'}}>
                            <Box sx={{marginLeft: "20px"}}>
                                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "flex-end" }}>
                                <Typography sx={{ color: "#595857", fontWeight: "bold", fontSize: "10px", textAlign: "left" }}>候選人名稱Canditate Name: </Typography>
                                <Typography sx={{ color: "#595857", marginBottom: "-5px", fontWeight: "bold", fontSize: "18px", textAlign: "left", marginLeft: "10px" }}>{candidate.name}</Typography>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "flex-end" }}>
                                <Typography sx={{ color: "#595857", fontWeight: "bold", fontSize: "10px", textAlign: "left" }}>候選人編號Canditate Number: </Typography>
                                <Typography sx={{ color: "#595857", marginBottom: "-5px", fontWeight: "bold", fontSize: "18px", textAlign: "left", marginLeft: "10px" }}>{candidate.index+1}</Typography>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "flex-end" }}>
                                <Typography sx={{ color: "#595857", fontWeight: "bold", fontSize: "10px", textAlign: "left" }}>選舉區塊鏈中獲得的票數 Vote Count: </Typography>
                                <Typography sx={{ color: "#595857", marginBottom: "-5px", fontWeight: "bold", fontSize: "18px", textAlign: "left", marginLeft: "10px" }}>{candidate.voteCount}</Typography>
                                </Box>
                            </Box>
                            <Box sx={{display: "flex", flexDirection: "row", marginLeft: "20px"}}>
                                {selectCanditate===candidate.index?
                                <IconButton >
                                    <CheckCircleOutlineIcon color="error" sx={{ fontSize: "64px"}}/>
                                </IconButton>
                                :
                                <IconButton onClick={()=>{changeSelectCanditate(candidate.index);}}>
                                    <RadioButtonUncheckedIcon sx={{ fontSize: "64px"}}/>
                                </IconButton>
                                }
                                <img src={getCanditatesInfo(index)} style={{width: '90%', maxWidth: "600px", height: 'auto' }}/>
                            </Box>
                        </Card>
                    ))}`
                </>
            }



            {/* <input type="number" placeholder="Entern Candidate Index" value={props.number} onChange={props.handleNumberChange}></input> */}
            {/* <br /> */}


            {/* <table id="myTable" className="candidates-table">
                <thead>
                <tr>
                    <th>Index</th>
                    <th>Candidate name</th>
                    <th>Candidate votes</th>
                </tr>
                </thead>
                <tbody>
                {props.candidates.map((candidate, index) => (
                    <tr key={index}>
                    <td>{candidate.index}</td>
                    <td>{candidate.name}</td>
                    <td>{candidate.voteCount}</td>
                    </tr>
                ))}
                </tbody>
            </table> */}
            
        </Box>
    )
}

export default Connected;