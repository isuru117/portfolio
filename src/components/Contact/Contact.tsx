import { useState } from "react";
import { Container, TextField, Button, Typography, Box, Snackbar, Alert } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import SendIcon from "@mui/icons-material/Send";
import { submitContactForm } from "../../services/ApiService";

const Contact = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [snackbar, setSnackbar] = useState<{ open: boolean; severity: "success" | "error"; message: string }>({ open: false, severity: "success", message: "" });
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSending(true);
    const submitted = await submitContactForm(name, email, message);
    if (submitted) {
      setName(""); setEmail(""); setMessage("");
      setSnackbar({ open: true, severity: "success", message: t("contact.success") });
    } else {
      setSnackbar({ open: true, severity: "error", message: t("contact.error") });
    }
    setSending(false);
  };

  const inputSx = {
    "& .MuiOutlinedInput-root": { color: "#ccd6f6", "& fieldset": { borderColor: "rgba(100, 255, 218, 0.2)" }, "&:hover fieldset": { borderColor: "rgba(100, 255, 218, 0.4)" }, "&.Mui-focused fieldset": { borderColor: "#64ffda" } },
    "& .MuiInputLabel-root": { color: "#8892b0" },
    "& .MuiInputLabel-root.Mui-focused": { color: "#64ffda" },
  };

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, background: "#112240" }}>
      <Container maxWidth="sm" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <Box sx={{ textAlign: "center", mb: 5 }}>
            <Typography sx={{ color: "#64ffda", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.9rem", mb: 1.5 }}>{t("contact.number")}</Typography>
            <Typography variant="h3" sx={{ fontWeight: 700, color: "#ccd6f6", mb: 2, fontSize: { xs: "2rem", md: "2.5rem" } }}>{t("contact.title")}</Typography>
            <Typography variant="body1" sx={{ maxWidth: 450, mx: "auto", mb: 4 }}>{t("contact.description")}</Typography>
          </Box>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
            <TextField label={t("contact.name")} fullWidth value={name} onChange={(e) => setName(e.target.value)} size="small" required sx={inputSx} />
            <TextField label={t("contact.email")} type="email" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} size="small" required sx={inputSx} />
            <TextField label={t("contact.message")} fullWidth multiline minRows={5} value={message} onChange={(e) => setMessage(e.target.value)} size="small" sx={inputSx} />
            <Button type="submit" variant="outlined" size="large" disabled={sending} endIcon={<SendIcon />} sx={{ borderColor: "#64ffda", color: "#64ffda", py: 1.5, fontSize: "0.9rem", alignSelf: "center", px: 5, "&:hover": { background: "rgba(100, 255, 218, 0.1)", borderColor: "#64ffda" }, "&.Mui-disabled": { borderColor: "rgba(100, 255, 218, 0.3)", color: "rgba(100, 255, 218, 0.3)" } }}>
              {sending ? t("contact.sending") : t("contact.send")}
            </Button>
          </Box>
        </motion.div>
        <Snackbar open={snackbar.open} autoHideDuration={5000} onClose={() => setSnackbar((s) => ({ ...s, open: false }))} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
          <Alert severity={snackbar.severity} variant="filled" onClose={() => setSnackbar((s) => ({ ...s, open: false }))}>{snackbar.message}</Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact;
