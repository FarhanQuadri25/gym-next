import Image from "next/image";

export default function index() {
  return (
    <section id="pricing" className="mt-[8rem]">
      <div className="text-center">
        <h1 className="font-general font-bold text-4xl text-indigo-700">
          Pricing
        </h1>
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="border-4 border-indigo-700 p-[30px]">
          <Image
            src="/newimg/pricing-section.png"
            width={800}
            height={800}
            alt="pricing-section"
          />
        </div>
      </div>
    </section>
  );
}
