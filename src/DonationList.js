import { useState } from "react";

function DonationList({ donations, onDeleteDonation, onEditDonation }) {
  const [selectedDonationType, setSelectedDonationType] = useState("");

  const handleChange = (event) => {
    setSelectedDonationType(event.target.value);
  };

  const handleDelete = (donationId) => {
    onDeleteDonation(donationId);
  };

  const handleEdit = (donationId) => {
    onEditDonation(donationId);
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "16px",
    background: "#fff",
  };

  const thTdStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
  };

  const thStyle = {
    ...thTdStyle,
    background: "#f2f2f2",
    fontWeight: "bold",
  };

  const buttonStyle = {
    marginRight: "6px",
    padding: "4px 10px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    background: "#1976d2",
    color: "#fff",
  };

  const deleteButtonStyle = {
    ...buttonStyle,
    background: "#d32f2f",
  };

  if (donations.length === 0) {
    return (
      <div
        style={{ padding: "24px", background: "#fafafa", borderRadius: "8px" }}
      >
        <h2 style={{ marginBottom: "12px" }}>Recent Donations</h2>
        <p>No donations yet. Be the first to donate!</p>
      </div>
    );
  } else {
    // Filter donations based on selectedDonationType
    const filteredDonations = selectedDonationType
      ? donations.filter(
          (donation) => donation.donationType === selectedDonationType
        )
      : donations;

    return (
      <div
        style={{ padding: "24px", background: "#fafafa", borderRadius: "8px" }}
      >
        <h2 style={{ marginBottom: "12px" }}>Recent Donations</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Full Name</th>
              <th style={thStyle}>
                <label
                  htmlFor="donation-type-drop-down"
                  style={{ marginRight: "8px" }}
                >
                  Type of Donation
                </label>
                <select
                  id="donation-type-drop-down"
                  value={selectedDonationType}
                  onChange={handleChange}
                  style={{
                    padding: "4px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                >
                  <option value="">All</option>
                  <option value="Money">Money</option>
                  <option value="Food">Food</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Other">Other</option>
                </select>
              </th>
              <th style={thStyle}>Amount/Quantity</th>
              <th style={thStyle}>Notes</th>
              <th style={thStyle}>Date</th>
              <th style={thStyle} colSpan={2}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredDonations.map((donation) => (
              <tr key={donation.id}>
                <td style={thTdStyle}>{donation.username}</td>
                <td style={thTdStyle}>{donation.donationType}</td>
                <td style={thTdStyle}>
                  {donation.amount || donation.quantity || "-"}
                </td>
                <td style={thTdStyle}>{donation.description || "-"}</td>
                <td style={thTdStyle}>{donation.date}</td>
                <td style={thTdStyle}>
                  <button
                    style={deleteButtonStyle}
                    onClick={() => handleDelete(donation.id)}
                  >
                    Delete
                  </button>
                </td>
                <td style={thTdStyle}>
                  <button
                    style={buttonStyle}
                    onClick={() => handleEdit(donation.id)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DonationList;
