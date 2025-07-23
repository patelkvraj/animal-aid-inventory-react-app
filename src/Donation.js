import DonationForm from "./DonationForm.js";
import DonationStats from "./DonationStats.js";
import DonationList from "./DonationList.js";
import { useState } from "react";

function Donation() {
  const [donations, setDonations] = useState([]);

  const addDonation = (newDonation) => {
    const donationWithId = { ...newDonation, id: Date.now() }; // assign a unique id to each donation
    setDonations([...donations, donationWithId]);
  };
  };

  return (
    <>
      <h1>AnimalAid Donations</h1>
      <DonationForm onAddDonation={addDonation} />
      <DonationList donations={donations} />
      <DonationStats donations={donations} />
    </>
  );
}

export default Donation;
