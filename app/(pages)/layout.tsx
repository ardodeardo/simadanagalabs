import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header></Header>
      <main className="w-full bg-[#FEFEFE] max-w-[393px] mx-auto">
        {children}
      </main>
      <Footer></Footer>
    </>
  );
}
