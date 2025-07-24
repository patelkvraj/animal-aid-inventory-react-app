function DonationStats({ donations }) {
  const containerStyle = {
    border: "1px solid #ccc",
    borderRadius: "6px",
    padding: "16px",
    maxWidth: "350px",
    margin: "20px auto",
    background: "#fafafa",
    fontFamily: "Arial, sans-serif",
  };
  const headingStyle = {
    fontSize: "1.3em",
    marginBottom: "12px",
  };
  const statStyle = {
    margin: "6px 0",
  };

  if (donations.length === 0) {
    return (
      <div style={containerStyle}>
        <h2 style={headingStyle}>Basic Statistics</h2>
        <p style={statStyle}>No donations yet.</p>
      </div>
    );
  } else {
    const totalDonations = donations.length;
    const totalAmount = donations
      .filter((donation) => donation.donationType === "Money")
      .reduce((sum, donation) => sum + Number(donation.amount || 0), 0);
    const totalClothes = donations
      .filter((donation) => donation.donationType === "Clothing")
      .reduce((sum, donation) => sum + Number(donation.quantity || 0), 0);
    const totalFoodItems = donations
      .filter((donation) => donation.donationType === "Food")
      .reduce((sum, donation) => sum + Number(donation.quantity || 0), 0);

    return (
      <div style={containerStyle}>
        <h2 style={headingStyle}>Basic Statistics</h2>
        <p style={statStyle}>Number of donations: {totalDonations}</p>
        <p style={statStyle}>Total amount donated: ${totalAmount}</p>
        <p style={statStyle}>Total clothes donated: {totalClothes}</p>
        <p style={statStyle}>Total food items donated: {totalFoodItems}</p>
      </div>
    );
  }
}

export default DonationStats;
