"use client";

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import React, { useContext } from "react";

import {
  Bar,
  BarChart,
  BarShapeProps,
  CartesianGrid,
  Label,
  LabelList,
  LabelProps,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const colors = [
  "#10b981",
  "#14b8a6",
  "#06b6d4",
  "#0ea5e9",
  "#6366f1",
  "#8b5cf6",
  "#f59e0b",
];

const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}
    C${x + width / 3},${y + height}
    ${x + width / 2},${y + height / 3}
    ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3}
    ${x + (2 * width) / 3},${y + height}
    ${x + width},${y + height}
    Z`;
};

const TriangleBar = (props: BarShapeProps) => {
  const { x, y, width, height, index } = props;

  const color = colors[(index ?? 0) % colors.length];

  return (
    <path
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      strokeWidth={props.isActive ? 4 : 0}
      stroke={color}
      fill={color}
      style={{
        transition: "stroke-width 0.3s ease-out",
      }}
    />
  );
};

const CustomColorLabel = (props: LabelProps) => {
  const fill = colors[(props.index ?? 0) % colors.length];

  return <Label {...props} fill={fill} />;
};

const ReadBooks = () => {
  const { readBooks } = useContext(BooksContext);

  const data = readBooks.map((book: IBook) => ({
    name: book.bookName,
    pages: book.totalPages,
  }));

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-10 sm:py-12">
        {/* Header */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-emerald-600">
            Reading Progress
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            Read Books
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Explore the number of pages in the books you have completed.
          </p>
        </div>

        {/* Chart Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          {/* Card Header */}
          <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-bold text-slate-800">
                Pages Read by Book
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Total pages for each completed book
              </p>
            </div>

            <div className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-600">
              {readBooks.length} {readBooks.length === 1 ? "Book" : "Books"}
            </div>
          </div>

          {/* Chart */}
          {readBooks.length > 0 ? (
            <div className="w-full overflow-x-auto">
              <div className="min-w-150">
                <BarChart
                  style={{
                    width: "100%",
                    maxWidth: "100%",
                    height: 450,
                  }}
                  responsive
                  data={data}
                  margin={{
                    top: 30,
                    right: 20,
                    left: 10,
                    bottom: 60,
                  }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#e2e8f0"
                  />

                  <Tooltip
                    cursor={{
                      fill: "#f1f5f9",
                      fillOpacity: 0.7,
                    }}
                    contentStyle={{
                      borderRadius: "12px",
                      border: "1px solid #e2e8f0",
                      boxShadow: "0 4px 12px rgba(15, 23, 42, 0.08)",
                    }}
                    labelStyle={{
                      color: "#334155",
                      fontWeight: 600,
                    }}
                  />

                  <XAxis
                    dataKey="name"
                    tick={{
                      fill: "#64748b",
                      fontSize: 12,
                    }}
                    tickLine={false}
                    axisLine={{
                      stroke: "#cbd5e1",
                    }}
                    angle={-25}
                    textAnchor="end"
                    interval={0}
                  />

                  <YAxis
                    width={50}
                    tick={{
                      fill: "#64748b",
                      fontSize: 12,
                    }}
                    tickLine={false}
                    axisLine={false}
                  />

                  <Bar
                    dataKey="pages"
                    shape={TriangleBar}
                    activeBar
                    radius={[8, 8, 0, 0]}
                  >
                    <LabelList
                      dataKey="pages"
                      content={CustomColorLabel}
                      position="top"
                    />
                  </Bar>
                </BarChart>
              </div>
            </div>
          ) : (
            <div className="flex min-h-87.5 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-2xl">
                📚
              </div>

              <h3 className="text-xl font-bold text-slate-700">
                No Read Books Yet
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                Add some books to your read list and your reading statistics
                will appear here.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default ReadBooks;
