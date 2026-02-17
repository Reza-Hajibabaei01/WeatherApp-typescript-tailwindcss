import type { ReactNode } from "react";


interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="h-screen bg-linear-to-t from-black to-[#0F172A]">
      <main>{children}</main>
    </div>
  );
}

export default MainLayout;
