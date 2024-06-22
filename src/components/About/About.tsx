import React from 'react';
import { Container, Typography } from '@mui/material';

const About: React.FC = () => {

    const Paragraph: React.FC<any> = ({ children }) => {
        return (
            <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                {children}
            </Typography>
        )
    }

    return (
        <Container id="about" sx={{ marginTop: 4 }}>
            <Typography variant="h2" className="section-heading" gutterBottom>
                About Me
            </Typography>
            <Paragraph>
                I'm a Fullstack Software Engineer with a diverse background in developing innovative solutions across multiple industries. Currently, I'm working as an Apprentice IT Developer at Peugeot Motocycles in Mandeure, France, where I lead cutting-edge projects to enhance mobile connectivity for two-wheelers. Collaborating with global partners in China, India, and Italy, I ensure high standards of project execution, technological advancement, and market readiness. One of my notable achievements includes the implementation of a real-time data logger project, significantly improving vehicle diagnostics and monitoring capabilities.
            </Paragraph>
            <Paragraph>
                Previously, I served as a Senior Software Engineer at 99x Technology in Colombo, Sri Lanka. During my tenure, I effectively led Scrum ceremonies and collaborated closely with Product Owners based in Norway. I also streamlined infrastructure deployment on Azure, developed a compatibility layer between Mapbox GL and React Beautiful DND libraries, and successfully delivered scalable backend REST API services.
            </Paragraph>
            <Paragraph>
                I began my professional journey as a Trainee Software Engineer, where I honed my skills in backend and frontend development, cloud infrastructure deployment, and performance optimization. My technical expertise includes a wide array of technologies such as Flutter, HERE Maps, AWS, Python, Azure Functions, .NET Core, TypeScript, React, SQL Server, Express.js, MongoDB, Angular, Jenkins, Docker, and many more.
            </Paragraph>
            <Paragraph>
                In addition to my professional experience, I am currently pursuing my MSc. in Internet of Things at the University Bourgogne Franche-Comté in Montbéliard, France. I hold a BSc. (Hons) in Computer Science and Technology from Uva Wellassa University in Badulla, Sri Lanka, where I graduated with a 2nd Class Upper Division.
            </Paragraph>
            <Paragraph>
                Feel free to explore my website to learn more about my projects, skills, and experiences. Let's connect and explore how we can work together to create impactful and innovative solutions!
            </Paragraph>
        </Container>
    );
};

export default About;
