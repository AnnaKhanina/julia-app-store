const Footer = () => {
  return (
    <footer className="text-grey p-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Магазин. Всі права захищені.</p>
      </div>
    </footer>
  );
};

export default Footer;
