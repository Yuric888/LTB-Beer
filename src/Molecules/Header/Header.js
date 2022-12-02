import Located from "../../Atoms/Located/Located";
import Logo from "../../Atoms/Logo/Logo";
import Navbar from "../../Atoms/Navbar/Navbar";

const Header = () => {
  return (
    <div>
      <Logo />
      <Located />
      <Navbar />
    </div>
  );
};

export default Header;
