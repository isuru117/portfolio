import { Box, Container, Typography, Paper, Grid, Chip, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";

const projectLinks = [
  {},
  {},
  { playStore: "https://play.google.com/store/apps/details?id=com.pmtc.pmtcconnect", appStore: "https://apps.apple.com/fr/app/peugeot-motocycles-connect/id6459468735" },
  { live: "https://vannmaalerbytte.no/" },
  { live: "https://entreprenordialog.no/" },
  { github: "https://github.com/isuru117/portfolio/", live: "https://isuruedirisinghe.com" },
];

const projectTechs = [
  ["React", "Python", "Flask", "GenAI", "MongoDB"],
  ["Python", "React", "Retool", "MongoDB"],
  ["Flutter", "AWS", "Python", "BLE", "HERE Maps"],
  ["React", ".NET Core", "Azure", "TypeScript", "SQL Server"],
  [".NET Core", "React", "Azure Functions", "Azure AD B2C", "TypeScript"],
  ["React 19", "TypeScript", "Vite", "MUI v7", "Framer Motion"],
];

interface ProjectEntry { title: string; description: string; }

const ProjectCard = ({ project, index }: { project: ProjectEntry; index: number }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const links = projectLinks[index] || {};
  const externalLink = (links as Record<string, string>).live || (links as Record<string, string>).playStore || (links as Record<string, string>).appStore;

  return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }} ref={ref}>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 * index }} style={{ height: "100%" }}>
        <Paper elevation={0} sx={{ p: 3, height: "100%", display: "flex", flexDirection: "column", background: "rgba(17, 34, 64, 0.8)", border: "1px solid rgba(100, 255, 218, 0.1)", transition: "all 0.3s ease", "&:hover": { border: "1px solid rgba(100, 255, 218, 0.3)", transform: "translateY(-4px)" } }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
            <FolderOpenIcon sx={{ color: "#64ffda", fontSize: 32 }} />
            <Box>
              {(links as Record<string, string>).github && (
                <IconButton component="a" href={(links as Record<string, string>).github} target="_blank" rel="noopener noreferrer" size="small" sx={{ color: "#8892b0", "&:hover": { color: "#64ffda" } }}>
                  <GitHubIcon fontSize="small" />
                </IconButton>
              )}
              {externalLink && (
                <IconButton component="a" href={externalLink} target="_blank" rel="noopener noreferrer" size="small" sx={{ color: "#8892b0", "&:hover": { color: "#64ffda" } }}>
                  <LaunchIcon fontSize="small" />
                </IconButton>
              )}
            </Box>
          </Box>
          <Typography variant="h6" sx={{ color: "#ccd6f6", fontWeight: 600, fontSize: "1.05rem", mb: 1.5 }}>{project.title}</Typography>
          <Typography variant="body2" sx={{ color: "#8892b0", fontSize: "0.85rem", lineHeight: 1.7, mb: 2, flex: 1 }}>{project.description}</Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mt: "auto" }}>
            {projectTechs[index]?.map((tech) => (
              <Chip key={tech} label={tech} size="small" sx={{ background: "rgba(100, 255, 218, 0.08)", color: "#64ffda", border: "1px solid rgba(100, 255, 218, 0.15)", fontSize: "0.7rem", fontFamily: "'JetBrains Mono', monospace", height: 22 }} />
            ))}
          </Box>
        </Paper>
      </motion.div>
    </Grid>
  );
};

const Projects = () => {
  const { t } = useTranslation();
  const entries = t("projects.entries", { returnObjects: true }) as ProjectEntry[];
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, background: "#0a192f" }}>
      <Container maxWidth="lg" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, color: "#ccd6f6", "&::before": { content: '"05. "', color: "#64ffda", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.9em" } }}>
              {t("projects.title")}
            </Typography>
            <Box sx={{ flex: 1, height: "1px", background: "rgba(100, 255, 218, 0.15)", ml: 3, maxWidth: 300 }} />
          </Box>
        </motion.div>
        <Grid container spacing={3}>
          {entries.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
