'use client';

import { useState } from 'react';
import {
    useRouter,
    useSearchParams,
} from "next/navigation";
import { Box, Typography, TextField, Button, Stack, IconButton, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Image from 'next/image';
import axiosInstance from '@/lib/axios';
import { useGoogleLogin } from '@react-oauth/google';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const whiteBorder = '1.5px solid #fff';

export default function SignUpPage() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const redirect =
        searchParams.get("redirect") || "/profile";

    const action = searchParams.get("action");

    const bookId = searchParams.get("bookId");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [profilePreview, setProfilePreview] = useState(null); // For preview
    const [profileFile, setProfileFile] = useState(null); // For upload
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        gender: '',
        role: 'User',
        dateOfBirth: ''
    });

    const selectFieldStyles = {
        '& .MuiOutlinedInput-root': {
            height: { xs: 36, sm: 40 },
            borderRadius: '8px',
            backgroundColor: '#fff',
            border: whiteBorder,
            boxShadow: '0 2px 20px rgba(0,0,0,0.08)',
        },
        '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
        },
        '& .MuiSelect-select': {
            px: { xs: 1.5, sm: 2 },
            py: 1,
            color: '#444',
            fontSize: { xs: 12, sm: 13 },
            display: 'flex',
            alignItems: 'center',
        },
        '& .MuiSelect-icon': {
            color: '#777',
            right: 8,
        }
    };

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Store the actual file for upload
            setProfileFile(file);
            // Create preview URL for display
            setProfilePreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Basic validation
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            setLoading(false);
            return;
        }

        if (formData.password.length < 8) {
            setError('Password must be at least 8 characters long');
            setLoading(false);
            return;
        }

        try {
            // Create FormData object for file upload
            const submitData = new FormData();

            // Append all form fields
            Object.keys(formData).forEach(key => {
                if (key !== 'confirmPassword' && formData[key]) {
                    submitData.append(key, formData[key]);
                }
            });

            // Append the profile image file if selected
            if (profileFile) {
                submitData.append('profile', profileFile);
            }

            // Log FormData contents for debugging
            console.log('FormData contents:');
            for (let pair of submitData.entries()) {
                if (pair[0] === 'password') {
                    console.log(pair[0] + ': [HIDDEN]');
                } else {
                    console.log(pair[0] + ': ' + pair[1]);
                }
            }

            console.log('Sending request to:', '/User/Addusers');
            console.log('API Base URL:', process.env.NEXT_PUBLIC_API_URL);

            const response = await axiosInstance.post('/User/Addusers', submitData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('✅ Full response:', response);
            console.log('✅ Response data:', response.data);
            console.log('✅ Response status:', response.status);

            if (response.data.status === 1) {
                console.log('✅ Registration successful');

                // Store user data if returned from API
                if (response.data.user) {
                    localStorage.setItem('user', JSON.stringify(response.data.user));
                }
                if (response.data.token) {
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('refreshToken', response.data.refreshToken);
                }

                if (action && bookId) {
                    router.replace(
                        `${redirect}?action=${action}&bookId=${bookId}`
                    );
                } else {
                    router.replace(redirect);
                }
            } else {
                setError(response.data.error || response.data.message || 'Registration failed');
                setLoading(false);
            }
        } catch (error) {
            console.log('❌ Error object:', error);

            if (error.response) {
                console.log('❌ Error response data:', error.response.data);
                console.log('❌ Error response status:', error.response.status);

                const errorMessage = error.response.data?.error ||
                    error.response.data?.message ||
                    error.response.data?.details ||
                    `Server error: ${error.response.status}`;
                setError(errorMessage);

            } else if (error.request) {
                console.log('❌ Error request (no response):', error.request);
                setError('No response from server. Please check if the server is running at ' + process.env.NEXT_PUBLIC_API_URL);
            } else {
                console.log('❌ Error message:', error.message);
                setError('Error: ' + error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                setError('');
                setLoading(true);
                const apiRes = await axiosInstance.post('/google-signin', {
                    access_token: tokenResponse.access_token
                });
                if (apiRes.data.status === 1) {
                    localStorage.setItem('token', apiRes.data.token);
                    localStorage.setItem('refreshToken', apiRes.data.refreshToken);
                    localStorage.setItem('user', JSON.stringify(apiRes.data.user));
                    if (action && bookId) {
                        router.replace(
                            `${redirect}?action=${action}&bookId=${bookId}`
                        );
                    } else {
                        router.replace(redirect);
                    }
                } else {
                    setError(apiRes.data.error || 'Login failed');
                }
            } catch (err) {
                setError(err.response?.data?.message || 'Google authentication failed');
            } finally {
                setLoading(false);
            }
        },
        onError: () => setError('Google login failed. Please try again.'),
        scope: 'openid email profile',
    });

    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1.8fr 1fr' },
                minHeight: '100vh',
                overflow: 'hidden',
            }}
        >
            {/* LEFT IMAGE */}
            <Box
                sx={{
                    display: { xs: 'none', sm: 'flex' },
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        height: '110%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        overflow: 'hidden',
                        borderRadius: '0 20px 20px 0',
                    }}
                >
                    <Image
                        src="/AuthPage.png"
                        alt="Community Illustration"
                        fill
                        priority
                        style={{ objectFit: 'cover', height: '100%' }}
                    />
                </Box>
            </Box>

            {/* RIGHT FORM */}
            <Box
                sx={{
                    width: '100%',
                    minHeight: { xs: 'auto', sm: '100%' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#fafafaff',
                    px: { xs: 2, sm: 4 },
                    py: { xs: 2, sm: 4 },
                    overflow: 'auto',
                }}
            >
                <Box sx={{
                    width: '100%',
                    maxWidth: { xs: '100%', sm: '520px' },
                    px: { xs: 1, sm: 0 },
                    textAlign: 'center',
                    my: 'auto',
                }}>
                    {/* LOGO */}
                    <Box
                        sx={{
                            width: { xs: 120, sm: 150, md: 170 },
                            height: { xs: 38, sm: 50, md: 55 },
                            mx: 'auto',
                            mb: { xs: 0.5, sm: 1 },
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #9cc9f5, #7bb5ec)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: whiteBorder,
                            boxShadow: '0 6px 14px rgba(0,0,0,0.15)',
                        }}
                    >
                        <Image
                            src="/AuthenticRelating.png"
                            alt="AUTHENTIC RELATING"
                            width={180}
                            height={45}
                            priority
                            style={{
                                width: 'auto',
                                height: 'auto',
                                maxWidth: '65%',
                            }}
                        />
                    </Box>

                    {/* HEADING */}
                    <Typography
                        sx={{
                            fontSize: { xs: 15, sm: 18, md: 20 },
                            fontWeight: 600,
                            color: '#444',
                            mb: { xs: 0.8, sm: 1.5 },
                            lineHeight: 1.3,
                        }}
                    >
                        Create Your Account
                    </Typography>

                    {/* PROFILE PHOTO UPLOAD */}
                    <Box sx={{ mb: 1.5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Box
                            sx={{
                                width: 70,
                                height: 70,
                                borderRadius: '50%',
                                background: '#e0e0e0',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                                mb: 0.5,
                                border: whiteBorder,
                                overflow: 'visible',
                            }}
                        >
                            {profilePreview ? (
                                <img
                                    src={profilePreview}
                                    alt="Profile"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        borderRadius: '50%',
                                    }}
                                />
                            ) : (
                                <Typography sx={{ color: '#888', fontSize: 10 }}>
                                    Photo
                                </Typography>
                            )}
                            <IconButton
                                component="label"
                                sx={{
                                    position: 'absolute',
                                    bottom: -4,
                                    right: -4,
                                    backgroundColor: '#1976d2',
                                    '&:hover': { backgroundColor: '#1976d2' },
                                    padding: '6px',
                                    border: '2px solid white',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                                    zIndex: 10,
                                    width: 24,
                                    height: 24,
                                    '& svg': {
                                        fontSize: 14,
                                    }
                                }}
                            >
                                <PhotoCamera sx={{ color: 'white' }} />
                                <input
                                    type="file"
                                    hidden
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                            </IconButton>
                        </Box>
                        <Typography sx={{ fontSize: 10, color: '#777', mt: 0.5 }}>
                            Upload profile photo
                        </Typography>
                    </Box>

                    {/* REST OF YOUR FORM - unchanged */}
                    <Stack spacing={1.2} sx={{ mb: 1.5 }}>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                            <TextField
                                placeholder="First Name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                fullWidth
                                sx={textFieldStyles}
                            />
                            <TextField
                                placeholder="Last Name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                fullWidth
                                sx={textFieldStyles}
                            />
                        </Stack>

                        <TextField
                            placeholder="Username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            fullWidth
                            sx={textFieldStyles}
                        />

                        <TextField
                            placeholder="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            sx={textFieldStyles}
                        />

                        <TextField
                            placeholder="Phone Number"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            fullWidth
                            sx={textFieldStyles}
                        />

                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                            {/* Gender Dropdown */}
                            <FormControl fullWidth>
                                <Select
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    displayEmpty
                                    renderValue={(selected) => {
                                        if (!selected || selected.length === 0) {
                                            return <span style={{ color: '#888', fontSize: 'inherit' }}>Gender</span>;
                                        }
                                        return selected;
                                    }}
                                    sx={{
                                        height: { xs: 36, sm: 40 },
                                        borderRadius: '8px',
                                        backgroundColor: '#fff',
                                        border: whiteBorder,
                                        boxShadow: '0 2px 20px rgba(0,0,0,0.08)',
                                        '& .MuiSelect-select': {
                                            px: { xs: 1.5, sm: 2 },
                                            py: 1,
                                            color: formData.gender ? '#444' : '#888',
                                            fontSize: { xs: 12, sm: 13 },
                                            display: 'flex',
                                            alignItems: 'center',
                                        },
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: 'none',
                                        },
                                        '&:hover': {
                                            backgroundColor: '#fff',
                                        },
                                        '& .MuiSelect-icon': {
                                            color: '#777',
                                            right: 8,
                                        }
                                    }}
                                    MenuProps={{
                                        PaperProps: {
                                            sx: {
                                                borderRadius: '8px',
                                                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                                mt: 0.5,
                                                '& .MuiMenuItem-root': {
                                                    fontSize: { xs: 12, sm: 13 },
                                                    py: 1,
                                                    px: 2,
                                                    '&:hover': {
                                                        backgroundColor: '#f5f5f5',
                                                    },
                                                    '&.Mui-selected': {
                                                        backgroundColor: '#e8f0fe',
                                                    },
                                                },
                                            },
                                        },
                                    }}
                                >
                                    <MenuItem value="" disabled sx={{ color: '#888' }}>Select Gender</MenuItem>
                                    <MenuItem value="Male">Male</MenuItem>
                                    <MenuItem value="Female">Female</MenuItem>
                                    <MenuItem value="Other">Other</MenuItem>
                                </Select>
                            </FormControl>

                            {/* Date of Birth Date Picker */}
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    enableAccessibleFieldDOMStructure={false}
                                    value={formData.dateOfBirth ? new Date(formData.dateOfBirth) : null}
                                    onChange={(newValue) => {
                                        if (newValue) {
                                            const formattedDate = newValue.toISOString().split('T')[0];
                                            setFormData(prev => ({ ...prev, dateOfBirth: formattedDate }));
                                        } else {
                                            setFormData(prev => ({ ...prev, dateOfBirth: '' }));
                                        }
                                    }}
                                    slots={{
                                        textField: (params) => (
                                            <TextField
                                                {...params}
                                                fullWidth
                                                placeholder="Date of Birth"
                                                InputLabelProps={{ shrink: false }}
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        height: { xs: 36, sm: 40 },
                                                        borderRadius: '8px',
                                                        backgroundColor: '#fff',
                                                        border: whiteBorder,
                                                        boxShadow: '0 2px 20px rgba(0,0,0,0.08)',
                                                        '& fieldset': {
                                                            border: 'none',
                                                        },
                                                        '&:hover fieldset': {
                                                            border: 'none',
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            border: 'none',
                                                        },
                                                    },
                                                    '& .MuiInputBase-input': {
                                                        px: { xs: 1.5, sm: 2 },
                                                        py: 1,
                                                        color: formData.dateOfBirth ? '#444' : '#888',
                                                        fontSize: { xs: 12, sm: 13 },
                                                        height: 'auto',
                                                        '&::placeholder': {
                                                            color: '#888',
                                                            opacity: 1,
                                                            fontSize: { xs: 12, sm: 13 },
                                                        },
                                                    },
                                                    '& .MuiInputAdornment-root': {
                                                        mr: 1,
                                                        '& .MuiSvgIcon-root': {
                                                            color: '#777',
                                                            fontSize: { xs: 16, sm: 18 },
                                                        },
                                                    },
                                                }}
                                            />
                                        ),
                                    }}
                                />
                            </LocalizationProvider>
                        </Stack>

                        <TextField
                            placeholder="Password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            fullWidth
                            sx={textFieldStyles}
                            helperText="Minimum length is 8 characters"
                            FormHelperTextProps={{
                                sx: {
                                    fontSize: 9,
                                    color: '#777',
                                    mt: 0.3,
                                    mx: 0
                                }
                            }}
                        />

                        <TextField
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            fullWidth
                            sx={textFieldStyles}
                        />
                    </Stack>

                    <Button
                        fullWidth
                        onClick={handleSubmit}
                        disabled={loading}
                        sx={{
                            height: { xs: 38, sm: 44 },
                            borderRadius: '9px',
                            background: 'linear-gradient(90deg, #ff8a7a, #f0543f)',
                            color: '#fff',
                            fontWeight: 600,
                            fontSize: { xs: 12, sm: 13 },
                            textTransform: 'none',
                            boxShadow: '0 10px 24px rgba(240,84,63,0.45)',
                            mb: 1,
                            '&:hover': { opacity: 0.95 },
                        }}
                    >
                        {loading ? 'Creating Account...' : 'Sign Up'}
                    </Button>

                    <Typography sx={{
                        fontSize: { xs: 9, sm: 10 },
                        color: '#555',
                        mb: 1,
                        px: { xs: 0.5, sm: 0 },
                        lineHeight: 1.4,
                    }}>
                        By creating an account, you agree to the{' '}
                        <b>Terms of Service</b>. We'll occasionally send you
                        account-related emails.
                    </Typography>

                    <Typography sx={{
                        fontSize: { xs: 10, sm: 11 },
                        color: '#777',
                        mb: 0.8
                    }}>
                        or continue with
                    </Typography>

                    <Button
                        fullWidth
                        onClick={() => googleLogin()}
                        disabled={loading}
                        startIcon={
                            <img
                                src="/Googlelogo.png"
                                alt="Google"
                                style={{
                                    width: 16,
                                    height: 16,
                                    marginRight: 4
                                }}
                            />
                        }
                        sx={{
                            height: { xs: 38, sm: 44 },
                            borderRadius: '999px',
                            background: '#fff',
                            color: '#444',
                            fontSize: { xs: 12, sm: 13 },
                            textTransform: 'none',
                            border: whiteBorder,
                            boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                            mb: { xs: 1, sm: 1.2 },
                            '&:hover': { background: '#fff' },
                        }}
                    >
                        Continue with Google
                    </Button>

                    {error && (
                        <Typography sx={{ fontSize: { xs: 10, sm: 11 }, color: '#f0543f', mb: 0.8 }}>
                            {error}
                        </Typography>
                    )}

                    <Typography sx={{
                        fontSize: { xs: 10, sm: 11 },
                        color: '#555',
                        lineHeight: 1.3,
                    }}>
                        Already have an account?{' '}
                        <Box
                            component="span"
                            onClick={() => router.push('/LoginPage')}
                            sx={{
                                color: '#1976d2',
                                fontWeight: 600,
                                cursor: 'pointer',
                                '&:hover': { textDecoration: 'underline' }
                            }}
                        >
                            Login
                        </Box>
                    </Typography>
                </Box>
            </Box>

            {/* Mobile Image */}
            <Box
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    position: 'relative',
                    width: '100%',
                    height: 360,
                    overflow: 'hidden',
                }}
            >
                <Image
                    src="/AuthPage.png"
                    alt="Community Illustration"
                    fill
                    priority
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
            </Box>
        </Box>
    );
}

// Reusable text field styles
const textFieldStyles = {
    '& .MuiOutlinedInput-root': {
        height: { xs: 36, sm: 40 },
        borderRadius: '8px',
        background: '#fff',
        border: whiteBorder,
        boxShadow: '0 2px 20px rgba(0,0,0,0.08)',
    },
    '& fieldset': { border: 'none' },
    '& .MuiInputBase-input': {
        px: { xs: 1.5, sm: 2 },
        color: '#444',
        fontSize: { xs: 12, sm: 13 },
    },
    '& .MuiInputBase-input::placeholder': {
        color: '#888',
        opacity: 1,
        fontSize: { xs: 12, sm: 13 },
    },
    '& .MuiInputBase-input[type="date"]': {
        color: '#888',
        '&::-webkit-calendar-picker-indicator': {
            filter: 'invert(0.5)',
        }
    },
};




