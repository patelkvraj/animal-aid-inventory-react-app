import { useState } from "react";

function DonationForm() {
  const [name, setName] = useState("");

  return (
    <form>
      <label>
        Full Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
    </form>
  );
}

export default DonationForm;
