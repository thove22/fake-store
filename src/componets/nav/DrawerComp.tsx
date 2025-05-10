import { Drawer, IconButton, List,ListItemButton, ListItemText} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

const DrawerComp = () =>{
    const [openDrawer, setopenDrawer] = useState(false);
    const PAGES = ["Products", "About Us","Services","ContactUS","Login","Logout"];
    return(  
        <div>
            <Drawer open={openDrawer} onClose={()=>setopenDrawer(false)}>
                <List>
                    {
                        PAGES.map((page,index)=>(
                            <ListItemButton  key={index}>
                            <ListItemText>{page}</ListItemText>
                        </ListItemButton>
                        ))
                    }
                
                </List>
            
            </Drawer>
             <IconButton sx={{marginLeft:"450px", color:"white"}} onClick={()=> setopenDrawer(!openDrawer)} >
                <MenuIcon/>
             </IconButton>
        </div>
     
    );
}
export default DrawerComp;