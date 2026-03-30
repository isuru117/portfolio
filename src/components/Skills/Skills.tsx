import { Box, Container, Typography, Chip, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import CloudIcon from "@mui/icons-material/Cloud";
import BuildIcon from "@mui/icons-material/Build";

const skillCategories = [
  { key: "languages", icon: <CodeIcon />, skills: ["C#", "TypeScript", "JavaScript", "Python"] },
  { key: "frontend", icon: <CodeIcon />, skills: ["React", "Redux", "Angular", "Flutter", "PWA", "Material UI", "HTML5", "CSS3"] },
  { key: "backend", icon: <StorageIcon />, skills: [".NET Core", "Node.js", "Express.js", "GraphQL", "Microservices", "Serverless", "REST APIs"] },
  { key: "cloud", icon: <CloudIcon />, skills: ["Azure", "AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "CI/CD", "Azure DevOps"] },
  { key: "databases", icon: <BuildIcon />, skills: ["SQL Server", "MongoDB", "RabbitMQ", "MQTT"] },
  { key: "tools", icon: <BuildIcon />, skills: ["Git", "Agile/Scrum", "Retool", "Jira"] },
];

const Skills = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, background: "#112240" }}>
      <Container maxWidth="lg" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, color: "#ccd6f6", "&::before": { content: '"02. "', color: "#64ffda", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.9em" } }}>
              {t("skills.title")}
            </Typography>
            <Box sx={{ flex: 1, height: "1px", background: "rgba(100, 255, 218, 0.15)", ml: 3, maxWidth: 300 }} />
          </Box>
        </motion.div>

        <Grid container spacing={3}>
          {skillCategories.map((category, catIndex) => (
            <Grid key={category.key} size={{ xs: 12, sm: 6, md: 4 }}>
              <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 * catIndex }} style={{ height: "100%" }}>
                <Paper elevation={0} sx={{ p: 3, height: "100%", background: "rgba(10, 25, 47, 0.7)", border: "1px solid rgba(100, 255, 218, 0.1)", transition: "all 0.3s ease", "&:hover": { border: "1px solid rgba(100, 255, 218, 0.3)", transform: "translateY(-4px)" } }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Box sx={{ color: "#64ffda", mr: 1.5, display: "flex" }}>{category.icon}</Box>
                    <Typography variant="h6" sx={{ color: "#ccd6f6", fontWeight: 600, fontSize: "1rem" }}>
                      {t(`skills.categories.${category.key}`)}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {category.skills.map((skill) => (
                      <Chip key={skill} label={skill} size="small" sx={{ background: "rgba(100, 255, 218, 0.08)", color: "#64ffda", border: "1px solid rgba(100, 255, 218, 0.2)", fontSize: "0.78rem", fontFamily: "'JetBrains Mono', monospace", "&:hover": { background: "rgba(100, 255, 218, 0.15)" } }} />
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
