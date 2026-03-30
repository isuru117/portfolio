import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import myImage from "../../assets/images/isuru.jpg";

const About = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, background: "#0a192f" }}>
      <Container maxWidth="lg" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, color: "#ccd6f6", "&::before": { content: '"01. "', color: "#64ffda", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.9em" } }}>
              {t("about.title")}
            </Typography>
            <Box sx={{ flex: 1, height: "1px", background: "rgba(100, 255, 218, 0.15)", ml: 3, maxWidth: 300 }} />
          </Box>
        </motion.div>

        <Grid container spacing={6} alignItems="flex-start">
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
              <Typography variant="body1" sx={{ mb: 2.5 }}>{t("about.p1")}</Typography>
              <Typography variant="body1" sx={{ mb: 2.5 }}>
                {t("about.p2_prefix")}
                <Box component="span" sx={{ color: "#64ffda" }}>{t("about.p2_company")}</Box>
                {t("about.p2_suffix")}
              </Typography>
              <Typography variant="body1" sx={{ mb: 2.5 }}>
                {t("about.p3_prefix")}
                <Box component="span" sx={{ color: "#64ffda" }}>{t("about.p3_company")}</Box>
                {t("about.p3_suffix")}
              </Typography>
              <Typography variant="body1" sx={{ mb: 2.5 }}>
                {t("about.p4_prefix")}
                <Box component="span" sx={{ color: "#64ffda" }}>{t("about.p4_company")}</Box>
                {t("about.p4_suffix")}
              </Typography>
              <Typography variant="body1">{t("about.p5")}</Typography>
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }}>
              <Box sx={{ position: "relative", display: "inline-block", borderRadius: 2, overflow: "hidden", mx: "auto", "&::after": { content: '""', position: "absolute", inset: 0, borderRadius: "inherit", transition: "background 0.3s ease", zIndex: 1 }, "&:hover::after": { background: "transparent" }, "&:hover img": { filter: "grayscale(0%) brightness(1.05)", transform: "scale(1.03)" } }}>
                <Box component="img" src={myImage} alt="Isuru Edirisinghe" sx={{ display: "block", width: 270, height: 270, objectFit: "cover", filter: "grayscale(30%) brightness(0.9)", transition: "all 0.3s ease" }} />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
