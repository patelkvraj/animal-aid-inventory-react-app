import DonationForm from "./DonationForm.js";
import DonationStats from "./DonationStats.js";
import DonationList from "./DonationList.js";
import { useState } from "react";

function Donation() {
  const [donations, setDonations] = useState([]);
  const [donationToEdit, setDonationToEdit] = useState({});

  const addDonation = (newDonation) => {
    const donationWithId = { ...newDonation, id: Date.now() }; // assign a unique id to each donation
    setDonations([...donations, donationWithId]);
  };

  const handleDeleteDonation = (donationIdToRemove) => {
    setDonations(
      donations.filter((donation) => donation.id !== donationIdToRemove)
    );
  };

  const handleEditDonation = (donationIdToEdit) => {
    handleDeleteDonation(donationIdToEdit); //  remove the prior entry
    const donation = donations.find(
      // add a new entry
      (donation) => donation.id === donationIdToEdit
    );
    setDonationToEdit(donation);
  };

  return (
    <>
      <h1>AnimalAid Donations</h1>
      <DonationForm
        onAddDonation={addDonation}
        donationToEdit={donationToEdit}
      />
      <DonationList
        donations={donations}
        onDeleteDonation={handleDeleteDonation}
        onEditDonation={handleEditDonation}
      />
      <DonationStats donations={donations} />
    </>
  );
}

export default Donation;
