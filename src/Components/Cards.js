import React, { useState } from "react";
import Card from "./Card";

function Cards({courses , category}){
     
    
    const [likedCourses , setLikedCourses] = useState([]);


    // returns all combined courses from the api response
    const getCourses = ()=>{

        if(category === "All"){
            let allCourses = [];
            Object.values(courses).forEach( (coursesCategory) => {
                coursesCategory.forEach( (course) => {
                    allCourses.push(course);
                })
            })
            return allCourses;
        }
        else{
            //will pass only specific given category
            return courses[category];
        }


    }


    // const getCourses = () => {
        
    //     if (category === "All") {
    //         let allCourses = [];
    //         Object.values(courses).forEach(coursesCategory => {
    //             coursesCategory.forEach(course => {
    //                 allCourses.push(course);
    //             });
    //         });
    //         return allCourses;
    //     } 
    //     else {
    //         return courses[category] || [];
    //     }
    // };
    
    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">

            {
              !courses ? (
                  <div>
                      <p>No Data Found</p>
                  </div>
                ) : 
                (getCourses().map( (course) => {
                  //                   ********************    never forget to put return here
                  return(
                     <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
                  );
               }))
            }

        </div>
    )
}

export default Cards;