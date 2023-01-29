import Link from "next/link";
import { Wrapper } from "./Navbar.styled";

const Navbar = () => {
  return (
    <Wrapper>
      <Link href="/">Home</Link>
      <Link href="/contact">Contact</Link>
    </Wrapper>
  );
};

export default Navbar;
