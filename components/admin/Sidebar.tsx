import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Dashboard", path: "/admin" },
  { name: "Students", path: "/admin/students" },
  { name: "Payments", path: "/admin/payments" },
  { name: "Reminders", path: "/admin/reminders" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white shadow-md min-h-screen p-4">
      <h2 className="text-xl font-bold text-center mb-4">Admin Panel</h2>
      <nav>
        <ul className="space-y-2">
          {menuItems.map(({ name, path }) => (
            <li key={path}>
              <Link
                href={path}
                className={`block p-2 rounded transition ${
                  pathname === path
                    ? "bg-gray-300 font-semibold"
                    : "hover:bg-gray-200"
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
