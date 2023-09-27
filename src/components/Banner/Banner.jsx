import { useRef } from "react";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
const Banner = ({ handleclick }) => {
  const inputRef = useRef()
  return (
    <section className="banner w-full h-[600px] flex justify-center items-center">

      <div className="flex flex-col justify-center items-center mx-auto">
        <h1 className="text-center text-2xl md:text-5xl font-bold not-italic text-[#0b0b0bf5]">
          I Grow By Helping People In Need
        </h1>
        <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row md:w-[582px] mt-10">
          <input

            ref={inputRef}
            type="text"
            placeholder="Search here..."
            className="rounded-lg md:w-[470px] h-12 border border-[#dededeef] outline-none md:rounded-none md:rounded-l-lg px-7"
          />
          <button onClick={() => handleclick(inputRef)} className="w-28 h-12 rounded-lg lg:w-[112px] bg-color-rose text-white md:rounded-none md:rounded-r-lg">Search</button>

        </div>
      </div>

    </section>
  );
};

export default Banner;
