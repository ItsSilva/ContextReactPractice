import { useContext } from "react";
import { NameContext } from "../contexts/NameContext";

const Header = () => {
  const { name } = useContext(NameContext);
  return (
    <header>
      {name.length === 0 ? (
        <h1>Welcome, Anonymus. I'm Header!</h1>
      ) : (
        <h1>Welcome, {name}. I'm Header!</h1>
      )}
    </header>
  );
};

export default Header;
