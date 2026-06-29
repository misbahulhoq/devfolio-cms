import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img src="/logo.svg" alt="DevFolio CMS" className="h-7" />{" "}
      <span className="text-lg font-medium">DevFolio</span>
    </Link>
  );
};

export default Logo;
