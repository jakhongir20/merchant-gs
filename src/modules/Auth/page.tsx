import { LanguageSwitcher, LoginForm } from "@/modules/Auth/ui";

export default function LoginPage() {
  return (
    <div className="flex h-screen w-full">
      <div className="hidden w-2/5 flex-col items-center justify-between bg-gradient-to-b from-[#f15b2b] to-[#f37a28] p-8 text-white md:flex">
        <span></span>
        <div className="flex items-center space-x-3">
          <img src="/logo-w.svg" alt="logo" className="" />
        </div>
        <p className="font-normaltext-white/90 mt-4 text-base">
          Безопасные платежи для вашего бизнеса
        </p>
      </div>

      <div className="relative flex w-[60%] flex-col items-center justify-between bg-white px-6 py-8">
        <span></span>
        <div className="absolute right-8 top-4">
          <LanguageSwitcher />
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <div className="mb-5 h-11 w-11">
            <img src="/logo-circle.svg" alt="logo" className="" />
          </div>
          <h1 className="mb-6 text-2xl font-bold text-gray-800">
            Личный кабинет
          </h1>

          <LoginForm />
        </div>
        <div className="mt-4 text-xs text-gray-600">Global Pay © 2025</div>
      </div>
    </div>
  );
}
