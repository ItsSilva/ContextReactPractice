import { useContext } from "react";
import { NameContext } from "../contexts/NameContext";

const ProfileGrandChild = () => {
  const { name } = useContext(NameContext);
  return (
    <header>
      {name.length === 0 ? (
        <p>I'm the ProfileGrandChild of the Profile, that means I'm the child of ProfileChild of Anonymous.</p>
      ) : (
        <p>I'm the ProfileGrandChild of the Profile, that means I'm the child of ProfileChild of {name}.</p>
      )}
    </header>
  );
};

export default ProfileGrandChild;
