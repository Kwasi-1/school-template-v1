import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-md min-h-screen p-4">
      <h2 className="text-xl font-bold text-center mb-4">Admin Panel</h2>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link href="/" className="block p-2 rounded hover:bg-gray-200">
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/students"
              className="block p-2 rounded hover:bg-gray-200"
            >
              Students
            </Link>
          </li>
          <li>
            <Link
              href="/payments"
              className="block p-2 rounded hover:bg-gray-200"
            >
              Payments
            </Link>
          </li>
          <li>
            <Link
              href="/reminders"
              className="block p-2 rounded hover:bg-gray-200"
            >
              Reminders
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
