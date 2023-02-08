import Link from "next/link";
import { NavbarWrapper } from "./Navbar.styled";
import {ROUTES} from '@/constants/routes'

const Navbar = () => {
  return (
    <NavbarWrapper>
      {ROUTES.map(({name, path}) => (
        <Link href={path}>{name}</Link>
      ))}
    </NavbarWrapper>
  );
};

export default Navbar;
