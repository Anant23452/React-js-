import React from "react";
import Box from "./Box";

function Boxes({ users }) {
  console.log("users in Boxes.jsx:", users); // Debugging ke liye

  // ✅ Safety check - agar users undefined ho to empty array use karo
  // const safeUsers = Array.isArray(users) ? users : [];

  return (
    <div className="w-full h-96 max-h-72 overflow-auto p-5 flex gap-4 justify-center flex-wrap">
      {users.map((users, index) => {
       return  <Box key={index}  />
      }
       
      )}
    </div>
  );
}

export default Boxes;
