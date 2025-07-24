function DonationStats({ donations }) {
  if (donations.length === 0) {
    return (
      <>
        <h2>Basic Statistics</h2>
        <p>No donations yet.</p>
      </>
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
      <>
        <h2>Basic Statistics</h2>
        <p>Number of donations: {totalDonations}</p>
        <p>Total amount donated: ${totalAmount}</p>
        <p>Total clothes donated: {totalClothes}</p>
        <p>Total food items donated: {totalFoodItems}</p>
      </>
    );
  }
}

export default DonationStats;
