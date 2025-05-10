'use client'; 
import { useState } from "react";
import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import DrawerComp from "./DrawerComp";
 
 const Navbar = () =>{
    const [value , setValue] = useState(false);
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    const PAGES = ["Products", "About Us","Services","ContactUS"];
    return(
        <AppBar sx={{background:"#063970"}}>
          <Toolbar>
            <ShoppingCartCheckoutIcon/> 
             {
                isMatch ? (
                  <>
                    <Typography sx={{fontSize: "1.4rem", paddingLeft:"10px"}}>Shoppe</Typography>
                    <DrawerComp/>
                  </>
               ):(
                <>
                   <Tabs textColor="inherit" value={value} indicatorColor="secondary" onChange={(e,value)=>{setValue(value)}}>
                            {
                              PAGES.map((page,index)=>(
                                <Tab key={index} label={page}/>
                              ))
                            }
                   </Tabs>
                    <Button variant="contained" sx={{marginLeft: "auto"}}>Login{" "}</Button>
                    <Button variant="contained" sx={{marginLeft: "10px"}}>SignUp{" "}</Button>
                </>
               )
              }
          </Toolbar> 
        </AppBar>
    )
}

export default Navbar;