import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContentWrapper from "../components/ContentWrapper/ContentWrapper";
import { saveDatatoLocalStorage } from "../utils/localStorage";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Details = () => {
  const [donationSection, setDonationSection] = useState([]);
  const { id } = useParams();
  const MySwal = withReactContent(Swal);
  const selectdDonation = donationSection?.find((donation) => donation.id == id);
  const { picture, title, description, price, text_and_button_bg } =
    selectdDonation || {};
  useEffect(() => {
    fetch("/donation.json")
      .then((res) => res.json())
      .then((data) => setDonationSection(data));
  }, []);
  const background = {
    background: `url(${picture})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const handelDonation = () => {
    const reserve = saveDatatoLocalStorage(id, price);
    if (reserve) {
      MySwal.fire({
        title: <strong>Great Job!</strong>,
        html: <i>Doneted Succefully !</i>,
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      MySwal.fire({
        title: <strong>Sorry</strong>,
        html: <i>Already Doneted Here !</i>,
        icon: "info",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  
  return (
    <section>
      <ContentWrapper>
        <>
          <div
            className="w-full h-[700px] relative rounded-lg object-cover"
            style={picture ? background : {}}
          >
            <div className="w-full h-[130px] bg-[#0b0b0b98] absolute bottom-0 rounded-b-lg flex items-center">
              <button
                className="py-4 px-5 text-white font-semibold text-xl ml-10 rounded"
                style={{ background: text_and_button_bg }}
                onClick={handelDonation}
              >
                Donate ${price}
              </button>
            </div>
          </div>
          {/* infodiv */}
          <div className="mt-12 w-full px-4 lg:px-0">
            <h1 className="text-4xl font-bold text-[#0b0b0bd7]">{title}</h1>
            <p className="py-8 text-[#0b0b0bce] text-[16px] font-normal text-justify leading-7">
              {description}
            </p>
          </div>
        </>
      </ContentWrapper>
    </section>
  );
};


export default Details;
