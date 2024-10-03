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
                I am a Fullstack Software Engineer with extensive experience in developing and deploying innovative solutions across diverse industries. With a solid foundation in both frontend and backend technologies, I have led and contributed to impactful projects that optimize performance, enhance user experiences, and drive operational efficiency.
            </Paragraph>

            <Paragraph>
                During my Master’s Apprenticeship at Peugeot Motocycles in Mandeure, France, I played a key role in the development of the Peugeot Motocycles Connect app, available on Google Play and the Apple App Store. I also built a real-time vehicle diagnostic dashboard that reduced troubleshooting time by 70%, significantly enhancing the vehicle monitoring process.
            </Paragraph>

            <Paragraph>
                Previously, I held various roles at 99X Technology in Colombo, Sri Lanka, where I consistently delivered results. As a Senior Software Engineer, I spearheaded the development of the Vannmålerbytte app, now used by over 300 municipalities in Norway, cutting water meter installation time by 15% and saving over €1M annually. I also served as Scrum Master, improving team velocity by 20%, and optimized deployment processes, reducing setup time by 30%.
            </Paragraph>

            <Paragraph>
                Throughout my career, I have worked with a wide array of technologies including .NET Core, Python, Flutter, Azure, AWS, React, and TypeScript, leveraging these skills to build scalable REST APIs, cloud-based infrastructure, and user-centric applications. My expertise in cloud services, particularly with AWS and Azure, has enabled me to automate and streamline deployments, reducing operational costs and improving efficiency.
            </Paragraph>

            <Paragraph>
                In addition to my professional experience, I hold an MSc. in Internet of Things with Honors (mention Bien) from the University Bourgogne Franche-Comté, and a BSc. (Hons) in Computer Science and Technology from Uva Wellassa University. I am passionate about leveraging technology to solve complex problems and create innovative solutions that have a lasting impact.
            </Paragraph>

            <Paragraph>
                Let’s connect to discuss how we can collaborate to develop forward-thinking solutions that drive success.
            </Paragraph>
        </Container>
    );
};

export default About;
