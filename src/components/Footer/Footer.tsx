import { Box, Container, Typography, IconButton, Stack } from "@mui/material";
import { LinkedIn, GitHub, Email, Language } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const socials = [
    { icon: <LinkedIn />, link: "https://www.linkedin.com/in/isuru117", label: "LinkedIn" },
    { icon: <GitHub />, link: "https://github.com/isuru117", label: "GitHub" },
    { icon: <Email />, link: "mailto:isuruedirisinghe80@gmail.com", label: "Email" },
    { icon: <Language />, link: "https://isuruedirisinghe.com", label: "Website" },
  ];

  return (
    <Box component="footer" sx={{ py: 4, background: "#0a192f", borderTop: "1px solid rgba(100, 255, 218, 0.05)" }}>
      <Container maxWidth="lg">
        <Stack alignItems="center" spacing={2}>
          <Stack direction="row" spacing={1}>
            {socials.map((social) => (
              <IconButton key={social.label} component="a" href={social.link} target="_blank" rel="noopener noreferrer" aria-label={social.label} size="small" sx={{ color: "#8892b0", "&:hover": { color: "#64ffda", transform: "translateY(-3px)" }, transition: "all 0.2s ease" }}>
                {social.icon}
              </IconButton>
            ))}
          </Stack>
          <Typography variant="body2" sx={{ color: "#8892b0", fontSize: "0.75rem", fontFamily: "'JetBrains Mono', monospace", textAlign: "center" }}>
            {t("footer.builtBy")}
          </Typography>
          <Typography variant="body2" sx={{ color: "#4a5568", fontSize: "0.7rem", fontFamily: "'JetBrains Mono', monospace" }}>
            &copy; {new Date().getFullYear()}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
