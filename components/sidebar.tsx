"use client";
import { cn } from "@/lib/utils";
import { ClipboardList, LayoutListIcon } from "lucide-react";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Project Overview",
    href: "/project-overview",
    icon: LayoutListIcon,
    color: "text-sky-500",
  },
  {
    label: "Task Management",
    href: "/task-management",
    icon: ClipboardList,
    color: "text-violet-500",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 h-full flex flex-col bg-white">
      <div className="px-3 py-2 flex-1">
        {/* <Link href={"/dashboard"} className="flex items-center pl-3 mb-14">
          <div className="relative w-16 h-16 mr-4 ">
            <Image fill alt="logo" src={"/logo.png"} className="bg-white" />
          </div>
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            Talent AI
          </h1>
        </Link> */}
        {/* side bar routes */}
        <div className="space-y-1">
          {routes.map((route, index) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "flex justify-start hover:text-white hover:bg-black rounded-lg text-sm cursor-pointer group p-3",
                pathname === route.href
                  ? "text-black bg-black/10"
                  : "text-zinc-500"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("w-5 h-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
