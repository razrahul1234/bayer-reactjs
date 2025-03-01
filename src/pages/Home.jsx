// import { useState } from 'react'
import FetchData from '../../utils/dataFetch';

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
    <>
      <h1>Hello</h1>
    </>
  )
}

export default Home
