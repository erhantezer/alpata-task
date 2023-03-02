import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { MuiTelInput } from 'mui-tel-input'
import { useGlobalContext } from '../context/context';
import { toastErrorNotify, toastSuccessNotify, toastWarnNotify } from '../helper/toastify';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" to="https://github.com/erhantezer">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function Register() {
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [phone, setPhone] = React.useState('+90')
    const [ image, setImage ] = React.useState("")

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(phone)
        console.log(image)
        const userInfo = {
            firstname: firstName,
            lastname: lastName,
            email: email,
            password: window.btoa(password),
            phone: phone,
            image: image,
        }


        // && password.match(/^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/)
        if (password.length >= 6 && password.length <= 20 && image !== '') {
            if (firstName !== '' && lastName !== "" && email !== '' && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                sessionStorage.setItem("user", JSON.stringify(userInfo))
                localStorage.setItem("user", JSON.stringify(userInfo))
                navigate("/home");
                toastSuccessNotify("Kayit Başarili")
            } else {
                toastErrorNotify("Alanlar boş birakilamaz")
            }
        } else {
            toastErrorNotify("Şifre 6-20 karakter olmalı")
            toastWarnNotify("Resim .png ve uygun boyutta olmalı")
        }
    }

    const handleChange = (newPhone) => {
        setPhone(newPhone)
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs" >
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <MuiTelInput
                                    label="Phone Number"
                                    id="phone"
                                    value={phone}
                                    name='phone'
                                    fullWidth
                                    autoComplete="family-name"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sx={{ textAlign: 'center' }}>
                                <Button variant="contained" component="label">
                                    Upload image
                                    <input hidden accept="image/*" multiple type="file" onChange={(e) => setImage(e.target.value)} />
                                </Button>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>

                    </Box>
                </Box>
                <Copyright sx={{ mt: 2 }} />
            </Container>
        </ThemeProvider>
    );
}