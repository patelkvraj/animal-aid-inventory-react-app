import { useState, useEffect } from "react";

function DonationForm({ onAddDonation, donationToEdit }) {
  const [inputs, setInputs] = useState({
    donationType: "Money", // Set default value
  });

  useEffect(() => {
    if (donationToEdit && Object.keys(donationToEdit).length > 0) {
      // populate the form with the donation data
      setInputs({
        username: donationToEdit.username || "",
        donationType: donationToEdit.donationType || "Money",
        amount: donationToEdit.amount || Number(100),
        quantity: donationToEdit.quantity || Number(1),
        description: donationToEdit.description || "",
        date: donationToEdit.date || "",
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
    setInputs({ donationType: "Money" }); // clear the input fields to default
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Full Name:
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Type of Donation:
        <select
          name="donationType"
          value={inputs.donationType || "Money"}
          onChange={handleChange}
        >
          <option value="Money">Money</option>
          <option value="Food">Food</option>
          <option value="Clothing">Clothing</option>
          <option value="Other">Other</option>
        </select>
      </label>
      {/* Conditionally render Amount, Quantity, or Description based on donationType */}
      {inputs.donationType === "Money" ? (
        <label>
          Amount:
          <input
            type="number"
            name="amount"
            value={inputs.amount || "100"}
            onChange={handleChange}
          />
        </label>
      ) : inputs.donationType === "Other" ? (
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={inputs.description || ""}
            onChange={handleChange}
          />
        </label>
      ) : (
        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            value={inputs.quantity || "1"}
            onChange={handleChange}
          />
        </label>
      )}
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={inputs.date || ""}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  );
}

export default DonationForm;
