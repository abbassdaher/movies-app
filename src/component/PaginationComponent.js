import Pagination from "react-bootstrap/Pagination";

function PaginationComponent({ clickPaginationHandler }) {
  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item value={1} onClick={clickPaginationHandler}>1</Pagination.Item>
      <Pagination.Item value={2}>{2}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item active value={20}>
        {20}
      </Pagination.Item>

      <Pagination.Next onClick={clickPaginationHandler} />
      <Pagination.Last />
    </Pagination>
  );
}

export default PaginationComponent;
