import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import { TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, Timeline } from '@mui/lab';
import logo_99x from '../../assets/logos/99x.png';

const experiences = [
    {
        date: '2020 - Present',
        title: 'Software Engineer',
        company: 'Tech Company',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        icon: logo_99x
    },
    {
        date: '2018 - 2020',
        title: 'Junior Developer',
        company: 'Startup Inc.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        icon: logo_99x
    },
    {
        date: '2016 - 2018',
        title: 'Intern',
        company: 'Big Corp',
        description: 'Assisted in developing internal tools.',
        icon: logo_99x
    },
    {
        date: '2016 - 2018',
        title: 'Intern',
        company: 'Big Corp',
        description: 'Assisted in developing internal tools.',
        icon: logo_99x
    },
];

const Experience: React.FC = () => {

    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Experience
            </Typography>
            <Box sx={{
                flexGrow: 1,
                overflowY: 'auto',
                padding: 2,
                scrollSnapType: 'y mandatory',
                scrollBehavior: 'smooth',  // Enable smooth scrolling
                '&::-webkit-scrollbar': { display: 'none' },
                scrollbarWidth: 'none',
            }}>
                <Timeline position="alternate">
                    {experiences.map((experience, index) => (
                        <TimelineItem
                            key={index}
                            sx={{
                                scrollSnapAlign: 'start',
                            }}
                        >
                            <TimelineSeparator>
                                <Box
                                    component="span"
                                    sx={{
                                        width: 56,
                                        height: 56,
                                        borderRadius: '50%',
                                        bgcolor: 'background.paper',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: 1,
                                    }}
                                >
                                    <img
                                        src={experience.icon}
                                        alt={`${experience.company} logo`}
                                        style={{ width: 40, height: 40, borderRadius: '50%' }}
                                    />
                                </Box>
                                {index < experiences.length - 1 && <TimelineConnector />}
                            </TimelineSeparator>
                            <TimelineContent sx={{ display: 'flex', justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end' }}>
                                <div style={{ padding: 2, maxWidth: '300px' }}>
                                    <Typography variant="h6" component="h1">
                                        {experience.title}
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        {experience.company}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {experience.date}
                                    </Typography>
                                    <Typography variant="body1">{experience.description}</Typography>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Box>
        </Container>
    );
};

export default Experience;