import type { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="bg-[#0F0F0F] overflow-hidden px-10 pb-4">
      <main>{children}</main>
    </div>
  );
}

export default MainLayout;
