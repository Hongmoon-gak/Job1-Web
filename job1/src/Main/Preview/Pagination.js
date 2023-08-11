import "./Preview.css";

function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);

  return (
    <div className="pageContainer">
      <button
        className="pageBtn"
        id="setPageBtn"
        onClick={() => setPage(page - 5)}
        disabled={page < 6}
      >
        &lt;&lt;
      </button>
      <button
        className="pageBtn"
        id="setPageBtn"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        &lt;
      </button>
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <button
            className="pageBtn"
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? "page" : null}
          >
            {i + 1}
          </button>
        ))}
      <button
        className="pageBtn"
        id="setPageBtn"
        onClick={() => setPage(page + 1)}
        disabled={page === numPages}
      >
        &gt;
      </button>
      <button
        className="pageBtn"
        id="setPageBtn"
        onClick={() => setPage(page + 5)}
        disabled={page > numPages - 5}
      >
        &gt;&gt;
      </button>
    </div>
  );
}

export default Pagination;
