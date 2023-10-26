// import TextField from '@mui/material/TextField';
import { Grid, Box } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
// import Leftmenu from './component/Leftmenu'

import React, { useState } from 'react';
import Leftmenu from './Leftmenu';

export default function Expenditure(props) {




  return (
    <Box style={{ backgroundColor: "  #e6e8f7" }}>
      <Grid marginRight="900px">
        {/* <ViewHeadlineIcon /> */}
        <Leftmenu />
      </Grid>
      <Grid style={{ height: "700px", width: "100%", padding: "100px 500px", display: "flex" }}>
        <Grid>
          <Grid style={{ backgroundColor: "white", height: "150px", width: "150px", marginRight: "50px", borderRadius: "5px" }}>

            <Grid style={{ marginRight: "100px" }} >
              <CalendarMonthIcon color='error' />
            </Grid>
            <p>0</p>
            <p>Thise month</p>

          </Grid>
          <Grid style={{ backgroundColor: "white", height: "150px", width: "150px", marginTop: "50px", borderRadius: "5px" }}>
            <Grid style={{ marginRight: "100px" }}>
              <WaterDropIcon color='primary' />
              <p>0</p>
              <p>Day</p>
            </Grid>

          </Grid>
        </Grid>


        <Grid>
          <Grid style={{ backgroundColor: "white", height: "150px", width: "150px", borderRadius: "5px" }}>
            <Grid style={{ marginRight: "100px" }}>
              <CalendarTodayIcon color='secondary' />
            </Grid>
            <p>0</p>
            <p>Person/day</p>
          </Grid>
          <Grid style={{ backgroundColor: "white", height: "150px", width: "150px", marginTop: "50px", borderRadius: "5px" }}>
            <Grid style={{ marginRight: "100px" }}>
              <AccountBalanceWalletIcon color='success' />
            </Grid>
            <p>0</p>
            <p>Balance</p>
          </Grid>


        </Grid>


      </Grid>
      <Grid style={{ marginLeft: "600px" }}>
        <Stack spacing={2} direction="row">

        <Button variant="contained"> <WaterDropIcon />Water Can </Button>
          <button style={{ borderRadius: "50px" }} variant="contained"><ModeEditOutlineIcon color='primary' /></button>
        </Stack>
      </Grid>
    </Box >

  );
}
