
import { Link } from "react-router-dom";
const Donation = ({ cardData }) => {
  const {id,title,picture,category,category_bg,card_bg,text_and_button_bg,} = cardData || {};


  return (
    <div
      className="w-[312px] h-[283px] rounded-lg cursor-pointer"
      style={{ backgroundColor: card_bg }}
    >
      <Link to={`/donation/details/${id}`}>
        <div className="w-[313px] h-[193px] relative">
          <img
            src={picture}
            alt={title}
            className="w-full h-[193px] object-cover rounded-t-lg"
            
          />
        </div>
        <div className="w-full h-[88px] p-4">
          <span
            className="inline-block px-4 py-1 rounded text-sm font-medium"
            style={{ background: category_bg, color: text_and_button_bg }}
          >
            {category}
          </span>
          <h1
            style={{ color: text_and_button_bg }}
            className="text-xl font-semibold mt-1"
          >
            {title}
          </h1>
        </div>
      </Link>
    </div>
  );

};
export default Donation;
