// import Image from "next/image";

export default function Page() {
  return (
    <div className="flex items-center h-full w-full">
      <div className="w-[40%] h-full">
        <div className="bg-[url(/frontendChallengeWebsite/home.jpg)] bg-cover bg-center h-full w-full">
          <div className="bg-orange-600/30 backdrop-brightness-75 w-full h-full ">
            <div className="w-[74%] h-full relative mx-auto">
              <q className="text-center absolute top-[80%] font-light">
                I could implement each challenge with this machine. I would just
                need the piece of hardware that could read and execute it.
              </q>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full flex flex-col space-y-8 p-6">
        {/* <div className="h-[15em] border border-green-500 bg-gray-400"> */}
        <div className="w-full h-[15em] grid grid-cols-3 gap-4 grid-rows-2 ">
          <div className="col-span-1 row-span-2 bg-red-200 rounded-lg p-4">
            <div className="title mb-4">
              <h1 className="text-[1.8em]">This website is to showcase</h1>
            </div>
            <div className="description">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
        {/* </div> */}
        <div className="flex-1 grid grid-cols-3 grid-rows-4 gap-4 w-full">
          <div className="bg-orange-300 col-span-1 row-span-2 rounded-lg"></div>
          <div className="bg-orange-300 col-span-1 row-span-2 rounded-lg"></div>
          <div className="bg-orange-300 col-span-1 row-span-2 rounded-lg"></div>
          <div className="bg-orange-300 col-span-1 row-span-2 rounded-lg"></div>
          <div className="flex flex-col gap-4  col-span-1 row-span-2 rounded-lg">
            <div className="bg-green-300 flex-1 rounded-lg"></div>
            <div className="bg-green-300 flex-1 rounded-lg"></div>
          </div>
          <div className="bg-orange-300 col-span-1 row-span-2 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
