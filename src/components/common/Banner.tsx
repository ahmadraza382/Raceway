import Button from "./Button";

interface BannerProps {
  text?: string;
  showButtons?: boolean;
  showDropdown?: boolean;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  showBorder?: boolean;
  showBackground?: boolean;
}

const Banner: React.FC<BannerProps> = ({
  text = "",
  showButtons = false,
  showDropdown = false,
  primaryButtonText,
  secondaryButtonText,
  showBorder = false,
  showBackground = true,
}) => {
  return (
    <section
      className="bg-contain bg-center lg:bg-no-repeat"
      style={{
        backgroundImage: showBackground ? "url(/image/bgCalender.png)" : "none",
      }}
    >
      <div className="arw-container flex flex-col lg:flex-row lg:justify-between gap-4 py-4 lg:py-11 items-center">
        <div>
          {showButtons ? (
            <div className="flex gap-4">
              {primaryButtonText && (
                <Button
                  type="button"
                  text={primaryButtonText}
                  customButtonStyle="btn btn-primary text-white"
                />
              )}
              {secondaryButtonText && (
                <Button
                  type="button"
                  text={secondaryButtonText}
                  customButtonStyle="btn btn-secondary text-white"
                />
              )}
            </div>
          ) : (
            <p className="text-xl font-bold italic whitespace-nowrap text-white sm:text-2xl md:text-3xl">
              {text}
            </p>
          )}
        </div>

        {showDropdown && (
          <div className="flex items-center gap-2">
            <label htmlFor="season-select" className="text-white">
              Select Season:
            </label>
            <select
              id="season-select"
              className="p-2 border rounded-md bg-white text-black"
              aria-label="Select Season"
            >
              <option value="rotax23">UAE ROTAX MAX 23/24</option>
              <option value="rotax23">UAE ROTAX MAX 23/24</option>
              <option value="rotax23">UAE ROTAX MAX 23/24</option>
            </select>
            <Button
              type="button"
              text="Go"
              customButtonStyle="p-2 ml-2 text-[18px] font-semibold rounded-[6px]"
            />
          </div>
        )}
        {showBorder && <div className="border-primary-red"></div>}
      </div>
    </section>
  );
};

export default Banner;
