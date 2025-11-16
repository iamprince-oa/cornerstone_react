import React, { useEffect } from "react";

function Services() {
  const [data, setData] = React.useState();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/services/")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <>
      <div style={{ maxWidth: "800px", margin: "40px auto" }}>
        <h2 style={{ marginBottom: "20px" }}>Our Services</h2>
        <ul style={{ lineHeight: "1.8", fontSize: "18px" }}>
          {data &&
            data.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default Services;
