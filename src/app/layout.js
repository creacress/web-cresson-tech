// layout.js
import Header from "./component/Header/Header";
import "./globals.css";

export const metadata = {
  title: "Cresson Tech",
  description: "Solutions technologiques innovantes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
