import ContentWrapper from "../ContentWrapper/ContentWrapper";
const Banner = () => {
  return (
    <section className="banner w-full h-[600px] flex justify-center items-center">
      <ContentWrapper>
        <div className="flex flex-col justify-center items-center mx-auto">
          <h1 className="text-center text-2xl md:text-5xl font-bold not-italic text-[#0B0B0B]">
            I Grow By Helping People In Need
          </h1>
          <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row md:w-[582px] mt-10">
            <input
              type="text"
              placeholder="Search here..."
              className="rounded-lg md:w-[470px] h-12 border border-[#DEDEDE] outline-none md:rounded-none md:rounded-l-lg px-7"
            />
            <input
              type="submit"
              className="w-28 h-12 rounded-lg lg:w-[112px] bg-color-rose text-white md:rounded-none md:rounded-r-lg"
              value={"Search"}
            />
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default Banner;
