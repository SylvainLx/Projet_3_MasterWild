 /* eslint-disable camelcase */
 import { useState, useEffect } from "react";
 import VideoSample from "../VideoSample";
 import "../../style/MyMCFavoritesList.css";
 import "../../style/VideoSample.css";
 import api from "../../services/endpoint";

 const userId = 1;

 export default function MyMCFavoritesList() {
   const [favoriteList, setFavoriteList] = useState([]);

   useEffect(() => {
     api.get(`/api/favorite/${userId}`).then((res) => {
       if (res.data.length !== 0) {
         setFavoriteList(res.data);
       }
     });
   }, []);

   return (
     <div>
       {favoriteList.map(({ masterclass_Id }) => (
         <VideoSample
           masterclassId={masterclass_Id}
           key={`${masterclass_Id}_${userId}`}
         />
       ))}
     </div>
   );
 }
