import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { Box, Container, Typography, Button, IconButton, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { LinkedIn, GitHub, Email, Language } from "@mui/icons-material";
import { scroller } from "react-scroll";

const Home = () => {
  const { t, i18n } = useTranslation();
  const roles = useMemo(
    () => t("home.roles", { returnObjects: true }) as string[],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i18n.language]
  );

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showArrow, setShowArrow] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  const clearTypingTimeout = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  // Reset typing on language change
  useEffect(() => {
    clearTypingTimeout();
    setRoleIndex(0);
    setDisplayText("");
    setIsDeleting(false);
    setIsPaused(false);
  }, [roles, clearTypingTimeout]);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    if (!currentRole) return;

    if (isPaused) {
      timeoutRef.current = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000);
      return () => clearTypingTimeout();
    }

    const delay = isDeleting ? 40 : 80;

    timeoutRef.current = setTimeout(() => {
      if (!isDeleting) {
        const next = currentRole.slice(0, displayText.length + 1);
        setDisplayText(next);
        if (next.length === currentRole.length) {
          setIsPaused(true);
        }
      } else {
        const next = currentRole.slice(0, displayText.length - 1);
        setDisplayText(next);
        if (next.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, delay);

    return () => clearTypingTimeout();
  }, [displayText, isDeleting, isPaused, roleIndex, roles, clearTypingTimeout]);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY <= window.innerHeight / 3);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    scroller.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -80,
    });
  };

  const socials = [
    { icon: <LinkedIn />, link: "https://www.linkedin.com/in/isuru117", label: "LinkedIn" },
    { icon: <GitHub />, link: "https://github.com/isuru117/", label: "GitHub" },
    { icon: <Email />, link: "mailto:isuruedirisinghe80@gmail.com", label: "Email" },
    { icon: <Language />, link: "https://isuruedirisinghe.com", label: "Website" },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #0a192f 0%, #112240 50%, #0a192f 100%)",
        overflow: "hidden",
      }}
    >
      <Box sx={{ position: "absolute", top: "10%", right: "-5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(100,255,218,0.03) 0%, transparent 70%)", filter: "blur(40px)" }} />
      <Box sx={{ position: "absolute", bottom: "10%", left: "-10%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(72,198,239,0.04) 0%, transparent 70%)", filter: "blur(40px)" }} />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <Typography sx={{ color: "#64ffda", fontFamily: "'JetBrains Mono', monospace", fontSize: { xs: "0.9rem", md: "1rem" }, mb: 2 }}>
            {t("home.greeting")}
          </Typography>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
          <Typography variant="h1" sx={{ fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" }, fontWeight: 800, color: "#ccd6f6", lineHeight: 1.1, mb: 1 }}>
            {t("home.name")}
          </Typography>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.8rem" }, fontWeight: 600, mb: 3, minHeight: { xs: "2.5rem", md: "3.5rem" } }}>
            <Box component="span" sx={{ color: "#8892b0" }}>
              {t("home.rolePrefix")}
            </Box>
            <Box component="span" sx={{ background: "linear-gradient(135deg, #64ffda, #48c6ef)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {displayText}
            </Box>
            <Box component="span" sx={{ borderRight: "3px solid #64ffda", ml: 0.5, animation: "cursor-blink 1s step-end infinite" }} />
          </Typography>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}>
          <Typography variant="body1" sx={{ maxWidth: "560px", fontSize: { xs: "0.95rem", md: "1.05rem" }, mb: 4, lineHeight: 1.8 }}>
            {t("home.description")}
          </Typography>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.0 }}>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
            <Button variant="outlined" size="large" onClick={() => scrollToSection("contact")} sx={{ borderColor: "#64ffda", color: "#64ffda", px: 4, py: 1.5, fontSize: "0.9rem", "&:hover": { background: "rgba(100, 255, 218, 0.1)", borderColor: "#64ffda" } }}>
              {t("home.cta")}
            </Button>
            <Button variant="outlined" size="large" onClick={() => scrollToSection("experience")} sx={{ borderColor: "#8892b0", color: "#8892b0", px: 4, py: 1.5, fontSize: "0.9rem", "&:hover": { background: "rgba(136, 146, 176, 0.1)", borderColor: "#ccd6f6", color: "#ccd6f6" } }}>
              {t("home.viewWork")}
            </Button>
          </Stack>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.2 }}>
          <Stack direction="row" spacing={1}>
            {socials.map((social) => (
              <IconButton key={social.label} component="a" href={social.link} target="_blank" rel="noopener noreferrer" aria-label={social.label} sx={{ color: "#8892b0", "&:hover": { color: "#64ffda", transform: "translateY(-3px)" }, transition: "all 0.2s ease" }}>
                {social.icon}
              </IconButton>
            ))}
          </Stack>
        </motion.div>
      </Container>

      {showArrow && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)" }}>
          <Box onClick={() => scrollToSection("about")} sx={{ cursor: "pointer", textAlign: "center", animation: "float 2s ease-in-out infinite" }}>
            <KeyboardArrowDownIcon sx={{ fontSize: 32, color: "#64ffda" }} />
          </Box>
        </motion.div>
      )}
    </Box>
  );
};

export default Home;
