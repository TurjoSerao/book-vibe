"use client";

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import { useContext } from "react";
import { toast } from "react-toastify";

const WishlistButton = ({ book }: { book: IBook }) => {
  const { wishlist, setWishlist } = useContext(BooksContext);

  const handleAddToWishlist = () => {
    if (wishlist.some((wishlistBook) => wishlistBook.bookId === book.bookId)) {
      toast.info(`${book.bookName} is already in your wishlist`);
      return;
    }

    setWishlist([...wishlist, book]);
    toast.success(`${book.bookName} added to your wishlist`);
  };

  return (
    <button
      className="flex-1 rounded-xl border border-slate-300 px-6 py-3.5 font-semibold text-slate-700 transition-all hover:border-emerald-600 hover:text-emerald-600"
      onClick={handleAddToWishlist}
    >
      Add to Wishlist
    </button>
  );
};

export default WishlistButton;
