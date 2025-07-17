import { useState } from "react";

function DonationForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <form>
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

      <label>
        Date:
        <input
          type="date"
          name="date"
          value={inputs.date || ""}
          onChange={handleChange}
        />
      </label>
    </form>
  );
}

export default DonationForm;
