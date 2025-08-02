import { Link } from "react-router-dom";

export default function TabLink({
  to,
  active,
  children,
}: {
  to: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className={`px-4 py-2 rounded-md font-medium transition-colors duration-300 ease-in-out
        ${active
          ? "bg-black text-white hover:bg-[#1e1d1d]"
          : "bg-white text-black border border-gray-300 hover:bg-[#f5f5f5]"
        }`}
    >
      {children}
    </Link>
  );
}
