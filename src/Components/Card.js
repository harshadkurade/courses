import React from "react";
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from "react-toastify"; 

function Card({ course, likedCourses = [], setLikedCourses }){

    function clickHandler() {
        if (likedCourses.includes(course.id)) {
          //aready liked
          setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
          toast.warning("Like Removed");
        } 
        else {
          if (likedCourses.length === 0) {
            setLikedCourses([course.id]);
          } 
          else {
            // added clicked courses id to the liked courses list
            setLikedCourses((prev) => [...prev, course.id]);
          }
          
          toast.success("Liked Succesfully");
        }
      }

    return(
        <div className="w-[300px] bg-[#2D2762] bg-opacity-70 rounded-md overflow-hidden">
            <div className="relative">
                <img src={course.image.url}></img>


                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-15px] grid place-items-center">

                    {/* adding icons */}

                   <button onClick={clickHandler}>
                       {
                          likedCourses.includes(course.id) ? 
                          (<FcLike fontSize="1.75rem"></FcLike>) : 
                          (<FcLikePlaceholder fontSize="1.75rem"></FcLikePlaceholder>) 
                       }
                    </button>

                </div>
            
            </div>    

            


            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="mt-2 text-white">
                    {
                        course.description.length >100 ? 
                        (course.description.substring(0,100))+"..." : 
                        (course.description)
                    }
                </p>
            </div>
        </div>
    );
}

export default Card;