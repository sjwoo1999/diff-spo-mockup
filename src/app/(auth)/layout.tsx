import '../globals.css';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen w-full flex bg-black">
        <div className="flex-1 bg-black" />
        <main className="relative flex flex-col items-center justify-center min-h-screen w-full max-w-[480px] bg-gradient-to-b from-[#7F5FFF] via-[#A389F4] to-[#5F2EEA] mx-auto shadow-xl">
          {children}
        </main>
        <div className="flex-1 bg-black" />
      </body>
    </html>
  );
} 