// import * as React from 'react';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import Button from '@mui/material/Button';

export default function Information() {
    return (
        <Box style={{ backgroundColor: " #e6e8f7", height: "700px", width: "700px", padding: "150px 450px" }}>
            <Grid style={{ backgroundColor: "white", height: "400px", width: "400px", padding: "50px 50px" }}>
                <Grid><WaterDropIcon width="200px" color='primary' /></Grid>
                <Grid margin="10px">
                    <TextField type='number' label="Can capacity(litres" variant="outlined" />
                </Grid>
                <Grid margin="10px">
                    <TextField type='number' label="Price per can" variant="outlined" />
                </Grid>
                <Grid margin="10px">
                    <TextField type='number' label="Date" variant="outlined" />
                </Grid>
                <Grid marginTop="50px">
                    <Button variant="contained"> <WaterDropIcon />Water Can </Button>
                </Grid>
            </Grid>
        </Box >

    );
}