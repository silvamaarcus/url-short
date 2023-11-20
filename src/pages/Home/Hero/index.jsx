import img_banner from "../../../svg/illustration-working.svg"

const Hero = () => {
  return (
    <>
      <main className="container hero">
        <div className="row flex-space reverse-items">
          <div className="grid-6">
            <h2 className="bold color-black">More than just shorter links</h2>
            <p className="mt-1">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <a href="" className="btn mt-4">
              Get Started
            </a>
          </div>

          <div className="grid-6 ml-4" id="img-art">
            <img src={img_banner} alt="" />
          </div>
        </div>
      </main>
    </>
  );
};
export default Hero;
