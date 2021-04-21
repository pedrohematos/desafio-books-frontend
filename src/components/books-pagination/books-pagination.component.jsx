import React from "react";

import { ReactComponent as PreviousPageIcon } from "../../assets/icons/previous-page-button.svg";
import { ReactComponent as NextPageIcon } from "../../assets/icons/next-page-button.svg";

import { PaginationContainer } from "./books-pagination.styles";

import { useBook } from "../../hooks";

const BooksPagination = () => {
  const { nextPage, previousPage, books } = useBook();

  return (
    <PaginationContainer>
      <div>
        Página <b>{books?.page}</b> de <b>{books?.totalPages.toFixed(0)}</b>
      </div>
      <PreviousPageIcon
        onClick={previousPage}
        //strokeOpacity="0.4"
        style={{ cursor: "pointer" }}
      />
      <NextPageIcon onClick={nextPage} style={{ cursor: "pointer" }} />
    </PaginationContainer>
  );
};

export default BooksPagination;
