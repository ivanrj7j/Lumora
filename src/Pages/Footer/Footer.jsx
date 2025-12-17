import React from "react";
import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer style={styles.footer} className="bg-white/30 dark:bg-neutral-900/40 backdrop-blur-md">
      <div style={styles.inner}>
        <div style={styles.socialContainer}>
          <a
            href="https://www.instagram.com/dsc_mace/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
            style={styles.socialLink}
          >
            <Instagram size={18} />
          </a>

          <a
            href="https://www.linkedin.com/company/gdgmaceoncampus/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            style={styles.socialLink}
          >
            <Linkedin size={18} />
          </a>
        </div>

        <p style={styles.text}>©Copyright GDG MACE. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    width: "100%",
    padding: "24px 0",
    textAlign: "center",

  },
  inner: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 16px",
  },
  socialContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    marginBottom: "12px",
  },
  socialLink: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    borderRadius: "9999px",
    background: "rgba(255,255,255,0.9)",
    color: "#111827",
    textDecoration: "none",
    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
    transition: "transform .15s ease, box-shadow .15s ease",
  },
  text: {
    fontSize: "12px",
    color: "#555",
    lineHeight: "1.6",
  },
};

export default Footer;