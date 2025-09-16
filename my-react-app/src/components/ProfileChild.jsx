import { useContext } from "react";
import { NameContext } from "../contexts/NameContext";

const ProfileChild = () => {
  const { name } = useContext(NameContext);
  return (
    <header>
      {name.length === 0 ? (
        <p>I'm the ProfileChild of the Profile of <b>Anonymous</b>.</p>
      ) : (
        <p>I'm the ProfileChild of the Profile of <b>{name}</b>.</p>
      )}
    </header>
  );
};

export default ProfileChild;
