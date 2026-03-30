import { Box, Container, Typography, Paper, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

interface AwardEntry { title: string; issuer: string; year: string; description: string; }

const Awards = () => {
  const { t } = useTranslation();
  const entries = t("awards.entries", { returnObjects: true }) as AwardEntry[];
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, background: "#112240" }}>
      <Container maxWidth="lg" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, color: "#ccd6f6", "&::before": { content: '"06. "', color: "#64ffda", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.9em" } }}>
              {t("awards.title")}
            </Typography>
            <Box sx={{ flex: 1, height: "1px", background: "rgba(100, 255, 218, 0.15)", ml: 3, maxWidth: 300 }} />
          </Box>
        </motion.div>
        <Grid container spacing={3}>
          {entries.map((award, index) => (
            <Grid key={index} size={{ xs: 12, md: 6 }}>
              <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 * index }} style={{ height: "100%" }}>
                <Paper elevation={0} sx={{ p: 3, height: "100%", background: "rgba(10, 25, 47, 0.7)", border: "1px solid rgba(100, 255, 218, 0.1)", transition: "all 0.3s ease", "&:hover": { border: "1px solid rgba(100, 255, 218, 0.3)", transform: "translateY(-4px)" } }}>
                  <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                    <Box sx={{ p: 1, borderRadius: 1, background: "rgba(100, 255, 218, 0.1)", color: "#64ffda", mr: 2, display: "flex", flexShrink: 0 }}><EmojiEventsIcon /></Box>
                    <Box>
                      <Typography variant="h6" sx={{ color: "#ccd6f6", fontWeight: 600, fontSize: "1rem", lineHeight: 1.3 }}>{award.title}</Typography>
                      <Typography sx={{ color: "#64ffda", fontSize: "0.8rem", mt: 0.3 }}>{award.issuer}</Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2" sx={{ color: "#8892b0", fontSize: "0.8rem", fontFamily: "'JetBrains Mono', monospace", mb: 1.5 }}>{award.year}</Typography>
                  <Typography variant="body2" sx={{ color: "#8892b0", fontSize: "0.85rem", lineHeight: 1.7 }}>{award.description}</Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Awards;
