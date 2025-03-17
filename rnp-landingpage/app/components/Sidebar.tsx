"use client"

import { usePathname, useRouter } from "next/navigation";
import { Home, Upload, Search, BookOpen, MessageSquare } from "lucide-react";
import { auth } from "@/lib/firebaseconfig";

interface SidebarItem {
  name: string;
  path: string;
  icon: React.ReactNode;
}

const sidebarItems: SidebarItem[] = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <Home size={20} />
  },
  {
    name: "Upload de Incidentes",
    path: "/admin/upload",
    icon: <Upload size={20} />
  },
  {
    name: "Consulta à Base",
    path: "/admin/search",
    icon: <Search size={20} />
  },
  {
    name: "Geração de Q&A",
    path: "/admin/questions",
    icon: <BookOpen size={20} />
  },
  {
    name: "Chat Contextual",
    path: "/admin/generate",
    icon: <MessageSquare size={20} />
  }
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await auth.signOut();
    router.push("/admin/login");
  };

  return (
    <div className="h-screen w-64 bg-white border-r flex flex-col">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold text-gray-800">Painel Admin</h2>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.path}>
              <button
                onClick={() => router.push(item.path)}
                className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                  pathname === item.path
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
        >
          <span>Sair</span>
        </button>
      </div>
    </div>
  );
} 