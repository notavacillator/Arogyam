const HowToSection = () => {
  return (
    <>
        <section className="min-h-[90vh] how-to-section mt-[30rem]">
            <div className="font-robo font-extrabold text-4xl text-ghost_white-300 text-center">
                <h2>What to do from here ? </h2>
            </div>
            <div className="flex flex-col lg:flex-row md:flex-wrap  justify-center items-center gap-[5rem] mt-[4rem]">
                <div className="how-to-clay-card h-[20rem] w-[75%] sm:w-[60%] lg:h-[15rem]  lg:w-[20rem]">.</div>
                <div className="how-to-clay-card h-[20rem] w-[75%] sm:w-[60%] lg:h-[15rem]  lg:w-[20rem]"></div>
                <div className="how-to-clay-card h-[20rem] w-[75%] sm:w-[60%] lg:h-[15rem]  lg:w-[20rem]"></div>
            </div>
        </section>
    </>
  )
}

export default HowToSection