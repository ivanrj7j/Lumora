import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        ©Copyright GDG MACE. All Rights Reserved.
        <br />
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    width: "100%",
    padding: "20px 0",
    textAlign: "center",
    background: "transparent",
  },
  text: {
    fontSize: "12px",
    color: "#555",
    lineHeight: "1.6",
  },
};

export default Footer;