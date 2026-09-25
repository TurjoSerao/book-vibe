import ReadButton from "@/components/bookDetails/ReadBook";
import WishlistButton from "@/components/bookDetails/WishlistButton";
import { IBook } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";

interface IBookDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  const data = await res.json();
  return data;
};

const BookDetailPage = async ({ params }: IBookDetailsPageProps) => {
  const { id } = await params;

  const booksData = await getBooks();

  const book = booksData.find(
    (book: IBook) => String(book.bookId) === String(id),
  ) as IBook;

  if (!book) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-5">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-800">Book Not Found</h1>
          <p className="mt-2 text-slate-500">
            The book you are looking for does not exist.
          </p>

          <Link
            href="/books"
            className="mt-6 inline-block rounded-xl bg-slate-900 px-6 py-3 font-medium text-white transition hover:bg-emerald-600"
          >
            ← Back to Books
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 py-10 lg:py-14">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/books"
            className="text-sm font-medium text-slate-500 transition hover:text-emerald-600"
          >
            ← Back to Books
          </Link>
        </div>

        {/* Main Book Section */}
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="grid lg:grid-cols-[420px_1fr]">
            {/* Book Image */}
            <div className="relative min-h-[500px] overflow-hidden bg-slate-100 lg:min-h-[650px]">
              <Image
                src={book.image}
                alt={book.bookName}
                fill
                priority
                className="object-cover"
              />

              {/* Image Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-6">
                <span className="inline-flex rounded-full bg-white/90 px-4 py-1.5 text-sm font-semibold text-slate-700 backdrop-blur">
                  {book.category}
                </span>
              </div>

              {/* Rating */}
              <div className="absolute right-5 top-5 flex items-center gap-1 rounded-full bg-slate-900/85 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur">
                <span className="text-yellow-400">★</span>
                {book.rating}
              </div>
            </div>

            {/* Book Content */}
            <div className="flex flex-col p-6 sm:p-8 lg:p-12">
              {/* Category */}
              <div className="mb-4">
                <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
                  {book.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="max-w-3xl text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                {book.bookName}
              </h1>

              {/* Author */}
              <p className="mt-4 text-lg text-slate-500">
                Written by{" "}
                <span className="font-semibold text-slate-800">
                  {book.author}
                </span>
              </p>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {book.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Review */}
              <div className="mt-8">
                <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-400">
                  Review
                </h2>

                <p className="max-w-3xl text-base leading-7 text-slate-600">
                  {book.review}
                </p>
              </div>

              {/* Book Information */}
              <div className="my-8 grid grid-cols-2 gap-4 border-y border-slate-100 py-6 sm:grid-cols-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Pages
                  </p>
                  <p className="mt-1 text-lg font-bold text-slate-800">
                    {book.totalPages}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Published
                  </p>
                  <p className="mt-1 text-lg font-bold text-slate-800">
                    {book.yearOfPublishing}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Publisher
                  </p>
                  <p className="mt-1 truncate text-lg font-bold text-slate-800">
                    {book.publisher}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Rating
                  </p>
                  <p className="mt-1 text-lg font-bold text-slate-800">
                    ⭐ {book.rating}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-auto flex flex-col gap-3 sm:flex-row">
                <ReadButton book={book} />

                <WishlistButton book={book} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default BookDetailPage;
