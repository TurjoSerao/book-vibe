import { IBook } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface WishlistBookCardProps {
  book: IBook;
}

const WishlistBookCard = ({ book }: WishlistBookCardProps) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:flex-row">
      {" "}
      {/* Image */}{" "}
      <div className="relative h-64 w-full shrink-0 overflow-hidden bg-slate-100 sm:h-[400px] sm:w-[450px]">
        {" "}
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />{" "}
        {/* Category */}{" "}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
          {" "}
          {book.category}{" "}
        </span>{" "}
      </div>{" "}
      {/* Content */}{" "}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {" "}
        {/* Top */}{" "}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          {" "}
          <div>
            {" "}
            {/* Tags */}{" "}
            <div className="mb-2 flex flex-wrap gap-2">
              {" "}
              {book.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600"
                >
                  {" "}
                  #{tag}{" "}
                </span>
              ))}{" "}
            </div>{" "}
            {/* Book Name */}{" "}
            <h2 className="text-2xl font-bold text-slate-800 transition-colors group-hover:text-emerald-600">
              {" "}
              {book.bookName}{" "}
            </h2>{" "}
            {/* Author */}{" "}
            <p className="mt-1 text-sm text-slate-500">
              {" "}
              by{" "}
              <span className="font-medium text-slate-700">
                {" "}
                {book.author}{" "}
              </span>{" "}
            </p>{" "}
          </div>{" "}
          {/* Rating */}{" "}
          <div className="flex w-fit shrink-0 items-center gap-1 rounded-full bg-slate-900 px-3 py-1.5 text-sm font-medium text-white">
            {" "}
            <span className="text-yellow-400">★</span> {book.rating}{" "}
          </div>{" "}
        </div>{" "}
        {/* Review */}{" "}
        <p className="mt-5 line-clamp-2 text-sm leading-6 text-slate-500">
          {" "}
          {book.review}{" "}
        </p>{" "}
        {/* Details */}{" "}
        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-slate-100 py-4">
          {" "}
          <div>
            {" "}
            <p className="text-xs text-slate-400">Pages</p>{" "}
            <p className="mt-0.5 font-semibold text-slate-700">
              {" "}
              {book.totalPages}{" "}
            </p>{" "}
          </div>{" "}
          <div className="hidden h-8 w-px bg-slate-200 sm:block" />{" "}
          <div>
            {" "}
            <p className="text-xs text-slate-400">Published</p>{" "}
            <p className="mt-0.5 font-semibold text-slate-700">
              {" "}
              {book.yearOfPublishing}{" "}
            </p>{" "}
          </div>{" "}
          <div className="hidden h-8 w-px bg-slate-200 sm:block" />{" "}
          <div>
            {" "}
            <p className="text-xs text-slate-400">Publisher</p>{" "}
            <p className="mt-0.5 max-w-40 truncate font-semibold text-slate-700">
              {" "}
              {book.publisher}{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
        {/* Bottom */}{" "}
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {" "}
          <p className="text-sm text-slate-400">
            {" "}
            Book ID:{" "}
            <span className="font-medium text-slate-600">
              {" "}
              #{book.bookId}{" "}
            </span>{" "}
          </p>{" "}
          <Link
            href={`/books/${book.bookId}`}
            className="rounded-xl bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white transition-all hover:bg-emerald-600"
          >
            {" "}
            View Details →{" "}
          </Link>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default WishlistBookCard;
