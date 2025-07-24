import { useState, useEffect } from "react";

function DonationForm({ onAddDonation, donationToEdit }) {
  const getTodayDate = () => {
    return new Date().toISOString().split("T")[0];
  };

  const [inputs, setInputs] = useState({
    donationType: "Money", // Set default value
    date: getTodayDate(), // today's date in YYYY-MM-DD format
  });

  useEffect(() => {
    if (donationToEdit && Object.keys(donationToEdit).length > 0) {
      // populate the form with the donation data
      setInputs({
        username: donationToEdit.username,
        donationType: donationToEdit.donationType || "Money",
        amount: donationToEdit.amount || "",
        quantity: donationToEdit.quantity || "",
        description: donationToEdit.description || "",
        date: donationToEdit.date,
      });
    }
  }, [donationToEdit]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddDonation(inputs); // add a new donation to the list (in the parent component)
    alert("Thank you so much for your generous donation!");
    setInputs({
      donationType: "Money",
      date: new Date().toISOString().split("T")[0],
    }); // clear the input fields to default
  };

  // Basic styles
  const formStyle = {
    maxWidth: "350px",
    margin: "20px auto",
    padding: "16px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    background: "#fafafa",
    fontFamily: "sans-serif",
  };
  const labelStyle = { display: "block", margin: "12px 0 4px" };
  const inputStyle = { width: "100%", padding: "6px", marginBottom: "8px" };
  const buttonStyle = { padding: "8px 16px", marginTop: "10px" };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <label style={labelStyle}>
        Full Name:
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
          required
          placeholder="Anonymous"
          style={inputStyle}
        />
      </label>
      <label style={labelStyle}>
        Type of Donation:
        <select
          name="donationType"
          value={inputs.donationType || "Money"}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="Money">Money</option>
          <option value="Food">Food</option>
          <option value="Clothing">Clothing</option>
          <option value="Other">Other</option>
        </select>
      </label>
      {inputs.donationType === "Money" ? (
        <label style={labelStyle}>
          Amount:
          <input
            type="number"
            name="amount"
            value={inputs.amount || ""}
            onChange={handleChange}
            required
            min={0}
            step={0.01}
            style={inputStyle}
          />
        </label>
      ) : inputs.donationType === "Other" ? (
        <label style={labelStyle}>
          Description:
          <input
            type="text"
            name="description"
            value={inputs.description || ""}
            onChange={handleChange}
            required
            placeholder="Describe your donation"
            style={inputStyle}
          />
        </label>
        <label style={labelStyle}>
          Quantity:
          <input
            type="number"
            name="quantity"
            value={inputs.quantity || ""}
            onChange={handleChange}
            min={1}
            step={1}
            required
            style={inputStyle}
          />
        </label>
      )}
      <label style={labelStyle}>
        Date:
        <input
          type="date"
          name="date"
          value={inputs.date || getTodayDate()}
          onChange={handleChange}
          max={getTodayDate()}
          style={inputStyle}
        />
      </label>
      <input type="submit" style={buttonStyle} />
    </form>
  );
}

export default DonationForm;
