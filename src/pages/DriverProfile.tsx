import Banner from "../components/common/Banner";
import SlideBar from "../components/driver-profile/SlideBar";
import Card from "../components/driver-profile/Card";

export default function DriverProfile() {
  return (
    <div
      className="w-full h-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(#000000CC, #000000CC), url(/image/background1.png)",
      }}
    >
      <Banner text={"Driver Profile"} showBorder={true} showBackground={false} />
      <div className="arw-container lg:flex gap-[36px] pb-[83px]">
        <SlideBar />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[23px]">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
            return <Card />;
          })}
        </div>
      </div>
    </div>
  );
}
