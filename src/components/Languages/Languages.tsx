import { Box, Container, Typography, Paper, Grid, LinearProgress } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import TranslateIcon from "@mui/icons-material/Translate";

const progressValues = [90, 30, 100];

interface LangEntry { name: string; level: string; detail: string; }

const Languages = () => {
  const { t } = useTranslation();
  const entries = t("languages.entries", { returnObjects: true }) as LangEntry[];
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, background: "#0a192f" }}>
      <Container maxWidth="lg" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, color: "#ccd6f6", "&::before": { content: '"07. "', color: "#64ffda", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.9em" } }}>
              {t("languages.title")}
            </Typography>
            <Box sx={{ flex: 1, height: "1px", background: "rgba(100, 255, 218, 0.15)", ml: 3, maxWidth: 300 }} />
          </Box>
        </motion.div>
        <Grid container spacing={3}>
          {entries.map((lang, index) => (
            <Grid key={lang.name} size={{ xs: 12, sm: 4 }}>
              <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.15 * index }} style={{ height: "100%" }}>
                <Paper elevation={0} sx={{ p: 3, height: "100%", background: "rgba(17, 34, 64, 0.8)", border: "1px solid rgba(100, 255, 218, 0.1)", transition: "all 0.3s ease", "&:hover": { border: "1px solid rgba(100, 255, 218, 0.3)", transform: "translateY(-4px)" } }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <TranslateIcon sx={{ color: "#64ffda", mr: 1.5, fontSize: 20 }} />
                    <Typography variant="h6" sx={{ color: "#ccd6f6", fontWeight: 600, fontSize: "1rem" }}>{lang.name}</Typography>
                  </Box>
                  <Typography sx={{ color: "#8892b0", fontSize: "0.85rem", mb: 0.5 }}>{lang.level}</Typography>
                  <Typography sx={{ color: "#64ffda", fontSize: "0.75rem", fontFamily: "'JetBrains Mono', monospace", mb: 1.5, visibility: lang.detail ? "visible" : "hidden" }}>
                    {lang.detail || "\u00A0"}
                  </Typography>
                  <LinearProgress variant="determinate" value={progressValues[index]} sx={{ mt: 0, height: 6, borderRadius: 3, backgroundColor: "rgba(100, 255, 218, 0.1)", "& .MuiLinearProgress-bar": { borderRadius: 3, background: "linear-gradient(90deg, #64ffda, #48c6ef)" } }} />
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Languages;
