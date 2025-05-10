import Navbar from "@/componets/nav/Navbar";
import { StyledEngineProvider } from '@mui/material/styles';

export default function Home() {
  return (
    <StyledEngineProvider injectFirst>
         <Navbar/>
    </StyledEngineProvider>
     
  );
}

 