const SlideBar = () => {
  const SlideBarData = [
    { svg: "/favicon/element-1.svg", text: "About UAE RMC" },
    { svg: "/favicon/award.svg", text: "Mission & Vision" },
    { svg: "/favicon/wpf_faq.svg", text: "FAQs" },
    { svg: "/favicon/material-symbol.svg", text: "Terms & Conditions" },
  ];
  return (
    <aside className="flex justify-center">
      <div className="w-[16.25rem] h-[32.625rem] rounded-[10px] bg-[#FE0000]">
        <div className="p-4">
          {SlideBarData.map((value, index) => {
            return (
              <div className="bg-[#000000] mb-2 p-3 flex items-center rounded-[8px]">
                <img
                  key={index}
                  src={value.svg}
                  alt={value.svg}
                  className="pr-3"
                />
                <p className="text-[#FFFFFF]">{value.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default SlideBar;
