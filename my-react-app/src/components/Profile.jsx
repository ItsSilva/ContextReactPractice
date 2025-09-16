import { useContext } from "react";
import { NameContext } from "../contexts/NameContext";

const Profile = () => {
  const { name } = useContext(NameContext);
  return (
    <header>
      {name.length === 0 ? (
        <p>Profile of Anonymous.</p>
      ) : (
        <p>Profile of {name}.</p>
      )}
    </header>
  );
};

export default Profile;
