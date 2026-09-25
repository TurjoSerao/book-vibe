"use client";
import BookCard from "@/components/shared/BookCard";
import ListedBookCard from "@/components/shared/ListedBookCard";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";

import { useContext } from "react";

const ListedBooks = () => {
  const { readBooks, wishlist } = useContext(BooksContext);

  console.log(readBooks, wishlist, "readBooks");
  return (
    <div className="container mx-auto  px-4 py-10">
      <h2>Listed Books</h2>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-border">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
        />
        <div className="tab-content border-base-300 bg-base-100 p-10 space-y-10">
          {readBooks.length > 0 ? (
            readBooks.map((book: IBook) => {
              return <ListedBookCard key={book.bookId} book={book} />;
            })
          ) : (
            <p>No read books found</p>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Read Books (${wishlist.length})`}
          defaultChecked
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {wishlist.length > 0 ? (
            wishlist.map((book: IBook) => {
              return (
                <ListedBookCard key={book.bookId} book={book}></ListedBookCard>
              );
            })
          ) : (
            <p>No wishlist book found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
