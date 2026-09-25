import BookCard from "@/components/shared/BookCard";
import { IBook } from "@/types/books.type";
import booksData from "../../../public/booksData.json";

const BooksPage = () => {
  const books: IBook[] = booksData;

  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {books.map((book: IBook) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
