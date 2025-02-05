import { AppBar, Button, Container, Grid2, Toolbar, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";

function Menu() {
    return (
        <AppBar sx={{ bgcolor: "#941919" }} position="static">
            <Container>
                <Typography variant='h3' align={'center'}>VIRTUAL INTELLIGENCE</Typography>
                <Typography variant='h3' align={'center'}>U.L.T.R.O.N.</Typography>

            </Container>
        </AppBar>
      
    );
  }
  
  export default Menu;