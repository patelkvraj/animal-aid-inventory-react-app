import { useState } from "react";

function DonationList({ donations, onDeleteDonation }) {
  const [selectedDonationType, setSelectedDonationType] = useState("");

  const handleChange = (event) => {
    setSelectedDonationType(event.target.value);
  };

  const handleDelete = (donationId) => {
    onDeleteDonation(donationId);
  };

  if (donations.length === 0) {
    return (
      <>
        <h2>Recent Donations</h2>
        <p>No donations yet. Be the first to donate!</p>
      </>
    );
  } else {
    // Filter donations based on selectedDonationType
    const filteredDonations = selectedDonationType
      ? donations.filter(
          (donation) => donation.donationType === selectedDonationType
        )
      : donations;

    return (
      <>
        <h2>Recent Donations</h2>
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>
                <label htmlFor="donation-type-drop-down">
                  Type of Donation
                </label>
                <select
                  id="donation-type-drop-down"
                  value={selectedDonationType}
                  onChange={handleChange}
                >
                  <option value=""></option>
                  <option value="Money">Money</option>
                  <option value="Food">Food</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Other">Other</option>
                </select>
              </th>
              <th>Amount/Quantity</th>
              <th>Notes</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDonations.map((donation) => (
              <tr key={donation.id}>
                <td>{donation.username || "Anonymous"}</td>
                <td>{donation.donationType || "-"}</td>
                <td>{donation.amount || donation.quantity || "-"}</td>
                <td>{donation.description || "-"}</td>
                <td>{donation.date || "-"}</td>
                <td>
                  <button onClick={() => handleDelete(donation.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default DonationList;
