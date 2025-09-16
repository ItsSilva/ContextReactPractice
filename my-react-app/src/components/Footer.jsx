import { useContext } from "react";
import { NameContext } from "../contexts/NameContext";

const Footer = () => {
  const { name } = useContext(NameContext);
  return (
    <footer>
      {name.length === 0 ? (
        <h1>You're on the Footer, <b>Anonymous</b>.</h1>
      ) : (
        <h1>You're on the Footer, <b>{name}</b>.</h1>
      )}
    </footer>
  );
};

export default Footer;
