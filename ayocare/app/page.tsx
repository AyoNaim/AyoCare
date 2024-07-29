import PatientForm from "@/components/PatientForm";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
            <Image src={'/logo-full.svg'} alt="logo" width={150} height={150} />
            <PatientForm />
        </div>
      </section>
    </main>
  );
}
