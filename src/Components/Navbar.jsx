import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import LoginIcon from '@mui/icons-material/Login';


export default function Navbar(props){

    //================for side bar==========================
    // const navigate = useNavigate();

    const handleClickNavigate = (link) => {
        // navigate(link);
    };

    //backgroundColor: "transparent"
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: "0px 2px 4px rgba(1, 0, 0, 0.1)", height: "70px", color: "white" }}>
                <Toolbar>
                {props.loginStatus?
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2  , color: "#eb4034"}}
                        onClick={console.log("hi")}
                    >
                        {/* <MenuIcon /> */}
                        <img
                        src="/path/to/your/logo.png"
                        alt="Logo"
                        style={{ width: '24px', height: '24px' }}
                        />
                    </IconButton>
                :
                    <></>
                }
                <Button onClick={(e) => handleClickNavigate("/")}>
                <img src="Resource/Gov_logo.png" style={{ width: '48px', height: '48px' }}/>
                <Box sx={{marginLeft: "10px"}}>
                    <Typography sx={{color: "#eb4034", fontWeight: "bold", fontSize: "18px", textAlign: 'left'}}>香港特別行政區區議會選舉網</Typography>
                    <Typography sx={{color: "#eb4034", fontWeight: "bold", fontSize: "10px", textAlign: 'left'}}>Hong Kong Special Administrative Region District Council Election Website</Typography>
                </Box>
                </Button>
                <Typography sx={{ flexGrow: 1}}></Typography>
                    {props.loginStatus?
                        <Button sx={{color: "#0088ff"}}  onClick={() => {if(window.confirm("Logout?")){}}} >{props.userName}</Button>
                    :
                        <Button sx={{color: "#0088ff"}}  onClick={() => handleClickNavigate("/login")} ><LoginIcon/></Button>
                    }
                </Toolbar>
            </AppBar>
            </Box>
        </>
    );
}