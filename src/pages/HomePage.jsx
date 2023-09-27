/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import DonationList from "../components/DonationList/DonationList";
import campaighn from "./campaign";



const Home = () => {
  const { campaigns } = campaighn()
  const [campaign, setcampaign] = useState([...campaigns])
  useEffect(() => {
    setcampaign(campaigns)
  }, [campaigns])
  const handleclick = (text) => {
    let searchText = text.current.value
    if (searchText) {
      let filter = campaigns.filter((cam) => cam.category.toLowerCase() === searchText.toLowerCase())
      if (filter.length > 0) {
        setcampaign(filter)
        cam.current.value = ''
      }
      else {
        setcampaign([])
        cam.current.value = ''

      }
    }
  }
  return (
    <div>
      <Banner handleclick={handleclick} />

      <DonationList campaign={campaign} />
    </div>
  );
};


export default Home;
