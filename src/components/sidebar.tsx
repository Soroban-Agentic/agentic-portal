"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Gamepad2, Bot, Settings } from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/control-room", label: "Control Room", icon: Gamepad2 },
  { href: "/agents", label: "Agents", icon: Bot, disabled: true },
  { href: "/settings", label: "Settings", icon: Settings, disabled: true },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 border-r bg-sidebar flex flex-col shrink-0">
      <div className="flex items-center gap-2 px-5 h-14 border-b">
        <div className="h-7 w-7 rounded-full bg-primary flex items-center justify-center">
          <span className="text-xs font-bold text-primary-foreground">A</span>
        </div>
        <span className="font-semibold">Agentic Portal</span>
      </div>
      <nav className="flex-1 p-3 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                item.disabled
                  ? "text-muted-foreground/40 cursor-not-allowed"
                  : pathname === item.href
                    ? "bg-accent text-accent-foreground font-medium"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="p-3 border-t text-xs text-muted-foreground">
        Stellar Testnet
      </div>
    </aside>
  );
}
