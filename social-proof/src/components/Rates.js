import IconStar from "../images/icon-star.svg";

function Rates() {
  return (
    <div className=" flex flex-col gap-4 rounded-xl xl:w-2/3 xl:items-center  xl:py-10 border">
      <div className="flex flex-col justify-center items-center gap-3 py-3 rounded-xl bg-[#f7f2f8] xl:flex-row xl:gap-6 xl:w-2/3 xl:py-4">
        <div className="flex flex-row gap-4">
          <img src={IconStar} alt="A star icon who's rating reviews" />
          <img src={IconStar} alt="A star icon who's rating reviews" />
          <img src={IconStar} alt="A star icon who's rating reviews" />
          <img src={IconStar} alt="A star icon who's rating reviews" />
          <img src={IconStar} alt="A star icon who's rating reviews" />
        </div>
        <p className="text-[#532152] font-bold text-xl">
          Rated 5 stars in Reviews
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-3 py-3 rounded-xl bg-[#f7f2f8] xl:flex-row xl:gap-6 xl:w-2/3 xl:py-4 xl:translate-x-[5em]">
        <div className="flex flex-row gap-4">
          <img src={IconStar} alt="A star icon who's rating reviews" />
          <img src={IconStar} alt="A star icon who's rating reviews" />
          <img src={IconStar} alt="A star icon who's rating reviews" />
          <img src={IconStar} alt="A star icon who's rating reviews" />
          <img src={IconStar} alt="A star icon who's rating reviews" />
        </div>
        <p className="text-[#532152] font-bold text-xl">
          Rated 5 stars in Report Guru
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-3 py-3 rounded-xl bg-[#f7f2f8] xl:flex-row xl:gap-6 xl:w-2/3 xl:py-4 xl:translate-x-[9em]">
        <div className="flex flex-row gap-4">
          <img src={IconStar} alt="A star icon who's rating reviews" />
          <img src={IconStar} alt="A star icon who's rating reviews" />
          <img src={IconStar} alt="A star icon who's rating reviews" />
          <img src={IconStar} alt="A star icon who's rating reviews" />
          <img src={IconStar} alt="A star icon who's rating reviews" />
        </div>
        <p className="text-[#532152] font-bold text-xl">
          Rated 5 stars in in bestTech
        </p>
      </div>
    </div>
  );
}

export default Rates;
