import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image src={'/logo-icon.svg'} alt="logo" width={1000} height={1000}/>
        </div>
      </section>
    </main>
  );
}
