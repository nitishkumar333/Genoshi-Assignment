import React from "react";

export default function GraphLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center h-full bg-gray-900 ">
        {children}
    </div>
  )
}
