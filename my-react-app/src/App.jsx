import { NameProvider } from "./contexts/NameContext";
import Input from "./components/Input";
import Header from "./components/Header";
import Profile from "./components/Profile";
import ProfileChild from "./components/ProfileChild";
import ProfileGrandChild from "./components/ProfileGrandChild";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <NameProvider>
      <Header />
      <Input />
      <Profile />
      <ProfileChild />
      <ProfileGrandChild />
      <Footer />
    </NameProvider>
  );
}

export default App;
