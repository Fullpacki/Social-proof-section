import Img1 from "../images/image-colton.jpg";
import Img2 from "../images/image-irene.jpg";
import Img3 from "../images/image-anne.jpg";

const contentArticle = [
  {
    picture: Img1,
    name: "Colton Smith",
    status: "Verified Buyer",
    survey:
      '" We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! "',
  },
  {
    picture: Img2,
    name: "Irene Roberts",
    status: "Verified Buyer",
    survey:
      '" Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery. "',
  },
  {
    picture: Img3,
    name: "Anne Wallace",
    status: "Verified Buyer",
    survey:
      '" Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! "',
  },
];

function Survey() {
  return (
    <div className="flex flex-col xl:gap-8 xl:flex-row">
      {contentArticle.map((article, index) => (
        <div
          className={`flex flex-col gap-5 bg-[#4b244a] p-8 rounded-xl ${
            index === 1 ? "translate-y-4" : ""
          } ${index === 2 ? "translate-y-8" : ""}`}
          key={index}
        >
          <div className="flex flex-row gap-6 items-center">
            <img
              className="rounded-full w-12"
              src={article.picture}
              alt="A profil picture of somebody"
            />
            <div>
              <h1 className="text-white font-semibold">{article.name}</h1>
              <h2 className="text-[#D968A1] font-medium">{article.status}</h2>
            </div>
          </div>
          <p className="text-white">{article.survey}</p>
        </div>
      ))}
    </div>
  );
}

export default Survey;
