import { useContext } from "react";
import BookContext from "../contexts/book";

export const useBook = () => {
  const book = useContext(BookContext);
  return book;
};
