import styles from "../custom.module.css";

export default function Hero() {
  return (
  <div className={`w-full h-full relative flex flex-col items-center ${styles.hero_landing_img}`}>
      <div className="max-w-6xl w-full grid grid-cols-12 py-12 md:py-32">
        <div className="col-start-2 col-span-10 md:col-start-1 md:col-span-7 relative border rounded-lg z-20">
          <div className="p-6 md:p-12 text-center md:text-left">
            <p className="text-orange-400 text-md pb-3">We Are Top Renewable Energy Solutions!</p>
            <div className="text-4xl lg:text-6xl text-white">
              <h1 className="font-extrabold pb-3">Powering Homes</h1>
              <div className="flex justify-center md:justify-start">
                <div className="inline-block pb-3">
                  <h1 className="font-extrabold mb-3">With</h1>
                  <hr className="border-white" style={{ width: '120%' }}></hr>
                </div>
                <h1 className="font-extrabold text-orange-400">&nbsp;Solar Panels</h1>
              </div>
            </div>
            <p className="text-white text-md pb-5">Our team has the courage, scale, passion, diversity and resourcefulness that promise wherever and however the world needs it.</p>
            <button className="bg-orange-400 text-white text-md py-3 px-8 font-semibold">Discover More</button>
          </div>
          <div className={`absolute top-0 left-0 w-full h-full rounded-lg bg-white p-12 ${styles.hero_img_style}`}></div>
        </div>
      </div>
    </div>
  )
}
