// components/Navbar.js
import Logo from "./Logo";

function Navbar({ children }) {
  return (
    <nav className="bg-blue-500 py-3 px-8 flex items-center justify-between">
      <Logo />
      {children}
    </nav>
  );
}

export default Navbar;
