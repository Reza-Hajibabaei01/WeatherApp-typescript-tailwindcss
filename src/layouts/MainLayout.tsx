import type { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="h-screen bg-[#0F0F0F] py-2">
      <main>{children}</main>
    </div>
  );
}

export default MainLayout;
