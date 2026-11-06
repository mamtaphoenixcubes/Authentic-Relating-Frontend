



'use client';




import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
    Box,
    Typography,
    TextField,
    Button,
    Stack,
    Avatar,
    IconButton,
    Divider,
    Paper,
    Grid,
    Card
} from '@mui/material';
import {
    Edit as EditIcon,
    Save as SaveIcon,
    Cancel as CancelIcon,
    PhotoCamera,
    Email as EmailIcon,
    Phone as PhoneIcon,
    CalendarToday as CalendarIcon,
    Person as PersonIcon
} from '@mui/icons-material';
import axiosInstance from '@/lib/axios';
import axios from 'axios';

const whiteBorder = '1.5px solid #fff';

export default function ProfilePage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [userData, setUserData] = useState({
        _id: '',
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        phoneNumber: '',
        gender: '',
        dateOfBirth: '',
        profile: '',
        countryCode: '',
        authMethod: '',
        role: '',
        isAdmin: false,
        emailVerified: false,
        phoneVerified: false,
        isActive: true,
        isBlocked: false,
        isDeleted: false,
        createdAt: '',
        updatedAt: '',
        lastLogin: '',
    });

    const [formData, setFormData] = useState({
        ...userData,
        profileFile: null, // ✅ store actual file
    });

    // useEffect(() => {
    //     // Load user data from localStorage or API
    //     const loadUserData = async () => {
    //         try {
    //             setLoading(true);




    //             // Check if user is logged in
    //             const token = localStorage.getItem('token');
    //             if (!token) {
    //                 router.push('/LoginPage');
    //                 return;
    //             }




    //             // Try to get from localStorage first
    //             const storedUser = localStorage.getItem('user');
    //             if (storedUser) {
    //                 const parsedUser = JSON.parse(storedUser);




    //                 // Construct full image URL if profile exists
    //                 if (parsedUser.profile && !parsedUser.profile.startsWith('http')) {
    //                     parsedUser.profile = `${process.env.NEXT_PUBLIC_API_URL}/${parsedUser.profile}`;
    //                 }




    //                 setUserData(parsedUser);
    //                 setFormData(parsedUser);
    //                 setLoading(false);
    //                 return;
    //             }




    //             // If not in localStorage, fetch all users from API
    //             const response = await axiosInstance.get('/User/getAllUser', {
    //                 headers: {
    //                     'Authorization': `Bearer ${token}`
    //                 }
    //             });




    //             console.log(response, "All users response");




    //             if (response.data.status === 1 && response.data.detailsOfUsers) {
    //                 const currentUserEmail = localStorage.getItem('userEmail');




    //                 let currentUser = response.data.detailsOfUsers.find(user => user.email === currentUserEmail);




    //                 if (!currentUser) {
    //                     console.log('User not found by email, using first user');
    //                     currentUser = response.data.detailsOfUsers[0];
    //                 }




    //                 if (currentUser) {
    //                     // Construct full image URL if profile exists
    //                     if (currentUser.profile && !currentUser.profile.startsWith('http')) {
    //                         currentUser.profile = `${process.env.NEXT_PUBLIC_API_URL}/${currentUser.profile}`;
    //                     }




    //                     setUserData(currentUser);
    //                     setFormData(currentUser);
    //                     localStorage.setItem('user', JSON.stringify(currentUser));
    //                 }
    //             }
    //         } catch (error) {
    //             console.error('Error loading user data:', error);
    //             if (error.response?.status === 401) {
    //                 localStorage.removeItem('token');
    //                 localStorage.removeItem('refreshToken');
    //                 localStorage.removeItem('user');
    //                 router.push('/LoginPage');
    //             }
    //         } finally {
    //             setLoading(false);
    //         }
    //     };




    //     loadUserData();
    // }, [router]);

    // useEffect(() => {
    //     const loadUserData = async () => {
    //         try {
    //             setLoading(true);
    //             const token = localStorage.getItem('token');
    //             if (!token) {
    //                 router.push('/LoginPage');
    //                 return;
    //             }
    //             const storedUser = localStorage.getItem('user');
    //             if (storedUser) {
    //                 const parsedUser = JSON.parse(storedUser);
    //                 // console.log('Stored user object:', parsedUser);
    //                 // console.log('Available fields:', Object.keys(parsedUser));
    //                 if (parsedUser.profile && !parsedUser.profile.startsWith('http')) {
    //                     parsedUser.profile = `${process.env.NEXT_PUBLIC_API_URL}/${parsedUser.profile}`;
    //                 }
    //                 setUserData(parsedUser);
    //                 setFormData(parsedUser);
    //                 setLoading(false);
    //                 return;
    //             }

    //             const response = await axiosInstance.get('/User/getAllUser', {
    //                 headers: {
    //                     'Authorization': `Bearer ${token}`
    //                 }
    //             });
    //             console.log('API Response:', response.data);

    //             if (response.data.status === 1 && response.data.detailsOfUsers) {
    //                 const currentUserEmail = localStorage.getItem('userEmail');




    //                 let currentUser = response.data.detailsOfUsers.find(user => user.email === currentUserEmail);




    //                 if (!currentUser) {
    //                     currentUser = response.data.detailsOfUsers[0];
    //                 }




    //                 if (currentUser) {
    //                     console.log('Current user from API:', currentUser);
    //                     console.log('User fields:', Object.keys(currentUser));




    //                     if (currentUser.profile && !currentUser.profile.startsWith('http')) {
    //                         currentUser.profile = `${process.env.NEXT_PUBLIC_API_URL}/${currentUser.profile}`;
    //                     }




    //                     setUserData(currentUser);
    //                     setFormData(currentUser);
    //                     localStorage.setItem('user', JSON.stringify(currentUser));
    //                 }
    //             }
    //         } catch (error) {
    //             console.error('Error loading user data:', error);
    //             if (error.response?.status === 401) {
    //                 localStorage.removeItem('token');
    //                 localStorage.removeItem('refreshToken');
    //                 localStorage.removeItem('user');
    //                 router.push('/LoginPage');
    //             }
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     loadUserData();
    // }, [router]);



    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/LoginPage');
            return;
        }

        const storedUser = localStorage.getItem('user');

        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);

            if (parsedUser.profile && !parsedUser.profile.startsWith('http')) {
                parsedUser.profile = `${process.env.NEXT_PUBLIC_API_URL}/${parsedUser.profile}`;
            }

            setUserData(parsedUser);
            setFormData(parsedUser); // ✅ important
        }
    }, [router]);



    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const previewUrl = URL.createObjectURL(file);

            setFormData(prev => ({
                ...prev,
                profile: previewUrl,   // ✅ for UI preview   
                profileFile: file // ✅ for backend
            }));
        }
    };
    // const handleSave = async () => {
    //     try {
    //         setLoading(true);








    //         if (!userData._id) {
    //             console.error('User _id not found in userData:', userData);
    //             return;
    //         }




    //         console.log('Updating user with _id:', userData._id);








    //         const updateData = {
    //             _id: userData._id,
    //             firstName: formData.firstName,
    //             lastName: formData.lastName,
    //             username: formData.username,
    //             email: formData.email,
    //             phoneNumber: formData.phoneNumber,
    //             gender: formData.gender,
    //             dateOfBirth: formData.dateOfBirth,
    //             // Only include fields that should be updatable
    //             // Don't include: _id, accessToken, refreshToken, __v, createdAt, etc.
    //         };




    //         console.log('Update data being sent:', updateData);








    //         try {




    //             const response = await axiosInstance.put(`/User/updateusers/${userData._id}`, updateData, {
    //                 headers: {
    //                     'Authorization': `Bearer ${localStorage.getItem('token')}`,
    //                     'Content-Type': 'application/json'
    //                 }
    //             });




    //             if (response.data.status === 1) {




    //                 const updatedUser = {
    //                     ...formData,




    //                     accessToken: userData.accessToken,
    //                     refreshToken: userData.refreshToken,
    //                     _id: userData._id,
    //                     __v: userData.__v,
    //                     createdAt: userData.createdAt,
    //                     updatedAt: new Date().toISOString()
    //                 };




    //                 setUserData(updatedUser);
    //                 localStorage.setItem('user', JSON.stringify(updatedUser));
    //                 setEditMode(false);




    //                 console.log('Profile updated successfully');




    //             }
    //         } catch (urlError) {




    //             if (urlError.response?.status === 404) {
    //                 console.log('Endpoint with ID not found, trying without ID in URL...');
    //                 const response = await axiosInstance.put('/User/updateusers', updateData, {
    //                     headers: {
    //                         'Authorization': `Bearer ${localStorage.getItem('token')}`,
    //                         'Content-Type': 'application/json'
    //                     }
    //                 });




    //                 if (response.data.status === 1) {
    //                     const updatedUser = {
    //                         ...formData,
    //                         accessToken: userData.accessToken,
    //                         refreshToken: userData.refreshToken,
    //                         _id: userData._id,
    //                         __v: userData.__v,
    //                         createdAt: userData.createdAt,
    //                         updatedAt: new Date().toISOString()
    //                     };




    //                     setUserData(updatedUser);
    //                     localStorage.setItem('user', JSON.stringify(updatedUser));
    //                     setEditMode(false);




    //                     console.log('Profile updated successfully');
    //                 }
    //             } else {




    //                 throw urlError;
    //             }
    //         }
    //     } catch (error) {
    //         console.error('Error updating profile:', error);
    //         if (error.response) {
    //             console.error('Error response data:', error.response.data);
    //             console.error('Error status:', error.response.status);
    //             console.error('Error headers:', error.response.headers);








    //             if (error.response.status === 400) {
    //                 console.error('Bad request - check your data format:', error.response.data);




    //             } else if (error.response.status === 401) {
    //                 console.error('Unauthorized - token might be expired');




    //                 localStorage.removeItem('token');
    //                 localStorage.removeItem('refreshToken');
    //                 localStorage.removeItem('user');
    //                 router.push('/LoginPage');
    //             } else if (error.response.status === 403) {
    //                 console.error('Forbidden - insufficient permissions');
    //             } else if (error.response.status === 404) {
    //                 console.error('Endpoint not found - check the API URL');
    //             } else if (error.response.status === 500) {
    //                 console.error('Server error - try again later');
    //             }
    //         } else if (error.request) {
    //             console.error('No response received from server:', error.request);
    //         } else {
    //             console.error('Error setting up request:', error.message);
    //         }
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    const handleSave = async () => {
        try {
            setLoading(true);

            const token = localStorage.getItem('token');

            const formPayload = new FormData();

            // Append normal fields
            Object.keys(formData).forEach((key) => {
                if (key !== 'profileFile' && key !== 'profile') {
                    formPayload.append(key, formData[key]);
                }
            });

            // ✅ Append file only if user selected new one
            if (formData.profileFile) {
                formPayload.append('profile', formData.profileFile);
            }

            // const response = await axiosInstance.put(
            //     `/User/updateusers/${userData._id}`,
            //     formPayload,
            //     // {
            //     //     headers: {
            //     //         Authorization: `Bearer ${token}`,
            //     //         "Content-Type": "multipart/form-data", // override
            //     //     },
            //     // }
            // );


            const response = await axios.put(
                `${process.env.NEXT_PUBLIC_API_URL}/User/updateusers/${userData._id}`,
                formPayload,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        // ❌ DO NOT add Content-Type
                    },
                }
            );

            if (response.data.status === 1) {

                console.log(response.data.edituser)
                const updatedUser = response.data.edituser || formData;

                // If backend returns relative path → fix URL
                if (updatedUser.profile && !updatedUser.profile.startsWith('http')) {
                    updatedUser.profile = `${process.env.NEXT_PUBLIC_API_URL}/${updatedUser.profile}`;
                }

                setUserData(updatedUser);
                setFormData({ ...updatedUser, profileFile: null });

                localStorage.setItem('user', JSON.stringify(updatedUser));

                setEditMode(false);
            }

        } catch (error) {
            console.log(error,"err")
            console.error("Update error:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = () => {
        setFormData(userData);
        setEditMode(false);
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'Not set';
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #f5f7fa 0%, #fafafaff 100%)',
                pt: { xs: 12, sm: 15, md: 18 },
                pb: { xs: 4, sm: 6 },
                px: { xs: 2, sm: 4, md: 6 },
            }}
        >
            {/* Main Content */}
            <Paper
                elevation={0}
                sx={{
                    maxWidth: '1000px',
                    mx: 'auto',
                    borderRadius: { xs: '16px', sm: '24px' },
                    background: '#fff',
                    border: whiteBorder,
                    boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                    overflow: 'hidden',
                }}
            >
                {/* Profile Header with Cover */}
                <Box
                    sx={{
                        height: { xs: '100px', sm: '150px' },
                        background: 'linear-gradient(90deg, #8b944f 0%, #a8b35f 100%)',
                        position: 'relative',
                    }}
                />
                {/* Profile Content */}
                <Box sx={{ px: { xs: 2, sm: 4, md: 6 }, pb: { xs: 3, sm: 5 } }}>
                    {/* Avatar Section */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            alignItems: { xs: 'center', sm: 'flex-end' },
                            gap: { xs: 2, sm: 3 },
                            mt: { xs: -5, sm: -6 },
                            mb: 3,
                        }}
                    >
                        <Box sx={{ position: 'relative' }}>
                            <Avatar
                                src={formData.profile}
                                sx={{
                                    width: { xs: 90, sm: 120 },
                                    height: { xs: 90, sm: 120 },
                                    border: '4px solid white',
                                    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                                    bgcolor: '#e0e0e0',
                                    fontSize: { xs: 32, sm: 48 },
                                }}
                            >
                                {formData.firstName?.[0]}{formData.lastName?.[0]}
                            </Avatar>
                            {editMode && (
                                <IconButton
                                    component="label"
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        right: 0,
                                        backgroundColor: '#8b944f',
                                        '&:hover': { backgroundColor: '#6b7439' },
                                        border: '2px solid white',
                                        width: { xs: 28, sm: 32 },
                                        height: { xs: 28, sm: 32 },
                                    }}
                                >
                                    <PhotoCamera sx={{ color: 'white', fontSize: { xs: 16, sm: 18 } }} />
                                    <input
                                        type="file"
                                        hidden
                                        accept="image/*"
                                        onChange={handleImageChange}
                                    />
                                </IconButton>
                            )}
                        </Box>
                        <Box sx={{ flex: 1, textAlign: { xs: 'center', sm: 'left' } }}>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontSize: { xs: 20, sm: 24, md: 28 },
                                    fontWeight: 600,
                                    color: '#333',
                                }}
                            >
                                {userData.firstName} {userData.lastName}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: { xs: 13, sm: 14 },
                                    color: '#777',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: { xs: 'center', sm: 'flex-start' },
                                    gap: 0.5,
                                    mt: 0.5,
                                }}
                            >
                                <PersonIcon sx={{ fontSize: 16 }} /> @{userData.username || 'username'}
                            </Typography>
                        </Box>




                        {!editMode ? (
                            <Button
                                startIcon={<EditIcon />}
                                onClick={() => {
                                    setFormData(userData); // ✅ sync latest data
                                    setEditMode(true);
                                }}
                                sx={{
                                    height: { xs: 36, sm: 40 },
                                    px: { xs: 2, sm: 3 },
                                    borderRadius: '20px',
                                    background: '#8b944f',
                                    color: 'white',
                                    fontSize: { xs: 12, sm: 14 },
                                    '&:hover': {
                                        background: '#6b7439',
                                    },
                                }}
                            >
                                Edit Profile
                            </Button>
                        ) : (
                            <Stack direction="row" spacing={1}>
                                <Button
                                    startIcon={<SaveIcon />}
                                    onClick={handleSave}
                                    disabled={loading}
                                    sx={{
                                        height: { xs: 36, sm: 40 },
                                        px: { xs: 2, sm: 3 },
                                        borderRadius: '20px',
                                        background: '#8b944f',
                                        color: 'white',
                                        fontSize: { xs: 12, sm: 14 },
                                        '&:hover': {
                                            background: '#6b7439',
                                        },
                                    }}
                                >
                                    Save
                                </Button>
                                <Button
                                    startIcon={<CancelIcon />}
                                    onClick={handleCancel}
                                    sx={{
                                        height: { xs: 36, sm: 40 },
                                        px: { xs: 2, sm: 3 },
                                        borderRadius: '20px',
                                        background: '#f5f5f5',
                                        color: '#666',
                                        fontSize: { xs: 12, sm: 14 },
                                        border: '1px solid #ddd',
                                        '&:hover': {
                                            background: '#eee',
                                        },
                                    }}
                                >
                                    Cancel
                                </Button>
                            </Stack>
                        )}
                    </Box>

                    <Divider sx={{ my: 3, borderColor: '#eee' }} />
                    {/* Profile Info Grid */}
                    <Grid container spacing={3}>
                        {/* Left Column */}
                        <Grid item xs={12} md={6}>
                            <Stack spacing={2.5}>
                                <Box>
                                    <Typography sx={{ fontSize: 12, color: '#999', mb: 0.5, fontWeight: 500 }}>
                                        FIRST NAME
                                    </Typography>
                                    {editMode ? (
                                        <TextField
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            fullWidth
                                            size="small"
                                            placeholder="First Name"
                                            sx={textFieldStyles}
                                        />
                                    ) : (
                                        <Typography sx={{ fontSize: 15, color: '#444' }}>
                                            {userData.firstName || 'Not set'}
                                        </Typography>
                                    )}
                                </Box>
                                <Box>
                                    <Typography sx={{ fontSize: 12, color: '#999', mb: 0.5, fontWeight: 500 }}>
                                        LAST NAME
                                    </Typography>
                                    {editMode ? (
                                        <TextField
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            fullWidth
                                            size="small"
                                            placeholder="Last Name"
                                            sx={textFieldStyles}
                                        />
                                    ) : (
                                        <Typography sx={{ fontSize: 15, color: '#444' }}>
                                            {userData.lastName || 'Not set'}
                                        </Typography>
                                    )}
                                </Box>
                                <Box>
                                    <Typography sx={{ fontSize: 12, color: '#999', mb: 0.5, fontWeight: 500 }}>
                                        USERNAME
                                    </Typography>
                                    {editMode ? (
                                        <TextField
                                            name="username"
                                            value={formData.username}
                                            onChange={handleChange}
                                            fullWidth
                                            size="small"
                                            placeholder="Username"
                                            sx={textFieldStyles}
                                        />
                                    ) : (
                                        <Typography sx={{ fontSize: 15, color: '#444' }}>
                                            @{userData.username || 'username'}
                                        </Typography>
                                    )}
                                </Box>


                                <Box>
                                    <Typography sx={{ fontSize: 12, color: '#999', mb: 0.5, fontWeight: 500 }}>
                                        MEMBER SINCE
                                    </Typography>
                                    <Typography sx={{ fontSize: 14, color: '#444' }}>
                                        {formatDate(userData.memberSince || new Date())}
                                    </Typography>
                                </Box>
                            </Stack>
                        </Grid>

                        {/* Right Column */}
                        <Grid item xs={12} md={6}>
                            <Stack spacing={2.5}>
                                <Box>
                                    <Typography sx={{ fontSize: 12, color: '#999', mb: 0.5, fontWeight: 500 }}>
                                        EMAIL
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <EmailIcon sx={{ fontSize: 18, color: '#777' }} />
                                        {editMode ? (
                                            <TextField
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                fullWidth
                                                size="small"
                                                placeholder="Email"
                                                sx={textFieldStyles}
                                            />
                                        ) : (
                                            <Typography sx={{ fontSize: 14, color: '#444' }}>
                                                {userData.email}
                                            </Typography>
                                        )}
                                    </Box>
                                </Box>

                                <Box>
                                    <Typography sx={{ fontSize: 12, color: '#999', mb: 0.5, fontWeight: 500 }}>
                                        PHONE
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <PhoneIcon sx={{ fontSize: 18, color: '#777' }} />
                                        {editMode ? (
                                            <TextField
                                                name="phoneNumber"
                                                value={formData.phoneNumber}
                                                onChange={handleChange}
                                                fullWidth
                                                size="small"
                                                placeholder="Phone Number"
                                                sx={textFieldStyles}
                                            />
                                        ) : (
                                            <Typography sx={{ fontSize: 14, color: '#444' }}>
                                                {userData.phoneNumber || 'Not set'}
                                            </Typography>
                                        )}
                                    </Box>
                                </Box>
                                <Box>
                                    <Typography sx={{ fontSize: 12, color: '#999', mb: 0.5, fontWeight: 500 }}>
                                        GENDER
                                    </Typography>
                                    {editMode ? (
                                        <TextField
                                            name="gender"
                                            value={formData.gender}
                                            onChange={handleChange}
                                            fullWidth
                                            size="small"
                                            placeholder="Gender"
                                            sx={textFieldStyles}
                                        />
                                    ) : (
                                        <Typography sx={{ fontSize: 14, color: '#444' }}>
                                            {userData.gender || 'Not set'}
                                        </Typography>
                                    )}
                                </Box>

                                <Box>
                                    <Typography sx={{ fontSize: 12, color: '#999', mb: 0.5, fontWeight: 500 }}>
                                        DATE OF BIRTH
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <CalendarIcon sx={{ fontSize: 18, color: '#777' }} />
                                        {editMode ? (
                                            <TextField
                                                name="dateOfBirth"
                                                type="date"
                                                value={formData.dateOfBirth}
                                                onChange={handleChange}
                                                fullWidth
                                                size="small"
                                                sx={textFieldStyles}
                                                InputLabelProps={{ shrink: true }}
                                            />
                                        ) : (
                                            <Typography sx={{ fontSize: 14, color: '#444' }}>
                                                {formatDate(userData.dateOfBirth)}
                                            </Typography>
                                        )}
                                    </Box>
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Box>
    );
}


// Reusable text field styles
const textFieldStyles = {
    '& .MuiOutlinedInput-root': {
        height: { xs: 40, sm: 44 },
        borderRadius: '8px',
        background: '#fff',
        border: '1px solid #e0e0e0',
        '& fieldset': { border: 'none' },
        '&:hover': {
            borderColor: '#b0b0b0',
        },
        '&.Mui-focused': {
            borderColor: '#8b944f',
        },
    },
    '& .MuiInputBase-input': {
        px: { xs: 1.5, sm: 2 },
        color: '#444',
        fontSize: { xs: 13, sm: 14 },
    },
};





