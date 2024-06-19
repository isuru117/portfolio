import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import { TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, Timeline } from '@mui/lab';

const experiences = [
    {
        date: '2020 - Present',
        title: 'Software Engineer',
        company: 'Tech Company',
        description: 'Developing awesome applications.',
    },
    {
        date: '2018 - 2020',
        title: 'Junior Developer',
        company: 'Startup Inc.',
        description: 'Worked on various web projects.',
    },
    {
        date: '2016 - 2018',
        title: 'Intern',
        company: 'Big Corp',
        description: 'Assisted in developing internal tools.',
    },
];

const Experience: React.FC = () => {

    return (
        <Container sx={
            {
                maxHeight: '80vh',
                overflowY: 'auto',
                marginTop: 2,
                padding: 2
            }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Experience
            </Typography>
            <Timeline>
                {experiences.map((experience, index) => (
                    <TimelineItem key={index}>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <WorkIcon />
                            </TimelineDot>
                            {index < experiences.length - 1 && <TimelineConnector />}
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} sx={{ padding: 2 }}>
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
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </Container >
    );
};

export default Experience;