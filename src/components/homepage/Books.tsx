import { IBook } from "@/types/books.type";
import BookCard from "@/components/shared/BookCard";
import booksData from "../../../public/booksData.json";

const Books = () => {
  const books: IBook[] = booksData;

  return (
    <section className="container mx-auto my-17 px-4">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        {books.slice(0, 6).map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;
