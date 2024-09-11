const Bannercard = () => {
  return (
    <>
      <img
        className="w-60 absolute opacity-90 right-4 mt-5 rounded-full"
        src="https://images.unsplash.com/photo-1567878673047-0451c851056e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FuZXNofGVufDB8fDB8fHww"
        alt=""
      />
      <div className="ml-32 h-screen  text-red-950 font-sans text-2xl">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className=" mr-2">»</span> Family Problem
                </li>
                <li className="flex items-center">
                  <span className=" mr-2">»</span> Divorce Problem
                </li>
                <li className="flex items-center">
                  <span className="mr-2">»</span> Marital Affair
                </li>
                <li className="flex items-center">
                  <span className=" mr-2">»</span> Delay in Marriage
                </li>
                <li className="flex items-center">
                  <span className=" mr-2">»</span> Inter Caste Marriage
                </li>
                <li className="flex items-center">
                  <span className=" mr-2">»</span> Children Problem
                </li>
              </ul>
            </div>

            <div>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className=" mr-2">»</span> Business Problem
                </li>
                <li className="flex items-center">
                  <span className=" mr-2">»</span> Love Marriage
                </li>
                <li className="flex items-center">
                  <span className="mr-2">»</span> Love Problem
                </li>
                <li className="flex items-center">
                  <span className=" mr-2">»</span> One Side Love
                </li>
                <li className="flex items-center">
                  <span className=" mr-2">»</span> Lost Love Back
                </li>
                <li className="flex items-center">
                  <span className=" mr-2">»</span> Love Breakup
                </li>
              </ul>
            </div>
            <div className="bg-yellow-800 w-64 h-14 rounded-md  text-white py-2 text-center">
              <h1>
                <span className="gap-4">&#128222;</span> xxxxxxxx
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bannercard;
