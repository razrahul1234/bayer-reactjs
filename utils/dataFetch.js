import React, {useEffect, useState} from "react";
import axios from "axios";

const FetchData = (url, type, options) =>{
    const [data, setData]= useState();
    const [loading, setLoading]= useState(true);
    const [errors, setErrors]= useState(null);


    useEffect(()=>{
        if(type === "GET"){
            axios.get(`${url}?email=${options?.email}`,{
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJyYWh1bCIsImxhc3ROYW1lIjoicmFqc2hla2hhciIsImVtYWlsIjoiYWJjMTIzQGdtYWlsLmNvbSIsImlhdCI6MTc0MDgzMzAyMywiZXhwIjoxNzQwODM2NjIzfQ.7cCTvlZ4JIwIU4p2CgS_eZmU1Dbrw0HkEeHUsEsWlM8`
                }
            })
            .then(response =>{
                 setData(response);
                 setLoading(false);
              }
            )
            .catch(error => {
                setErrors(error.message);
                setLoading(false);
          });
        } else if(type==='POST'){
            axios.post(url, options, {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJyYWh1bCIsImxhc3ROYW1lIjoicmFqc2hla2hhciIsImVtYWlsIjoiYWJjMTIzQGdtYWlsLmNvbSIsImlhdCI6MTc0MDgzMzAyMywiZXhwIjoxNzQwODM2NjIzfQ.7cCTvlZ4JIwIU4p2CgS_eZmU1Dbrw0HkEeHUsEsWlM8`
                }
            })
            .then(response =>{
                setData(response);
                setLoading(false);
             }
            )
            .catch(error => {
                setErrors(error.message);
                setLoading(false);
          });
        }
         
    }, [url, type, options])

    return {data, loading, errors};

}

export default FetchData;
