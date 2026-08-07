import { useState } from "react";
let counter = 0;
function App() {
  const [country, setCountry] = useState("");
  const logCountrySelection = (event) => {
    setCountry(event.target.value);
    console.log("Selected country:", event.target.value);
    console.log("Current country state:", country);
  };

  console.log("Component rendered..." + (counter + 1) + " Times");
  // counter += 1;
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "200px",
          backgroundColor: "#f0f0f0",
          paddingBottom: "200px",
        }}
      >
        <h1>Public Holidays</h1>
        <select
          name="country"
          onChange={logCountrySelection}
          defaultValue={"Canada"}
        >
          <option value="United States">United States</option>
          <option value="Canada">Canada</option>
          <option value="United Kingdom">United Kingdom</option>
        </select>
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
          // Jo bhi func 1 elem par event handle karega usay event paas hoga or us k target k tor par wo elem pass hoga, or us k elements main us elem k attributes or values available honge, or us k sath sath us elem k parent elem k attributes or values bhi available honge
          onClick={(event) => {
            console.log("Fetching public holidays for:", event);
          }}
        >
          Get Public Holidays
        </button>
      </div>
    </>
  );
}

export default App;
