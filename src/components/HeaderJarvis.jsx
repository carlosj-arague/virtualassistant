import { AppBar, Button, Container, Grid2, Toolbar, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";

function Menu() {
    return (
        <AppBar sx={{ bgcolor: "#1e1f87" }} position="static">
            <Container>
                <Typography variant='h3' align={'center'}>VIRTUAL ASSISTANT</Typography>
                <Typography variant='h3' align={'center'}>J.A.R.V.I.S.</Typography>

            </Container>
        </AppBar>
      
    );
  }
  
  export default Menu;