import RegisterForm from "@/components/RegisterForm";
import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen max-h-screen remove-scrollbar">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
            <Image src={'/logo-full.svg'} alt="logo" width={150} height={150} />
            <RegisterForm /> 
            <div className="tex-14-regular mt-20 flex justify-between">
              <p className="justify-items-end text-dark-600 xl:text-left">© 2024 AyoCare</p>
              <Link href='/?admin=true' className="text-green-500">Admin</Link>
            </div>
        </div>
      </section>
      <Image src={'/register-img.png'} alt="register" width={1000} height={1000} className="max-w-[390px]" />
    </main>
  );
}
