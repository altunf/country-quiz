import { QuizContextProvider } from "@/context";
import "./style.css";

export const metadata = {
  title: "Country quiz app",
  description: "Generated by firat altun",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="main-div">
        <QuizContextProvider>{children}</QuizContextProvider>
      </body>
    </html>
  );
}
