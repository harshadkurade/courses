import "./App.css";
import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import Spinner from "./Components/Spinner";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";


function App() {

  const[courses,setCourses]=useState(null);
  // you can use [] empty array instead of null for preventing the error instead . Currently we are using loading if else
  const [loading,setLoading]=useState(true);
  const [category,setCategory]=useState(filterData[0].title)

  useEffect(()=>{
    const fetchData = async ()=>{
      setLoading(true);
      try{
        const result = await fetch(apiUrl);
        const output = await result.json();
        //save data into the vairiable 
        setCourses(output.data);
      }
      catch(error){
        toast.error("Something went wrong");
      }
      setLoading(false);
    }
    fetchData();
  },[]);

  return (
    <div className="min-h-screen flex flex-col bg-[#5F5D75]">

      <div>
         <Navbar />
      </div>

      <div className="bg-[#5F5D75]">
         
         
         <div>
           <Filter filterData={filterData} category={category} setCategory={setCategory} />
         </div>



         <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center    items-center min-h-[50vh]">
           {
             loading ? (<Spinner></Spinner>) : (<Cards  courses={courses} category={category}/>)
           }
         </div>


      </div>
      
      
    </div>
  );
}

export default App;
