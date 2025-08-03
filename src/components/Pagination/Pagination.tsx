import Pagination from "rc-pagination";
import 'rc-pagination/assets/index.css';

interface AppPaginationProps {
  total: number;
  pageSize: number;
  current: number;
  onChange: (page: number) => void;
  item: string,
}

const AppPagination: React.FC<AppPaginationProps> = ({
  total,
  pageSize,
  current,
  onChange,
  item
}) => {
  const lastPage = Math.ceil(total / pageSize);

  return (
    <div className="flex flex-col justify-center mt-4">
      <Pagination
        total={total}
        pageSize={pageSize}
        current={current}
        onChange={onChange}
        className="flex items-center space-x-2"
        prevIcon={
          <button
            disabled={current === 1}
            className={`px-3 py-1 rounded flex gap-1 flex-row-reverse transition items-center 
            ${current === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white hover:bg-black hover:text-white!"
              }`}
          >
            Previous
          </button>
        }
        nextIcon={
          <button
            disabled={current === lastPage}
            className={`px-3 py-1 rounded flex gap-2 transition  items-center 
            ${current === lastPage
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white hover:bg-black hover:text-white!"
              }`}
          >
            Next
          </button>
        }
        itemRender={(page, type, element) => {
          if (type === "page") {
            return (
              <button
                className={`px-3 py-1 rounded-md focus:outline-none transition
                ${page === current
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-black hover:text-white"
                  }`}
              >
                {page}
              </button>
            );
          }
          if (type === "jump-prev" || type === "jump-next") {
            return <span className="px-3 py-1">...</span>;
          }
          return element;
        }}
      />
      <p className="my-4 text-black">Page {current} of {total} ({pageSize} {item} shown)</p>

    </div>
  );
};

export default AppPagination;
