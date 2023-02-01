import Link from "next/link";
import { NavbarWrapper } from "./Navbar.styled";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Link href="/">Home</Link>
      <Link href="/contact">Contact</Link>
    </NavbarWrapper>
  );
};

export default Navbar;
