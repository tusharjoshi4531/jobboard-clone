import Card from "@/components/Card";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="m-8 flex justify-center">
      <Card className="p-8 max-w-lg">{children}</Card>
    </div>
  );
}
