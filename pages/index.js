import Image from "next/image";
import Carousels from "../components/Carousels";

export default function Home() {
  return (
    <div className="bg-black">
      <main className="container max-w-full px-4 sm:px-12">
        <section className="py-4">
          <Carousels />
        </section>
      </main>
    </div>
  );
}
