import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Illustration from "@/assets/undraw_education_3vwh.svg"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-8 sm:p-20">
      <Image src={Illustration} alt="Illustration" className="max-w-72 p-4" />
      <div className="max-w-3xl mx-auto flex flex-col gap-8 items-center justify-center">
        <h1 className="text-7xl font-bold text-center font-outfit">
          Lukio-opinnot kuntoon helposti netissä
        </h1>
        <p className="text-xl text-center text-muted-foreground">
          Seuraa lukio-opintojesi edistymistä yksinkertaisesti ja suunnittele tulevat kurssivalintasi helposti
        </p>
        <div className="flex gap-2">
          <Button asChild size="lg">
            <Link href="/dashboard">
              Dashboard
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="https://github.com/tatumertanen/lukiolainen">Github</Link>
          </Button>
        </div>

      </div>
    </div>
  );
}
