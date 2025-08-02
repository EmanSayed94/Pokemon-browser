import { Link, Outlet, useLocation } from "react-router-dom";
import TabLink from "../components/TabLink/TabLink";

export default function LayoutWithTabs() {
  const { pathname } = useLocation();

  const isPaginationView = pathname.endsWith("pagination");
  const isLoadMoreView = pathname.endsWith("load-more");

  return (
    <div
      className={`p-2 min-h-screen transition-colors duration-500 ease-in-out ${isPaginationView ? "bg-gray-300" : "bg-green-100"
        }`}
    >
      <header>
        <div className="flex items-center justify-center gap-2">
          <h1 className="text-xl font-bold mb-4">Pokédex Browser</h1>
        </div>
        <div className="flex items-center justify-center gap-4">
          <TabLink to="pagination" active={isPaginationView}>
            Pagination
          </TabLink>
          <TabLink to="load-more" active={isLoadMoreView}>
            Load More
          </TabLink>
        </div>
      </header>

      <main className="p-4">
        <div className="container mx-auto md:px-4 lg:px-28">

          <Outlet />
        </div>
      </main>
    </div>
  );
}
