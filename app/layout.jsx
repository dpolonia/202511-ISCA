import './globals.css';

export const metadata = {
  title: 'Apresentação Daniel Ferreira Polónia',
  description: 'Slides interactivos para candidatura ao ISCA.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className="min-h-screen bg-white text-gray-900">{children}</body>
    </html>
  );
}
