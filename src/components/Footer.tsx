const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-8 px-4 text-center">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Devakkumar S N. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
