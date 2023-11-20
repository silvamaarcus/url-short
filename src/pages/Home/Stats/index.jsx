const Stats = () => {
  return (
    <>
      <div className="bg-gray pb-5">
        <section className="container stats">
          <div className="row">
            <div className="text-center pt-6 pb-5">
              <h4 className="bold color-black">Advanced Statistics</h4>
              <p className="mt-2">
                Track how your links are performing across the web with our
                advanced statistics dashboard.
              </p>
            </div>

            <div className="row cards">
              <div className="grid-4 card-item-1 border pt-6 pb-4 px-4">
                <h6 className="bold color-black">Brand Recognition</h6>
                <p className="mt-1">
                  Boost your brand recognition with each click. Generic links
                  don’t mean a thing. Branded links help instil confidence in
                  your content.
                </p>
              </div>

              <div className="grid-4 card-item-2 border pt-6 pb-4 px-4 mt-5">
                <h6 className="bold color-black">Detailed Records</h6>
                <p className="mt-1">
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
                  decisions.
                </p>
              </div>

              <div className="grid-4 card-item-3 border pt-6 pb-4 px-4 mt-8">
                <h6 className="bold color-black">Fully Customizable</h6>
                <p className="mt-1">
                  Improve brand awareness and content discoverability through
                  customizable links, supercharging audience engagement..
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Stats;
