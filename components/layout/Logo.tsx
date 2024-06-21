import Link from "next/link";
import { merienda } from "../../app/fonts";

const Logo = () => {
  return (
    <Link
      className={`font-bold text-3xl dark:text-darkTextMain text-[#035C41] leading-normal mx-4 ${merienda.className}`}
      href="/"
    >
      Veggy
      <p className="ml-5">Vibes</p>
    </Link>
  );
};

export { Logo };
