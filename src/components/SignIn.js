import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Select,
  InputLabel,
  MenuItem,
} from '@mui/material';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        My Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const [chain, setChain] = useState('0x38');
  const [address, setAddress] = useState('');
  const [similarAddresses, setSimilarAddresses] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://0.0.0.0:8096/same-owner?address=${address}&chain=${chain}`);
      const data = await response.json();

      const similar_address = data['data']['heuristic'];
      setSimilarAddresses(similar_address);
    } catch (error) {
      console.error('Error fetching data from API:', error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/*<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>*/}
          {/*  <LockOutlinedIcon />*/}
          {/*</Avatar>*/}
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <InputLabel id="chain-label">Chain</InputLabel>
            <Select
                labelId="chain-label"
                id="chain"
                required
                fullWidth
                label="Chain"
                name="chain"
                autoComplete="blockhain-network"
                value={chain}
                onChange={(e) => setChain(e.target.value)}
            >
              <MenuItem value="0x1">Ethereum</MenuItem>
              <MenuItem value="0x38">Binance Smart Chain</MenuItem>
              {/* Add more options as needed */}
            </Select>
            <TextField
                margin="normal"
                required
                fullWidth
                id="address"
                label="Address"
                name="address"
                autoComplete="address"
                autoFocus
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Get wallets with same owners
            </Button>
          </Box>
          {similarAddresses.length > 0 && (
              <div>
                <p>Similar Addresses:</p>
                <ul>
                  {similarAddresses.map((similarAddress, index) => (
                      <li key={index}>{similarAddress}</li>
                  ))}
                </ul>
              </div>
          )}
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
