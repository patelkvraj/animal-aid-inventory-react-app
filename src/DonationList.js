function DonationList({ donations }) {
  if (donations.length === 0) {
    return (
      <>
        <h2>Recent Donations</h2>
        <p>No donations yet. Be the first to donate!</p>
      </>
    );
  } else {
    return (
      <>
        <h2>Recent Donations</h2>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Full Name</th>
              <th>Type of Donation</th>
              <th>Amount/Quantity</th>
              <th>Notes</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation, id) => (
              <tr key={id}>
                <td>{id + 1}</td>
                <td>{donation.username || "Anonymous"}</td>
                <td>{donation.donationType || "-"}</td>
                <td>{donation.amount || donation.quantity || "-"}</td>
                <td>{donation.description || "-"}</td>
                <td>{donation.date || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default DonationList;
