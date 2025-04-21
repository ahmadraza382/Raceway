import Heading from "../common/Heading";

const SlideBar = () => {
  return (
    <aside className="w-full lg:w-64 h-[28rem] px-3 py-5 bg-black rounded-[10px]">
      <Heading
        level={1}
        text={"Categories"}
        customHeadingStyle="!text-[22px] italic mb-[11px]"
      />
      {[1, 2, 3, 4, 5, 6].map((val, i) => {
        return (
          <div className="bg-[#333333] h-[48px] pl-6 rounded-[10px] flex items-center mb-3.5">
            <img src={"/favicon/racing-car.svg"} alt={"racing-car-icon"} />
            <p className="text-white italic pl-4">MICROMAX</p>
          </div>
        );
      })}
    </aside>
  );
};

export default SlideBar;
