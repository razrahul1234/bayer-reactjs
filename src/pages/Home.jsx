// import { useState } from 'react'
import FetchData from '../../utils/dataFetch';
import "./Home.css";

function Home() {
//   const [count, setCount] = useState(0)
  const {data,loading, errors } = FetchData("http://localhost:5000/api/user/healthtips?email=abc@gmail.com");
  console.log(data);
  console.log(loading);
  console.log(errors);

  fetch("http://localhost:5000/api/user/healthtips?email=abc@gmail.com", {
    method: "GET", // or "POST", "PUT", etc.
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJyYWh1bCIsImxhc3ROYW1lIjoicmFqc2hla2hhciIsImVtYWlsIjoiYWJjMTIzQGdtYWlsLmNvbSIsImlhdCI6MTc0MDgzMzAyMywiZXhwIjoxNzQwODM2NjIzfQ.7cCTvlZ4JIwIU4p2CgS_eZmU1Dbrw0HkEeHUsEsWlM8`, // Set Bearer token
    },
  }).then(res => res.json()).then(res => console.log(res)).catch(err => console.log(err));


  return (
    <div className="containerHome">
      {/* Header */}
      <div className="headerHome">Bayer Pharmaceuticals</div>

      {/* navigationHome */}
      <nav className="navigationHome">
        <a href="#">Home</a>
        <a href="#">Login</a>
        <a href="#">About Us</a>
        <a href="#">Register</a>
      </nav>

      {/* Main Content */}
      <div className="content">
        <h2>About Bayer Pharmaceuticals</h2>
        <p>
          Bayer Pharmaceuticals is a global enterprise with core competencies in 
          the Life Science fields of health care and agriculture. Their products and 
          services are designed to benefit people and improve their quality of life.
        </p>
      </div>
    </div>
  )
}

export default Home
