import Banner from "../components/common/Banner";
import SlideBar from "../components/layouts/SlideBar";

export default function About() {
  return (
    <>
      <Banner text="About UAE RMC" showBackground={true} />
      <div
        className="w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(#000000CC, #000000CC), url(/image/background1.png)",
        }}
      >
        <div className="arw-container">
          <div className="bg-black w-full max-w-[64.625rem] h-full rounded-[10px] flex py-[31px] px-[26px]">
            <SlideBar />
            <div>
              <img src={"/favicon/logo.svg"} alt="" />
              <p className="text-white">
                UAE Rotax MAX Challenge which is the official National Karting
                Championship in the United Arab Emirates. The original concept
                of Worldwide National RMC & GRAND FINALS is Professional
                "one-make" kart racing series with various classes. Series owned
                by BRP-Powertrain and its distributors, sanctioned by CIK-FIA &
                engines checked and sealed for equal performance. UAE RMC
                founded in 2005 with low numbers and low popularity. 1 driver
                competed for Team UAE in RMCGF 2005. Since then, the series has
                gone from strength - to - strength with a choice now of 6
                classes and 5 tracks to compete on which includes Al Ain
                Raceway, Al Forsan International Sports Resort, Dubai Kartdrome,
                Muscat Speedway and Yas Marina Circuit.
              </p>
              <div className="w-[7.5rem] h-[4.688rem] bg-[#FE0000]">
                <img src={"/favicon/about/layer1.svg"} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
