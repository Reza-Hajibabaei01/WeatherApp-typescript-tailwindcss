import type { ReactNode } from "react";


interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="">
      <main>{children}</main>
    </div>
  );
}

export default MainLayout;
