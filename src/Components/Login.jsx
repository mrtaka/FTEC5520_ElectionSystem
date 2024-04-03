import React from "react";
import { Grid, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";

const Login = (props) => {

    const navigate = useNavigate();

    return (
        <>
        <img src="Resource/2023banner.jpg" style={{ width: '100%', height: 'auto' }}/>
        <Box sx={{display: "flex", justifyContent: "center",}}>
            <img src="Resource/Election_logo.png" style={{margin: "25px", width: '250px', height: 'auto' }}/>
        </Box>
        <Grid style={{}} container justifyContent="center" spacing={2}>
            <Grid item>
                <Button onClick = {props.connectWallet} variant="outlined" color="primary" sx={{backgroundColor: "#FFFFFF"}}>
                    <img src="Resource/iamsmart.png" style={{ width: '100px', height: 'auto' }}/>
                    <Box sx={{marginLeft: "20px"}}>
                        <Typography sx={{color: "#595857", fontWeight: "bold", fontSize: "18px", textAlign: 'left'}}>登入投票</Typography>
                        <Typography sx={{color: "#64a390", fontWeight: "bold", fontSize: "10px", textAlign: 'left'}}>Login to Vote</Typography>
                    </Box>
                </Button>
            </Grid>
            <Grid item>
                <Button variant="contained" color="primary" onClick={() => navigate("/result")}>
                <Box sx={{marginLeft: "0px"}}>
                    <Typography sx={{color: "#FFFFFF", fontWeight: "bold", fontSize: "18px", textAlign: 'left'}}>實時選舉結果</Typography>
                    <Typography sx={{color: "#FFFFFF", fontWeight: "bold", fontSize: "10px", textAlign: 'left'}}>Live election results</Typography>
                </Box>
                </Button>
            </Grid>
            <Grid item>
                <Button variant="contained" color="warning" onClick={() => window.open("https://wenlusun.wixsite.com/my-site-2", "_blank")}>
                <Box sx={{marginLeft: "0px"}}>
                    <Typography sx={{color: "#FFFFFF", fontWeight: "bold", fontSize: "18px", textAlign: 'left'}}>登記選民</Typography>
                    <Typography sx={{color: "#FFFFFF", fontWeight: "bold", fontSize: "10px", textAlign: 'left'}}>Register as voter</Typography>
                </Box>
                </Button>
            </Grid>
        </Grid>
        <Box       
        sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "left",
            marginTop: "50px", 
            marginBottom: "80px" 
        }}>
            <Typography sx={{color: "#595857", fontWeight: "bold", fontSize: "36px", textAlign: 'left'}}>歡迎來到區議會2023選舉區塊鏈投票系統</Typography>
            <Typography sx={{color: "#595857", fontWeight: "bold", fontSize: "20px", textAlign: 'left'}}>Welcome to the District Council 2023 Election Blockchain Voting System</Typography>
        </Box>
        {/* <div className="login-container">
            <button className="login-button" onClick = {props.connectWallet}>Login Metamask</button>
        </div> */}
        </>
    )
}

export default Login;