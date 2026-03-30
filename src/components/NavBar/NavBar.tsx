import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItemText,
  Divider,
  Button,
  ListItemButton,
  Box,
  Container,
  Menu,
  MenuItem,
} from "@mui/material";
import { scroller } from "react-scroll";
import { useTranslation } from "react-i18next";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import TranslateIcon from "@mui/icons-material/Translate";

const navKeys = ["about", "skills", "experience", "projects", "awards", "contact"] as const;

const langOptions = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  // { code: "si", label: "සිං" },
];

const scrollToSection = (sectionId: string) => {
  scroller.scrollTo(sectionId, {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
    offset: -80,
  });
};

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langAnchor, setLangAnchor] = useState<null | HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setDrawerOpen(false);
  };

  const handleLangChange = (code: string) => {
    i18n.changeLanguage(code);
    setLangAnchor(null);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: scrolled ? "rgba(10, 25, 47, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(100, 255, 218, 0.1)" : "none",
        transition: "all 0.3s ease",
        py: scrolled ? 0 : 1,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Language switcher (left corner) */}
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <IconButton
              onClick={(e) => setLangAnchor(e.currentTarget)}
              sx={{ color: "#64ffda", p: 0.5 }}
              size="small"
            >
              <TranslateIcon fontSize="small" />
              <Typography
                sx={{
                  ml: 0.5,
                  fontSize: "0.75rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "#64ffda",
                }}
              >
                {i18n.language.toUpperCase()}
              </Typography>
            </IconButton>
          </Box>
          <Menu
            anchorEl={langAnchor}
            open={Boolean(langAnchor)}
            onClose={() => setLangAnchor(null)}
            PaperProps={{
              sx: {
                background: "rgba(10, 25, 47, 0.95)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(100, 255, 218, 0.15)",
              },
            }}
          >
            {langOptions.map((lang) => (
              <MenuItem
                key={lang.code}
                onClick={() => handleLangChange(lang.code)}
                selected={i18n.language === lang.code}
                sx={{
                  color: i18n.language === lang.code ? "#64ffda" : "#ccd6f6",
                  fontSize: "0.85rem",
                  "&:hover": { background: "rgba(100, 255, 218, 0.08)" },
                  "&.Mui-selected": {
                    background: "rgba(100, 255, 218, 0.1)",
                    "&:hover": { background: "rgba(100, 255, 218, 0.15)" },
                  },
                }}
              >
                {lang.label}
              </MenuItem>
            ))}
          </Menu>

          {/* Mobile hamburger */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ color: "#64ffda" }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          {/* Desktop nav */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 0.5,
            }}
          >
            {navKeys.map((key, index) => (
              <Button
                key={key}
                onClick={() => scrollToSection(key)}
                sx={{
                  color: "#ccd6f6",
                  fontSize: "0.85rem",
                  fontWeight: 400,
                  textTransform: "none",
                  "&:hover": { color: "#64ffda", background: "transparent" },
                  "&::before": {
                    content: `"0${index + 1}."`,
                    color: "#64ffda",
                    fontSize: "0.75rem",
                    marginRight: "4px",
                  },
                }}
              >
                {t(`nav.${key}`)}
              </Button>
            ))}
            <Button
              variant="outlined"
              href="https://github.com/isuru117/portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                borderColor: "#64ffda",
                color: "#64ffda",
                ml: 1,
                px: 2,
                fontSize: "0.8rem",
                textTransform: "none",
                "&:hover": {
                  background: "rgba(100, 255, 218, 0.1)",
                  borderColor: "#64ffda",
                },
              }}
            >
              {t("nav.source")}
            </Button>
          </Box>
        </Toolbar>
      </Container>
      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            background: "rgba(10, 25, 47, 0.95)",
            backdropFilter: "blur(20px)",
            width: 280,
            pt: 2,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", px: 2, pb: 1 }}>
          <IconButton onClick={toggleDrawer(false)} sx={{ color: "#64ffda" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navKeys.map((key, index) => (
            <ListItemButton
              key={key}
              onClick={() => handleNavClick(key)}
              sx={{
                py: 2,
                px: 4,
                "&:hover": { background: "rgba(100, 255, 218, 0.05)" },
              }}
            >
              <ListItemText
                primary={
                  <Typography sx={{ color: "#ccd6f6", fontSize: "1rem" }}>
                    <Box component="span" sx={{ color: "#64ffda", mr: 1, fontSize: "0.85rem" }}>
                      0{index + 1}.
                    </Box>
                    {t(`nav.${key}`)}
                  </Typography>
                }
              />
            </ListItemButton>
          ))}
        </List>
        <Divider sx={{ borderColor: "rgba(100, 255, 218, 0.1)", mx: 3 }} />
      </Drawer>
    </AppBar>
  );
};

export default NavBar;
