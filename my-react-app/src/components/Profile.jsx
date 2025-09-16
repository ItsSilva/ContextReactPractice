import { useContext } from "react";
import { NameContext } from "../contexts/NameContext";

const Profile = () => {
  const { name } = useContext(NameContext);
  return (
    <header>
      {name.length === 0 ? (
        <p>Profile of <b>Anonymous</b>.</p>
      ) : (
        <p>Profile of <b>{name}</b>.</p>
      )}
    </header>
  );
};

export default Profile;
