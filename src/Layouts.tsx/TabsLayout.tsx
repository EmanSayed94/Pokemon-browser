import { Outlet, useLocation } from "react-router-dom";
import TabLink from "../components/TabLink/TabLink";

export default function LayoutWithTabs() {
  const { pathname } = useLocation();

  const isPaginationView = pathname.endsWith("pagination");
  const isLoadMoreView = pathname.endsWith("load-more");

  return (
    <div
      className={`p-2 py-12 min-h-screen transition-colors duration-500 ease-in-out ${isPaginationView ? "bg-gray-300" : "bg-green-100"
        }`}
    >
      <header>
        <div className="flex flex-col items-center justify-center gap-2 mb-4">
          <h1 className="text-2xl font-bold mb-1">Pokédex Browser</h1>
          <p>Discover and explore Pokemon with page controls</p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <TabLink to="pagination" active={isPaginationView}>
            Pagination
          </TabLink>
          <TabLink to="load-more" active={isLoadMoreView}>
            Infinite Scroll
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
