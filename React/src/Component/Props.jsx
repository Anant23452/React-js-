import React from 'react'

function Props({chacha,color}) {
  return (

    //props use hote hai apke componets ko reusable bannane ke liye, consider karo apke pass ek button hai and aplko us button ko alag alga jagah daalna hai app mein, to app ek button compnet banaye and suka data hard codde karne ki jagah parent component se send karde and child cmopnet par use kar lete hai, isse kya hoga ki agar apko button ka data change karna hai to apko sirf parent component mein change karna hai and child component mein nahi, isse apka code bhi chota hoga and easily maintainable bhi hoga
    <button className={`px-3 py-2 ${color} rounded-half  text-xs m-2`}>{chacha}</button>
  )
}

export default Props