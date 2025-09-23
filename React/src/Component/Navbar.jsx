import React from 'react'
function Navbar({index}){
    return(
        <div className="w-full py-3 px-4 flex justify-between items-center">
            <h1>Orange</h1>
            <div className="flex p-2 px-4 bg-orange-600 rounded-full gap-4 text-black">
                <h3>Favorites</h3>
                <h4>{index}</h4>
            </div>
        </div>
    )

}
export  default Navbar;