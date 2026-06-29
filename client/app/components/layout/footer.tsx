import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-primary">
                <span className="text-xs font-bold text-primary-foreground">
                  df
                </span>
              </div>
              <span className="font-semibold text-foreground">DevFolio</span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Portfolio backend for developers.
            </p>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2024 DevFolio. Built for developers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
