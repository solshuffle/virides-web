import React from 'react';
import styled from 'styled-components';
import { Typography, Grid, TextField, Switch, Container } from '@material-ui/core';

const Title = styled.h2`
  text-transform: uppercase;
`;

const App = () => (
  <>
    <Container>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Typography variant='h2'>Inputs</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant='h5' gutterBottom>Humedad del suelo min (numero entero)</Typography>
          <TextField variant='outlined' />
        </Grid>
        <Grid item xs={6}>
          <Typography variant='h5' gutterBottom>Riego general - Start/stop</Typography>
          <Switch />
        </Grid>
      </Grid>
    </Container>

    <Container>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Typography variant='h2'>Outputs</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant='h1'>64%</Typography>
          <Typography variant='h5' gutterBottom>Humedad del suelo por cajon</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant='h1'>64%</Typography>
          <Typography variant='h5' gutterBottom>Temperatura ambiente interior</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant='h1'>64%</Typography>
          <Typography variant='h5' gutterBottom>Temperatura ambiente exterior</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant='h1'>64%</Typography>
          <Typography variant='h5' gutterBottom>Humedad relativa ambiente exterior</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant='h1'>64%</Typography>
          <Typography variant='h5' gutterBottom>Humedad relativa ambiente interior</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant='h1'>64%</Typography>
          <Typography variant='h5' gutterBottom>Presion atmosferica</Typography>
        </Grid>
      </Grid>
    </Container>
  </>
);

export default App;
