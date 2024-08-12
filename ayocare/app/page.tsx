import Passkey from "@/components/Passkey";
import { PatientForm } from "@/components/PatientTest";
import Image from "next/image";
import Link from "next/link"

export default function Home({ searchParams }: SearchParamProps) {
  const isAdmin = searchParams.admin === 'true';
  return (
    <main className="flex min-h-screen max-h-screen remove-scrollbar">
      {/* { isAdmin ? <Passkey /> : ''} */}
      { isAdmin && <Passkey />}
      
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
            <Image src={'/logo-full.svg'} alt="logo" width={150} height={150} />
            <PatientForm/>
            <div className="tex-14-regular mt-20 flex justify-between">
              <p className="justify-items-end text-dark-600 xl:text-left">© 2024 AyoCare</p>
              <Link href='/?admin=true' className="text-green-500">Admin</Link>
            </div>
        </div>
      </section>
      <Image src={'/onboarding-img.png'} alt="onboarding" width={1000} height={2000} className="max-w-[50%] h-screen" />
    </main>
  );
}
