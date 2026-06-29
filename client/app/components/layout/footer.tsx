import Logo from "../shared/logo";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <Logo />
            <p className="mt-3 text-xs text-muted-foreground">
              Portfolio backend for developers.
            </p>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} DevFolio. Built for developers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
