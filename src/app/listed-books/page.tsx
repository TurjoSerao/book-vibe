"use client";

import ListedBookCard from "@/components/shared/ListedBookCard";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import { useContext, useState } from "react";

const ListedBooks = () => {
  const { readBooks, wishlist } = useContext(BooksContext);
  const [sortBy, SetSortBy] = useState<"rating" | "pages" | "year">("rating");
  console.log(sortBy);

  const sortBooks = (books: IBook[]) => {
    const sortedBooks = [...books];

    if (sortBy === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "pages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortBy === "year") {
      sortBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }
    return sortedBooks;
  };

  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishlist = sortBooks(wishlist);

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-10 sm:py-12">
        {/* Page Header */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-emerald-600">
            Your Collection
          </p>

          <div className="flex justify-between">
            <h1 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              Listed Books
            </h1>
            <select
              defaultValue="Color scheme"
              className="select select-accent"
              value={sortBy}
              onChange={(e) =>
                SetSortBy(e.target.value as "rating" | "pages" | "year")
              }
            >
              <option disabled={true}>Sort by</option>
              <option value={"rating"}>Rating</option>
              <option value={"pages"}>Number of Pages</option>
              <option value={"year"}>Published Year</option>
            </select>
          </div>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Keep track of the books you have read and the books you want to read
            later.
          </p>
        </div>

        {/* Tabs */}
        <div className="w-full rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
          <div className="tabs tabs-border w-full">
            {/* Read Books */}
            <input
              type="radio"
              name="my_tabs_2"
              className="tab px-5 text-sm font-semibold text-slate-500 transition-colors checked:text-emerald-600 sm:text-base"
              aria-label={`Read Books (${readBooks.length})`}
              defaultChecked
            />

            <div className="tab-content border-base-300 bg-transparent px-2 pb-2 pt-8 sm:px-4">
              {readBooks.length > 0 ? (
                <div className="space-y-6">
                  {sortedReadBooks.map((book: IBook) => (
                    <ListedBookCard key={book.bookId} book={book} />
                  ))}
                </div>
              ) : (
                <EmptyState
                  title="No Read Books"
                  description="You haven't added any books to your read list yet."
                />
              )}
            </div>

            {/* Wishlist */}
            <input
              type="radio"
              name="my_tabs_2"
              className="tab px-5 text-sm font-semibold text-slate-500 transition-colors checked:text-emerald-600 sm:text-base"
              aria-label={`Wishlist (${wishlist.length})`}
            />

            <div className="tab-content border-base-300 bg-transparent px-2 pb-2 pt-8 sm:px-4">
              {wishlist.length > 0 ? (
                <div className="space-y-6">
                  {sortedWishlist.map((book: IBook) => (
                    <ListedBookCard key={book.bookId} book={book} />
                  ))}
                </div>
              ) : (
                <EmptyState
                  title="No Wishlist Books"
                  description="You haven't added any books to your wishlist yet."
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const EmptyState = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex min-h-[280px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-2xl">
        📚
      </div>

      <h3 className="text-xl font-bold text-slate-700">{title}</h3>

      <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
        {description}
      </p>
    </div>
  );
};

export default ListedBooks;
