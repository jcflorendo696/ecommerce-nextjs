import Header from '@/components/shared/header';
import Footer from '@/components/footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
        ROOT
        <Header></Header>
        <main className="flex-1 wrapper">
            {children}
        </main>
        <Footer></Footer>
    </div>
  );
}
