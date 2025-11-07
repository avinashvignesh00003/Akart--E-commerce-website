import { useState,useEffect } from "react";
import axios from "axios"
function useFetch(url){
    let[products,setProducts]=useState([])
    let[error,Seterror]=useState(" ");
    let[isLoading,setIsLoading]=useState(true);


useEffect(()=>{
let fetchApi= async ()=>{
try{
// let response= await fetch(URL)
let response=await axios.get(url)

setProducts(response.data);
// if(response.ok){
// let data =await  response.json()
// setProducts(data)
// }
// else{
// throw  new Error("Data Not Found")
// }
}




catch(error){
Seterror(error.message);
}
finally{
setIsLoading(false)
}
};
fetchApi();
},[])
return { products, error, isLoading, setProducts };
}
export default useFetch;