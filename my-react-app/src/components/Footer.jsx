import { useContext } from "react";
import { NameContext } from "../contexts/NameContext";

const Footer = () => {
  const { name } = useContext(NameContext);
  return (
    <footer>
      {name.length === 0 ? (
        <h1>You're on the Footer, Anonymous.</h1>
      ) : (
        <h1>You're on the Footer, {name}.</h1>
      )}
    </footer>
  );
};

export default Footer;
