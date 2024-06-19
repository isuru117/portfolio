import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, Timeline } from '@mui/lab';
import logo_99x from '../../assets/logos/99x.png';
import logo_pmtc from '../../assets/logos/pmtc.png';

const experiences = [
    {
        date: 'Nov. 2022 - Present',
        title: 'IT Developer (Apprentice)',
        company: 'Peugeot Motocycles',
        description: `
        • Direct and approve the design and implementation of the next-generation mobile connectivity project for two wheelers, in collaboration with global partners in China, India, and Italy.
        • Ensure high standards of project execution through rigorous management and review processes, enhancing the project’s technological advancement and market readiness.
        • Brought forward and executed the company’s real-time data logger project, significantly enhancing the efficiency of vehicle diagnostics and monitoring capabilities through improved data collection and analysis.`,
        technologies: 'Flutter, HERE Maps, AWS, Python, IPEmotion RT',
        icon: logo_pmtc
    },
    {
        date: 'Jun. 2022 - Aug. 2022',
        title: 'Senior Software Engineer',
        company: '99x Technology',
        description: `
        • Effectively led Scrum ceremonies as Scrum Master, collaborating closely with Norway-based Product Owners to ensure timely and high-quality product delivery.
        • Streamlined infrastructure deployment on Azure utilizing ARM templates.
        • Achieved in developing a compatibility layer between Mapbox GL with React Beautiful DND libraries, meeting client specifications for enhanced drag-and-drop functionalities.`,
        technologies: 'Azure Functions, Azure DevOps, Azure Resource Manager, .NET Core, TypeScript, React, SQL Server',
        icon: logo_99x
    },
    {
        date: 'Mar. 2020 - Jun. 2022',
        title: 'Software Engineer',
        company: '99x Technology',
        description: `
        • Led the successful design and development of scalable backend REST API services, leveraging ASP.NET Core and
        MS SQL Server to extend application functionality.
        • Successfully implemented and integrated authentication middleware across the application using Microsoft Graph API
        and Azure AD B2C.
        • Laid the groundwork for the React frontend and enabled Progressive Web Application (PWA) functionality.
        • Integrated map functionality using Deck GL with MapBox GL to enable storing and retrieving coordinate data from
        user-drawn polygons along with custom metadata.
        `,
        technologies: 'Azure Functions, Azure AD, Azure DevOps, .NET Core, TypeScript, React, SQL Server',
        icon: logo_99x
    },
    {
        date: '2016 - 2018',
        title: 'Intern',
        company: 'Big Corp',
        description: 'Assisted in developing internal tools.',
        technologies: 'Flutter, HERE Maps, AWS, Python, IPEmotion RT',
        icon: logo_99x
    },
];

const ExperienceDescription = ({ description }: { description: string }) => {
    const paragraphs = description.split('\n').map((paragraph, index) => (
        <Typography key={index} variant="body1" style={{ marginBottom: '8px' }}>
            {paragraph}
        </Typography>
    ));

    return <>{paragraphs}</>;
};

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
                scrollBehavior: 'smooth',
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
                                <div style={{ padding: 2, maxWidth: '600px' }}>
                                    <Typography variant="h6" component="h1">
                                        {experience.title}
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        {experience.company}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {experience.date}
                                    </Typography>
                                    <ExperienceDescription description={experience.description} />
                                    <Typography variant="body2" color="textSecondary">
                                        Technologies: {experience.technologies}
                                    </Typography>
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