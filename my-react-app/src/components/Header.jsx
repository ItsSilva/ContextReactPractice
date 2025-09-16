import { useContext } from "react";
import { NameContext } from "../contexts/NameContext";

const Header = () => {
  const { name } = useContext(NameContext);
  return (
    <header>
      {name.length === 0 ? (
        <h1>Welcome, <b>Anonymous</b>. I'm Header!</h1>
      ) : (
        <h1>Welcome, <b>{name}</b>. I'm Header!</h1>
      )}
    </header>
  );
};

export default Header;
