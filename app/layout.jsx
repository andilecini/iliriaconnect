import './globals.css';

export const metadata = {
  title: 'IliriaConnect.com',
  description: 'Growth Marketing for Dental Clinics, Health Clinics and Medical Tourism in Albania',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
