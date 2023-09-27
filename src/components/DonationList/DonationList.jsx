
import Donation from "./Donation";


const DonationList = ({campaign}) => {
  
  return (
    <section className="max-w-screen-xl mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-4 mt-20 mb-20">
      {campaign?.map(data => <Donation key={data.id} cardData = {data} ></Donation>)}
    </section>
  );
};

export default DonationList;
