import React from 'react'

const Head = () => {
  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-md'>
        <div className='flex col-span-1 my-2'>
            <img className='h-10' alt='menu' src='https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg'/>
            <img className='h-8 my-1 mx-4' alt='yotube-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/1280px-YouTube_Logo_%282013-2017%29.svg.png'/>
        </div>
        <div className='col-span-10'>
            <input className='w-3/4 p-2 m-2 px-4 outline-none border border-black rounded-full' type='text' placeholder='Search Videos' />
            <button className='border border-l-black border-y-black p-2 m-2 relative right-14 rounded-r-full hover:bg-gray-100 transition-all'>🔍</button>
        </div>
        <div className='col-span-1 my-2'>
            <img className='h-8' alt='user-icon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&s'/>
        </div>
    </div>
  )
}

export default Head