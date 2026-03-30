import { Container, Typography, Box, Paper, Chip } from "@mui/material";
import { TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, Timeline, TimelineDot } from "@mui/lab";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import logo_am from "../../assets/logos/archimed.png";
import logo_99x from "../../assets/logos/99x.png";
import logo_pmtc from "../../assets/logos/pmtc.png";
import logo_tracified from "../../assets/logos/tracified.jpeg";

const logos = [logo_am, logo_pmtc, logo_99x, logo_99x, logo_tracified];
const techs = [
  ["React", "Python", "Flask", "MongoDB", "Retool", "GenAI"],
  ["Flutter", "Python", "Streamlit", "AWS", "IPEmotion RT"],
  ["Azure DevOps", "Azure Resource Manager", ".NET Core", "React"],
  [".NET Core", "C#", "Azure Functions", "Azure AD B2C", "React", "TypeScript", "SQL Server"],
  ["Express.js", "Node.js", "Angular", "TypeScript", "MongoDB", "AWS CDK", "Docker"],
];

interface EntryData {
  date: string;
  title: string;
  company: string;
  location: string;
  highlights: string[];
}

const ExperienceItem = ({ entry, index, logo }: { entry: EntryData; index: number; logo: string }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <TimelineItem ref={ref}>
      <TimelineSeparator>
        <motion.div initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}} transition={{ duration: 0.4, delay: 0.1 * index }}>
          <TimelineDot sx={{ background: "transparent", border: "2px solid #64ffda", p: 0, width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
            <img src={logo} alt={entry.company} style={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover" }} />
          </TimelineDot>
        </motion.div>
        <TimelineConnector sx={{ background: "rgba(100, 255, 218, 0.2)" }} />
      </TimelineSeparator>
      <TimelineContent sx={{ pb: 4 }}>
        <motion.div initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.15 * index }}>
          <Paper elevation={0} sx={{ p: 3, background: "rgba(17, 34, 64, 0.8)", border: "1px solid rgba(100, 255, 218, 0.1)", transition: "all 0.3s ease", "&:hover": { border: "1px solid rgba(100, 255, 218, 0.3)", transform: "translateY(-2px)" } }}>
            <Typography variant="h6" sx={{ color: "#ccd6f6", fontWeight: 600, mb: 0.5 }}>{entry.title}</Typography>
            <Typography sx={{ color: "#64ffda", fontSize: "0.9rem", fontWeight: 500, mb: 0.5 }}>{entry.company}</Typography>
            <Typography variant="body2" sx={{ color: "#8892b0", fontSize: "0.8rem", fontFamily: "'JetBrains Mono', monospace", mb: 2 }}>
              {entry.date} &bull; {entry.location}
            </Typography>
            <Box component="ul" sx={{ pl: 2, mb: 2 }}>
              {entry.highlights.map((h, i) => (
                <Box component="li" key={i} sx={{ color: "#8892b0", fontSize: "0.88rem", lineHeight: 1.7, mb: 0.5, "&::marker": { color: "#64ffda" } }}>{h}</Box>
              ))}
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
              {techs[index]?.map((tech) => (
                <Chip key={tech} label={tech} size="small" sx={{ background: "rgba(100, 255, 218, 0.08)", color: "#64ffda", border: "1px solid rgba(100, 255, 218, 0.15)", fontSize: "0.7rem", fontFamily: "'JetBrains Mono', monospace", height: 24 }} />
              ))}
            </Box>
          </Paper>
        </motion.div>
      </TimelineContent>
    </TimelineItem>
  );
};

const MobileCard = ({ entry, index, logo }: { entry: EntryData; index: number; logo: string }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 * index }}>
      <Paper elevation={0} sx={{ p: 3, mb: 2, background: "rgba(17, 34, 64, 0.8)", border: "1px solid rgba(100, 255, 218, 0.1)" }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
          <Box sx={{ width: 36, height: 36, borderRadius: "50%", border: "2px solid #64ffda", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", mr: 1.5, flexShrink: 0 }}>
            <img src={logo} alt={entry.company} style={{ width: 28, height: 28, borderRadius: "50%", objectFit: "cover" }} />
          </Box>
          <Box>
            <Typography sx={{ color: "#ccd6f6", fontWeight: 600, fontSize: "0.95rem" }}>{entry.title}</Typography>
            <Typography sx={{ color: "#64ffda", fontSize: "0.8rem" }}>{entry.company}</Typography>
          </Box>
        </Box>
        <Typography variant="body2" sx={{ color: "#8892b0", fontSize: "0.75rem", fontFamily: "'JetBrains Mono', monospace", mb: 1.5 }}>{entry.date}</Typography>
        <Box component="ul" sx={{ pl: 2, mb: 1.5 }}>
          {entry.highlights.map((h, i) => (
            <Box component="li" key={i} sx={{ color: "#8892b0", fontSize: "0.85rem", lineHeight: 1.6, mb: 0.3, "&::marker": { color: "#64ffda" } }}>{h}</Box>
          ))}
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
          {techs[index]?.map((tech) => (
            <Chip key={tech} label={tech} size="small" sx={{ background: "rgba(100, 255, 218, 0.08)", color: "#64ffda", fontSize: "0.65rem", fontFamily: "'JetBrains Mono', monospace", height: 22 }} />
          ))}
        </Box>
      </Paper>
    </motion.div>
  );
};

const Experience = () => {
  const { t } = useTranslation();
  const entries = t("experience.entries", { returnObjects: true }) as EntryData[];
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, background: "#0a192f" }}>
      <Container maxWidth="lg" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, color: "#ccd6f6", "&::before": { content: '"03. "', color: "#64ffda", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.9em" } }}>
              {t("experience.title")}
            </Typography>
            <Box sx={{ flex: 1, height: "1px", background: "rgba(100, 255, 218, 0.15)", ml: 3, maxWidth: 300 }} />
          </Box>
        </motion.div>

        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Timeline position="alternate">
            {entries.map((entry, index) => (
              <ExperienceItem key={index} entry={entry} index={index} logo={logos[index]} />
            ))}
          </Timeline>
        </Box>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          {entries.map((entry, index) => (
            <MobileCard key={index} entry={entry} index={index} logo={logos[index]} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
