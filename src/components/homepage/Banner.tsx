import bannerImg from "@/assets/banner-book.png";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="container mx-auto my-5 rounded-xl bg-[#F3f3f3]">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 p-6 md:p-10 lg:p-15">
        {/* Content */}
        <div className="space-y-5 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-[56px] font-semibold max-w-xl">
            Books to Freshen up your Bookshelf
          </h2>

          <a className="btn bg-[#23BE0A] text-white">View The List</a>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <Image
            src={bannerImg}
            width={318}
            height={394}
            alt="Banner Image"
            className="w-52 sm:w-60 md:w-72 lg:w-[318px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
