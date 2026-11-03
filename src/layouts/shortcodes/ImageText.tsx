import React from "react";

function ImageText({
  image,
  title,
  alt,
  children,
}: {
  image: string;
  title: string;
  alt?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="not-prose mb-5 flex flex-col gap-4 rounded-lg border border-border p-4 sm:flex-row sm:items-center sm:gap-6 dark:border-darkmode-border">
      <img
        src={image}
        alt={alt ?? title}
        className="w-32 shrink-0 rounded-lg sm:w-40"
      />
      <div className="text-base text-text dark:text-darkmode-text [&>p]:mt-2">
        <strong className="text-text-dark dark:text-darkmode-text-dark">
          {title}
        </strong>
        {children}
      </div>
    </div>
  );
}

export default ImageText;
