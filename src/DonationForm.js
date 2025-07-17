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
