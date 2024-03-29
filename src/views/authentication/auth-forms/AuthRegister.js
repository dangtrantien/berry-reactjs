import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
  useMediaQuery,
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import AnimateButton from '../../../ui-component/extended/AnimateButton';
import { strengthColor, strengthIndicator } from '../../../utils/password-strength';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// components
import swal from 'sweetalert';
import UserAPI from '../../../services/UserAPI';

// ===========================|| JWT - REGISTER ||=========================== //
const userAPI = new UserAPI();

const AuthRegister = ({ ...others }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const customization = useSelector((state) => state.customization);
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(true);

  const [strength, setStrength] = useState(0);
  const [level, setLevel] = useState();

  const googleHandler = async () => {
    console.error('Register');
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setStrength(temp);
    setLevel(strengthColor(temp));
  };

  useEffect(() => {
    changePassword('');
  }, []);

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12} container alignItems="center" justifyContent="center">
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1">Sign up with Email address</Typography>
          </Box>
        </Grid>

        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            submit: null,
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().max(255).required('Name is required.'),
            email: Yup.string().email('Must be a valid email').max(255).required('Email is required.'),
            password: Yup.string().max(255).required('Password is required and must have at least 7 characters.'),
          })}
          onSubmit={(values) => {
            const user = {
              name: values.name,
              email: values.email,
              password: values.password,
            };

            if (user.password.length < 7) {
              swal({
                text: 'Password is required and must have at least 7 characters.',
                buttons: false,
                timer: 5000,
                icon: 'error',
              });
            } else {
              userAPI
                .signUp(user)
                .then((res) => {
                  if (res.status === 200) {
                    // Thông báo thành công
                    swal({
                      text: 'Successfully register.',
                      buttons: false,
                      timer: 2000,
                      icon: 'success',
                    });

                    setTimeout(() => {
                      navigate('/login', { replace: true });
                    }, 2000);
                  }
                })
                .catch((err) => {
                  if (err.request.status === 400) {
                    swal({
                      text: 'Email already exist.',
                      buttons: false,
                      timer: 3000,
                      icon: 'error',
                    });
                  } else {
                    swal({
                      text: 'Sorry, something went wrong. Please contact to admin for support.',
                      buttons: false,
                      timer: 5000,
                      icon: 'error',
                    });
                  }
                });
            }
          }}
        >
          {({ errors, handleBlur, handleChange, handleSubmit, touched, values }) => (
            <form noValidate onSubmit={handleSubmit} {...others}>
              <FormControl fullWidth error={Boolean(touched.name && errors.name)} sx={{ ...theme.typography.customInput }}>
                <InputLabel htmlFor="outlined-adornment-name-register">Display Name</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-name-register"
                  type="text"
                  value={values.name}
                  name="name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  inputProps={{}}
                />
                {touched.name && errors.name && (
                  <FormHelperText error id="standard-weight-helper-text--register">
                    {errors.name}
                  </FormHelperText>
                )}
              </FormControl>

              <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
                <InputLabel htmlFor="outlined-adornment-email-register">Email Address / Username</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-email-register"
                  type="email"
                  value={values.email}
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  inputProps={{}}
                />
                {touched.email && errors.email && (
                  <FormHelperText error id="standard-weight-helper-text--register">
                    {errors.email}
                  </FormHelperText>
                )}
              </FormControl>

              <FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ ...theme.typography.customInput }}>
                <InputLabel htmlFor="outlined-adornment-password-register">Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password-register"
                  type={showPassword ? 'text' : 'password'}
                  value={values.password}
                  name="password"
                  label="Password"
                  onBlur={handleBlur}
                  onChange={(e) => {
                    handleChange(e);
                    changePassword(e.target.value);
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        size="large"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  inputProps={{}}
                />
                {touched.password && errors.password && (
                  <FormHelperText error id="standard-weight-helper-text-password-register">
                    {errors.password}
                  </FormHelperText>
                )}
              </FormControl>

              {strength !== 0 && (
                <FormControl fullWidth>
                  <Box sx={{ mb: 2 }}>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item>
                        <Box style={{ backgroundColor: level?.color }} sx={{ width: 85, height: 8, borderRadius: '7px' }} />
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1" fontSize="0.75rem">
                          {level?.label}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </FormControl>
              )}

              <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                  <FormControlLabel
                    control={
                      <Checkbox checked={checked} onChange={(event) => setChecked(event.target.checked)} name="checked" color="primary" />
                    }
                    label={
                      <Typography variant="subtitle1">
                        Agree with &nbsp;
                        <Typography variant="subtitle1" component={Link} to="#">
                          Terms & Condition.
                        </Typography>
                      </Typography>
                    }
                  />
                </Grid>
              </Grid>
              {errors.submit && (
                <Box sx={{ mt: 3 }}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Box>
              )}

              <Box sx={{ mt: 2 }}>
                <AnimateButton>
                  <Button fullWidth size="large" type="submit" variant="contained" color="secondary">
                    Sign up
                  </Button>
                </AnimateButton>
              </Box>
            </form>
          )}
        </Formik>
        {/* 
        <Grid item xs={12}>
          <Box sx={{ alignItems: 'center', display: 'flex' }}>
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
            <Button
              variant="outlined"
              sx={{
                cursor: 'unset',
                m: 2,
                py: 0.5,
                px: 7,
                borderColor: `${theme.palette.grey[100]} !important`,
                color: `${theme.palette.grey[900]}!important`,
                fontWeight: 500,
                borderRadius: `${customization.borderRadius}px`,
              }}
              disableRipple
              disabled
            >
              OR
            </Button>
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <AnimateButton>
            <Button
              variant="outlined"
              fullWidth
              onClick={googleHandler}
              size="large"
              sx={{
                color: 'grey.700',
                backgroundColor: theme.palette.grey[50],
                borderColor: theme.palette.grey[100],
              }}
            >
              <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
                <img src={Google} alt="google" width={16} height={16} style={{ marginRight: matchDownSM ? 8 : 16 }} />
              </Box>
              Sign up with Google
            </Button>
          </AnimateButton>
        </Grid> */}
      </Grid>
    </>
  );
};

export default AuthRegister;
