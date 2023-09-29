
function Home() {
  return (
    <div>
      <main>
        <div className="flex flex-col lg:flex-row     ms-28 justify-between w-11/12 me-auto ms-auto mt-40">
          <div className="left-container ">
            <p className="text-5xl font-normal font-mono text-cyan-50  font-normal mt-20 font-serif leading-tight ">
              Searching for<b> Augmented Development </b>
              Teams to <br />
              steer your product
              <br /> towards triumph?"
            </p>
            <div className="data-bx flex me-auto ms-auto ml-3 gap-12 mt-9">
              <div className="data-sm">
                <p className="numV text-4xl font-bold">50+</p>
                <p className="data text-zinc-400 mt-3 text-xl font-normal ">
                  Client
                </p>
              </div>
              <div className="data-sm">
                <p className="numV text-4xl font-bold ">80+</p>
                <p className="data text-zinc-400 mt-3 text-xl font-normal  ">
                  Projects successfully completed
                </p>
              </div>

              <div className="data-sm">
                <p className="numV text-4xl font-bold">60%</p>
                <p className="data text-zinc-400  mt-3 text-xl font-normal ">
                  of the clients conveted into long term engagement partners
                </p>
              </div>
            </div>
          </div>
          <div className=" max-[640px]:w-full max-[640]:me-[15%] border-none w-3/4 m-[15%] md:m-5 rounded-3xl h-1/2 py-10 px-4 text-black  bg-gradient-to-r from-gray-600 to-blue-300 overflow-x-hidden ">
            <h2 className="text-4xl font-medium font-serif">Fill out the form.</h2>
            <p className="text-xl font-normal py-3 font-serif">
              Our team will touch base with you within 24 hours.
            </p>
            <form className="grid grid-cols-1  md:grid-cols-4  m-3">
              <input
                className=" border-b-2  border-slate-600 m-3 py-3 px-1 md:w-60 bg-transparent text-xl "
                id="name "
                placeholder="FullName*"
                required
              />
              <br />
              <input
                className=" border-b-2  border-slate-600 m-3 py-3 px-1 md:w-60 bg-transparent text-xl"
                id="email"
                placeholder="Email*"
                required
              />
              <br />

              <input
                className="border-b-2  border-slate-600 m-3 py-3 px-1  md:w-60 bg-transparent text-xl"
                id="country"
                placeholder="Country"
              />

              <br />

              <input
                className=" border-b-2  border-slate-600 m-3 py-3 px-1 md:w-60 bg-transparent text-xl"
                id="contact"
                placeholder="Contact Number"
              />

              <br />
            </form>
            <form className="grid grid-cols-1">
              <input
                className=" border-b-2  border-slate-600 m-3 py-3 px-1    bg-transparent text-xl"
                id="about"
                placeholder="Tell us your requiremnets*"
                required
              />
            </form>

            <div className="btn-sv flex gap-3">
              <div className="sb bg-zinc-900  mt-3 text-cyan-50 py-3 px-7 rounded-3xl text-xl hover:bg-zinc-800 " onClick={handleClick}>
                Submit
              </div>
              <div className="sb  bg-zinc-900 mt-3 text-cyan-50 py-2 px-4 rounded-full text-xl font-bold hover:bg-zinc-800">
                &rarr;
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
  function handleClick(){
    alert("message successfully send")
  }
}

export default Home;
