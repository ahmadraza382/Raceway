import Heading from "../common/Heading";

const Card = () => {
  return (
    <div className="relative flex lg:w-[408px] h-[220px] rounded-[10px] bg-[#000000]">
      <img
        src={"/image/race1.png"}
        alt=""
        width={240}
        height={193}
        className="rounded-l-[10px] object-cover object-center"
      />
      <div className="pl-[27px] pr-[63px] py-[13px]">
        <Heading
          level={3}
          text="Leonidas Peruzzi"
          customHeadingStyle="italic"
        />
        <p className="text-[40px] text-white italic">295</p>
        <img src={"/image/india.png"} alt="" width={24} height={24} />
        <p className="text-white">Predator</p>
      </div>
    </div>
  );
};

export default Card;
