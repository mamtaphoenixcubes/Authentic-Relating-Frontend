'use client';

import { useState } from 'react';
import {
    useRouter,
    useSearchParams,
} from "next/navigation";
import { Box, Typography, TextField, Button, Stack } from '@mui/material';
import Image from 'next/image';
import axiosInstance from '@/lib/axios';
import { useGoogleLogin } from '@react-oauth/google';

const whiteBorder = '1.5px solid #fff';

export default function AuthPage() {
    const router = useRouter();

    const searchParams = useSearchParams();

    const redirect =
        searchParams.get("redirect") || "/";

    const action = searchParams.get("action");

    const bookId = searchParams.get("bookId");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const response = await axiosInstance.post('/User/login', {
                email: formData.email,
                password: formData.password
            });
            if (response.data.status === 1) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('refreshToken', response.data.refreshToken);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                if (action && bookId) {
                    router.replace(
                        `${redirect}?action=${action}&bookId=${bookId}`
                    );
                } else {
                    router.replace(redirect);
                }
            } else {
                setError(response.data.error || 'Login failed');
            }
        } catch (error) {
            console.log(error, 'errorerror');
            setError(error.response?.data?.error || 'An error occurred during login');
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
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1.8fr', md: '1fr 1fr' },
                gridTemplateRows: { xs: 'auto 1fr', sm: '1fr' },
                minHeight: '100vh', // ← gives grid rows a real height to fill
                overflow: 'hidden',
            }}
        >
            {/* MOBILE TOP IMAGE — visible only on xs */}
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

            {/* LEFT FORM */}
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#fafafaff',
                    px: { xs: 2, sm: 4, md: 2 },
                    py: { xs: 3, sm: 4, md: 0 },
                    overflow: 'auto',
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: { xs: '100%', sm: '420px' },
                        px: { xs: 1, sm: 0 },
                        textAlign: 'center',
                        my: 'auto',
                    }}
                >
                    {/* LOGO */}
                    <Box
                        sx={{
                            width: { xs: 150, sm: 240, md: 260 },
                            height: { xs: 50, sm: 80, md: 90 },
                            mx: 'auto',
                            mb: { xs: 1.5, sm: 4 },
                            // borderRadius: '50%',
                            // background: 'linear-gradient(135deg, #9cc9f5, #7bb5ec)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            // border: whiteBorder,
                            // boxShadow: '0 6px 14px rgba(0,0,0,0.15)',
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
                            fontSize: { xs: 15, sm: 20 },
                            fontWeight: 600,
                            color: '#444',
                            mb: { xs: 2, sm: 4 },
                            px: { xs: 0.5, sm: 0 },
                            lineHeight: 1.3,
                        }}
                    >
                        Come As You Are. Always.
                        <br />
                        Step In. Be Seen. Be You.
                    </Typography>

                    {/* INPUTS */}
                    <Stack spacing={1.5} sx={{ mb: 2 }}>
                        {[
                            { label: 'Email Id', name: 'email', type: 'text' },
                            { label: 'Password', name: 'password', type: 'password' }
                        ].map(({ label, name, type }) => (
                            <TextField
                                key={label}
                                placeholder={label}
                                type={type}
                                name={name}
                                value={formData[name]}
                                onChange={handleChange}
                                fullWidth
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        height: { xs: 44, sm: 56 },
                                        borderRadius: '9px',
                                        background: '#fff',
                                        border: whiteBorder,
                                        boxShadow: '0 2px 20px rgba(0,0,0,0.08)',
                                    },
                                    '& fieldset': { border: 'none' },
                                    '& .MuiInputBase-input': {
                                        px: { xs: 2, sm: 3 },
                                        color: '#444',
                                        fontSize: { xs: 13, sm: 16 },
                                    },
                                    '& .MuiInputBase-input::placeholder': {
                                        color: '#888',
                                        opacity: 1,
                                        fontSize: { xs: 13, sm: 16 },
                                    },
                                }}
                            />
                        ))}
                    </Stack>

                    {/* SIGN IN BUTTON */}
                    <Button
                        fullWidth
                        onClick={handleSubmit}
                        disabled={loading}
                        sx={{
                            height: { xs: 44, sm: 56 },
                            borderRadius: '9px',
                            background: 'linear-gradient(90deg, #ff8a7a, #f0543f)',
                            color: '#fff',
                            fontWeight: 600,
                            fontSize: { xs: 13, sm: 16 },
                            textTransform: 'none',
                            border: '#ff1e00ff',
                            boxShadow: '0 10px 24px rgba(240,84,63,0.45)',
                            mb: 2,
                            '&:hover': { opacity: 0.95 },
                        }}
                    >
                        {loading ? 'Signing in...' : 'Sign in'}
                    </Button>

                    {/* TERMS */}
                    <Typography
                        sx={{
                            fontSize: { xs: 10, sm: 13 },
                            color: '#555',
                            mb: 2,
                            px: { xs: 0.5, sm: 0 },
                            lineHeight: 1.3,
                        }}
                    >
                        By continuing with Google, Apple, or Email, you agree to
                        Mancing <b>Terms of Service</b> and <b>Privacy Policy</b>.
                    </Typography>

                    {/* OR */}
                    <Typography sx={{ fontSize: { xs: 10, sm: 13 }, color: '#777', mb: 1 }}>
                        or continue with
                    </Typography>

                    {/* GOOGLE BUTTON */}
                    <Button
                        fullWidth
                        onClick={() => googleLogin()}
                        disabled={loading}
                        startIcon={
                            <img
                                src="/Googlelogo.png"
                                alt="Google"
                                style={{ width: 18, height: 18, marginRight: 6 }}
                            />
                        }
                        sx={{
                            height: { xs: 44, sm: 56 },
                            borderRadius: '999px',
                            background: '#fff',
                            color: '#444',
                            fontSize: { xs: 13, sm: 16 },
                            textTransform: 'none',
                            border: whiteBorder,
                            boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                            mb: { xs: 2, sm: 4 },
                            '&:hover': { background: '#fff' },
                        }}
                    >
                        Continue with Google
                    </Button>

                    {/* ERROR MESSAGE */}
                    {error && (
                        <Typography sx={{ fontSize: { xs: 11, sm: 13 }, color: '#f0543f', mb: 1 }}>
                            {error}
                        </Typography>
                    )}

                    {/* SIGN UP LINK */}
                    <Typography
                        sx={{
                            fontSize: { xs: 10, sm: 13 },
                            color: '#555',
                            lineHeight: 1.3,
                            mb: { xs: 1, sm: 0 },
                        }}
                    >
                        Do not have an account?{' '}
                        <Box
                            component="span"
                            onClick={() => router.push('/signup')}
                            sx={{ color: '#1976d2', fontWeight: 600, cursor: 'pointer' }}
                        >
                            Sign Up
                        </Box>
                    </Typography>
                </Box>
            </Box>

            {/* RIGHT IMAGE — hidden on xs, shown sm and up */}
            <Box
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    position: 'relative', // required for Next.js Image fill
                    width: '100%',
                    height: '120%',       // fills the grid cell height (driven by minHeight: 100vh on parent)
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