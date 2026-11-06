'use client';

import { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';
import axiosInstance from "@/lib/axios";

import Section from '../../_components/common/Section';
import SiteContainer from '../../_components/common/SiteContainer';

const MotionBox = motion(Box);
const MotionAccordion = motion(Accordion);

export default function FAQSection() {
  const [expanded, setExpanded] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [topics, setTopics] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [detailsOfFAQ, setDetailsOfFAQ] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await axiosInstance.get('/frontendApis/getAllFAQ', {
          params: { size: 20, page: 0, search: '' },
        });

        const faqGroups = res?.data?.detailsOfFAQ || [];
        setDetailsOfFAQ(faqGroups);

        const allFaqs = faqGroups.flatMap(group => group.faqs);
        setFaqs(allFaqs);

        const res2 = await axiosInstance.get('/frontendApis/getAllTopics', {
          params: { size: 20, page: 0, search: '' },
        });

        const topicsData = res2?.data?.detailsOfTopics || [];
        setTopics(topicsData);

        if (topicsData.length > 0) {
          setSelectedTopic(topicsData[0]._id);
        }
      } catch (error) {
        console.error('API error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  return (
    <Section>
      <SiteContainer>
        <MotionBox
          sx={theme => theme.custom.faq.motionBox}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={theme => theme.custom.faq.headerBox}>
            <Typography
              component="h2"
              sx={theme => ({
                ...theme.custom.faq.title,
                color: "#0077D1", // Override color here
              })}
            >
              Frequently Asked Questions
            </Typography>
            <Typography sx={theme => theme.custom.faq.description}>
              Welcome to our FAQ section, where you'll find answers to all your burning questions!
            </Typography>
          </Box>

          <Grid
            container
            spacing={4}
            sx={theme => theme.custom.faq.mainGrid}
            direction={{ xs: 'column', sm: 'row' }}
          >
            <Grid
              item
              xs={12}
              sm={4}
              md={3}
              sx={theme => theme.custom.faq.sidebarGrid}
            >
              <Typography sx={theme => theme.custom.faq.sidebarTitle}>Topic</Typography>

              {topics.map((topic, index) => (
                <MotionBox
                  key={topic._id || index}
                  sx={theme => ({
                    ...theme.custom.faq.topicItem,
                    borderColor: selectedTopic === topic._id ? "#F45B4F" : "transparent",
                    fontWeight: selectedTopic === topic._id ? 800 : 400,
                    color: selectedTopic === topic._id ? "#0077D1" : "#374151",
                  })}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  onClick={() =>
                    setSelectedTopic(selectedTopic === topic._id ? null : topic._id)
                  }
                >
                  {topic.title}
                </MotionBox>
              ))}
            </Grid>

            <Grid item xs={12} sm={8} md={9}>
              <Typography sx={theme => theme.custom.faq.questionsTitle}>
                Questions and answers
              </Typography>

              {(selectedTopic
                ? detailsOfFAQ
                  .filter(group => group.title_id === selectedTopic)
                  .flatMap(group => group.faqs)
                : faqs
              ).map((item, index) => (
                <MotionAccordion
                  key={item._id || index}
                  expanded={expanded === item._id}
                  onChange={() =>
                    setExpanded(expanded === item._id ? null : item._id)
                  }
                  disableGutters
                  sx={theme => ({
                    ...theme.custom.faq.accordion,
                    ...(expanded === item._id
                      ? theme.custom.faq.accordionExpanded
                      : theme.custom.faq.accordionCollapsed),

                    // ✅ Border color override
                    border: '2px solid #ffc8c0',
                    '&:before': {
                      display: 'none',
                    },
                    '&.Mui-expanded': {
                      border: '2px solid #ffc8c0',
                    },
                  })}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  viewport={{ once: true }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={theme => ({
                          color: expanded === item._id ? '#fff' : '#6B7280',
                        })}
                      />
                    }
                    sx={theme => theme.custom.faq.accordionSummary}
                  >
                    <Typography sx={theme => theme.custom.faq.questionText}>
                      {item.question}
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails sx={theme => theme.custom.faq.accordionDetails}>
                    <Box
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                      sx={theme => theme.custom.faq.answerBox}
                    />
                  </AccordionDetails>
                </MotionAccordion>
              ))}
            </Grid>
          </Grid>
        </MotionBox>
      </SiteContainer>
    </Section>
  );
}