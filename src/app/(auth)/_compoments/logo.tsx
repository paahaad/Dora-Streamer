import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export function Logo() {
  return (
    <div className="flex flex-col items-center gap-y-3">
      <div className="bg-white rounded-full p-2">
        <Image src="/logo.svg" alt="Logo" height="80" width="80"/>
      </div>
      <div className={cn("flex flex-col items-center", font.className)}>
        <p className="text-xl font-semibold">DORA</p>
        <p className="text-sm text-muted-foreground">Let&#39;s Play</p>
      </div>
    </div>
  );
}
