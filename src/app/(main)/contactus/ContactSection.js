'use client';

import { Box, Typography, TextField, Button, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import axiosInstance from '@/lib/axios';
import toast from 'react-hot-toast';
import CustomToast from '@/app/_components/ui/CustomToast';
import Section from '@/app/_components/common/Section';
import SiteContainer from '@/app/_components/common/SiteContainer';
import Card from '@/app/_components/common/Card';

export default function ContactSection() {
  const theme = useTheme();
  const contactStyles = theme.custom.contact;

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!formData.firstName || !formData.email || !formData.message) {
      toast.custom((t) => (
        <CustomToast t={t} type="error" title="Please fill all required fields" subtitle="First name, email and message are required" />
      ));
      return;
    }

    if (formData.phone && !/^[0-9+\-\s()]{10,}$/.test(formData.phone)) {
      toast.custom((t) => (
        <CustomToast t={t} type="error" title="Invalid phone number" subtitle="Please enter a valid phone number" />
      ));
      return;
    }

    setLoading(true);

    try {
      const response = await axiosInstance.post('/ContactUs/AddcontactUs', {
        name: `${formData.firstName || ''} ${formData.lastName || ''}`.trim(),
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });

      if (response.data.status === 1) {
        toast.custom((t) => (
          <CustomToast t={t} type="success" title="Message sent successfully!" subtitle="We will get back to you soon" />
        ));
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      } else {
        toast.custom((t) => (
          <CustomToast t={t} type="error" title="Failed to send message" subtitle={response.data.message || 'Please try again'} />
        ));
      }
    } catch (err) {
      toast.custom((t) => (
        <CustomToast t={t} type="error" title="Something went wrong" subtitle="Please try again later" />
      ));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section>
      <SiteContainer sx={contactStyles.section}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Card sx={contactStyles.card}>
            {/* HEADING */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography sx={contactStyles.heading}>
                Looking for guidance, collaboration, coaching,
                <br />
                or just a friendly check-in? Reach out to us.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Typography sx={contactStyles.subheading}>
                We respond like humans — with presence, warmth, and respect.
              </Typography>
            </motion.div>

            {/* EMAIL CARD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card sx={contactStyles.emailCard}>
                <Typography sx={contactStyles.emailLabel}>
                  Use the form below or email us directly at:
                </Typography>
                <Typography sx={contactStyles.emailAddress}>
                  Coffee@authenticrelating.com
                </Typography>
              </Card>
            </motion.div>

            <Typography sx={contactStyles.disclaimer}>
              We do not contact anyone via WhatsApp or any social media channels.
            </Typography>

            {/* FORM TITLE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Typography sx={contactStyles.formTitle}>
                Start Your Conversation
              </Typography>
            </motion.div>

            {/* INPUT ROWS */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Box sx={contactStyles.formRow}>
                <StyledInput
                  placeholder="First Name *"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <StyledInput
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Box>

              <Box sx={contactStyles.formRow}>
                <StyledInput
                  placeholder="Email *"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  required
                />
                <StyledInput
                  placeholder="Phone Number (optional)"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                />
              </Box>

              <StyledInput
                placeholder="Your Message *"
                multiline
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </motion.div>

            {/* BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Button
                onClick={handleSubmit}
                disabled={loading}
                sx={contactStyles.submitButton}
              >
                {loading ? <CircularProgress size={20} color="inherit" /> : "Send message"}
              </Button>
            </motion.div>
          </Card>
        </motion.div>
      </SiteContainer>
    </Section>
  );
}

const StyledInput = ({
  placeholder,
  multiline = false,
  rows,
  name,
  value,
  onChange,
  type = 'text',
  required = false,
  helper
}) => {
  const theme = useTheme();
  const contactStyles = theme.custom.contact;

  return (
    <Box sx={contactStyles.formInputWrapper}>
      <TextField
        fullWidth
        variant="outlined"
        multiline={multiline}
        rows={rows}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        required={required}
        inputProps={{ spellCheck: false }}
        sx={contactStyles.formInput}
      />
      {helper && (
        <Typography sx={contactStyles.formHelper}>
          {helper}
        </Typography>
      )}
    </Box>
  );
};