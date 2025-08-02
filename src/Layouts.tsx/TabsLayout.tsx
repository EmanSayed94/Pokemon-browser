import { Link, Outlet, useLocation } from "react-router-dom";
export default function LayoutWithTabs() {
  const { pathname } = useLocation();

  const isPaginationView=pathname.endsWith("pagination");
  const isLoadMoreView=pathname.endsWith("load-more");

  return (
    <div className={`p-2 ${isPaginationView?'bg-gray-300':'bg-green-100'} h-screen`}>
      <header>
        <div className="flex items-center justify-center gap-2">
          <h1 className="text-xl font-bold mb-4">Pokédex Browser</h1>
        </div>
        <div>
          <TabLink to="pagination" active={isPaginationView}>
            Pagination
          </TabLink>
          <TabLink to="load-more" active={isLoadMoreView}>
            Load More
          </TabLink>
        </div>
      </header>

      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}

function TabLink({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className={`px-4 py-2 border-b-2 ${active ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500"} hover:text-blue-600`}
    >
      {children}
    </Link>
  );
}
