"use client";

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({ book }: { book: IBook }) => {
  const { readBooks, setReadBooks } = useContext(BooksContext);

  const handelReadBook = () => {
    console.log("Read Book button", book);
    setReadBooks([...readBooks, book]);
    toast.success(`You have read ${book.bookName}`);
  };
  return (
    <button
      className="flex-1 rounded-xl bg-slate-900 px-6 py-3.5 font-semibold text-white transition-all hover:bg-emerald-600"
      onClick={() => handelReadBook()}
    >
      Read Book →
    </button>
  );
};

export default ReadButton;
