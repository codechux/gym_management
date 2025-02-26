import { ThemeToggle } from "@/components/theme-toggle";
import { MainNav } from "@/components/main-nav";
import { UserNav } from "@/components/user-nav";

export function Header() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4 sm:px-6">
        <MainNav />
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  );
}