import React, { useState } from 'react'


function Index() {
  const[page,setPage]=useState(1)
  const [showMenu, setShowMenu] = useState(false)
  
  const menuClick=(e)=>{
    if(showMenu===false)
   setShowMenu(true)
   else{
    setShowMenu(false)
   }
  }

  // const next=()=>{
  //   setPage(2)
  // }

  // const previous = () => {
  //   setPage(1)
  // }

const submit=()=>{
  console.log("submitted")
}
  return (
  <>
  

  <div className='bg-black flex h-14 items-center w-screen  justify-evenly'>
    
    <div className='handles  md:hidden w-[30%] '>
      <ul className='flex justify-evenly'>
            <li className='bg-yellow-300 w-10 mt-1 h-10 hover:bg-blue-700 hover:cursor-pointer'> <img src='/facebook.png' className='w-auto h-auto'></img>  </li>
            <li className='bg-yellow-300 mt-1 w-10 h-10 hover:bg-blue-500 hover:cursor-pointer'><img src='/twitter.png' className='w-auto h-auto'></img></li>
            <li className='bg-yellow-300 mt-1  w-10 h-10 hover:bg-[#f30086] hover:cursor-pointer'><img src='/instagram.png' className='w-auto h-auto'></img></li>
      </ul>
    </div>
        
    <div className='contackAndLogin w-[40%] md:w-screen    '>
          
        <ul className='flex justify-evenly items-center '>
            <li className='  md:justify-start' ><img src='/phone-icons.png' className='w-auto' ></img> </li>
            
            <li className=' text-yellow-300 md:justify-start md:text-xs text-sm font-normal whitespace-nowrap '>Toll Free</li>
           
            <li className='text-white md:justify-start font-normal md:text-xs text-sm '>92739239843</li>
           
            <li className='md:ml-[35%]' ><button  class="h-[90%] md:h-[50%] w-32 md:w-auto bg-transparent hover:bg-yellow-300 text-yellow-300 font-semibold hover:text-black py-2 px-4 border border-yellow-300 hover:border-transparent rounded">
             Login
            </button></li>
      </ul>
    </div>

  </div>

  <div className='h-[30%]   justify-evenly flex'>
       
        <div className='flex justify-between w-screen font-bold text-lg text-[#97595f] '>
      <img  src='/logo.png' className='h-28'></img>
     
      <div className='flex w-[30%]  justify-around md:hidden mt-7 '>
        <a href='/groupOrder'> Group order</a>
        <a href='/call'> Request for call </a>
        <div> 0 items : 0 rupees</div>
      </div>

    
          <div className='dm:hidden flex items-center justify-center w-[30%]'>  
            <button onClick={menuClick} className=' bg-black w-10 h-10 rounded-lg justify-center flex item-center'>          <svg className="block self-center h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" aria-hidden="true">
              <path stroke-linecap="round" stroke-LineJoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
</button>
                  
          </div>
      
      
    </div>

    
  </div>

      {showMenu && <span>
        <ul className='font-bold text-xl text-amber-900 p-4'>
        
          <li className='h-10'><a href='/groupOrder'> Group order</a></li><hr></hr>
          <li className='h-10'><a href='/call'> Request for call </a></li><hr></hr>
          <li > 0 items : 0 rupees</li>
        </ul>
      </span>}

  <div className='h-72 bg-red-400 text-center flex justify-center items-center text-yellow-300 text-4xl font-bold'>AB TRAIN MAI THALI NAHI VARIETY MILEGI!!</div>

      <div className='h-48 bg-[#b32024] flex flex-col justify-evenly'>
       
        <div className='flex  justify-center h-12' >
          <form className='m-auto w-full contents  h-10' onSubmit={submit} >
          <input type='text' className='min-w-[40%] text-gray-700' placeholder='ENTER PNR NO'></input>
          <button className='min-w-[10%]  p-1 bg-yellow-300 font-semibold text-[#b32024]'>ORDER NOW</button>

        </form></div>
        <div className='text-yellow-300  text-xl text-center'>Authorised by IRCTC partner</div>

      </div>

        <div className=' h-36 mt-3 bg-white text-black font-semibold text-2xl text-center'>
        Apply coupon <span className='border-dotted border-[#b32024] border-2'>FIRSTBITE</span> on checkout and get flat Rs.100 Off on your order!! 
        </div>

      <div className=' bg-[#e2e2e1] h-fit text-center text-black font-bold text-5xl'>
        How it works
        <div className='flex justify-evenly md:flex md:flex-col md:items-center'>
          <div className='bg-white w-80 flex flex-col justify-evenly h-[34rem] mt-9 font-normal text-2xl'>
            Step 1
            <div className='p-8 font-bold text-lg'><img src='/location.png' className='h-28 m-auto'></img> Select station <div className='text-black text-center font-normal font-sm'>Choose a suitable station to get your food delivered.</div></div>

        </div>
          
          <div className='bg-white flex flex-col justify-evenly w-80 h-[34rem] mt-9  font-normal text-2xl'>
            Step 2
            <div className='p-8 font-bold text-lg'><img src='/cart.png' className='h-28 m-auto'></img>Place Order <div className='text-black text-center font-normal font-sm'>Choose from a wide variety of delicious meals.</div></div>

          </div>
          
          <div className='bg-white flex flex-col justify-evenly w-80 h-[34rem] mt-9  font-normal text-2xl'>
            Step 3
            
            <div className=' p-8 font-bold text-lg'><img src='/sms.png' className='h-28 m-auto'></img>Real time order status<div className='text-black text-center font-normal font-sm'>Track your food order in real time right from your berth.</div></div>

          </div>
          
          <div className='bg-white flex flex-col justify-evenly w-80 h-[34rem] mt-9  font-normal text-2xl'>
            Step 4
            <div className='p-8 font-bold text-lg'><img src='/seat.png' className='h-28 m-auto'></img>On-Seat Delivery <div className='text-black text-center font-normal font-sm'>Enjoy yummy meals delivered at the right time!</div></div>

          </div>

      </div>
      </div>

    
      <div className='md:flex md:flex-col md:items-center h-auto p-6 text-white text-3xl  bg-[#1a1915] flex justify-evenly'>
       
          
          Ads:
          {page===1?<>
          <div className=' bg-slate-300 h-64 w-96 mt-20 '></div>
            <div className=' bg-slate-300 h-64 w-96 mt-20'></div>
            <div className=' bg-slate-300 h-64 w-96 mt-20 '></div></>:
          
          <>
          <div className=' bg-slate-300 h-64 w-96 mt-20'></div>
          <div className=' bg-slate-300 h-64 w-96 mt-20 '></div>
          <div className=' bg-slate-300 h-64 w-96 mt-20 '></div>
          </>
          }

        
      </div>

        <div className=' bg-[#373737] flex justify-evenly md:flex md:flex-col md:items-center '>

          <div className='w-72 ml-10 mt-5 mb-5 text-white'>
            <div className='font-bold text-lg h-12'>Company</div>
            <div className='font-normal text-sm h-10'>About us</div>
            <div className='font-normal text-sm h-10'>Career</div>
            <div className='font-normal text-sm h-10'>Our Outlets</div>
            <div className='font-normal text-sm h-10'>Director Message</div></div>
          
          <div className='w-72 ml-10 mt-5 mb-5 text-white '>
            <div className='font-bold text-lg h-12'>Help & Support</div>
            <div className='font-normal text-sm h-10'>FAQs</div>
            <div className='font-normal text-sm h-10'>Feedback/Complains</div>
            <div className='font-normal text-sm h-10'>Customer Reviews</div>
          </div>
          
          <div className='w-72 ml-10 mt-5 mb-5 text-white '>
            <div className='font-bold text-lg h-12'>Partnerships</div>
            <div className='font-normal text-sm h-10'>Restaurant Signup</div>
          </div>
         
          <div className='w-72 ml-10 mt-5 mb-5 text-white'>
            <div className='font-bold text-lg h-12'>About us</div>
            <div className='font-normal text-sm h-10'>Travel is fun and when it comes to trai travel, we go into the bypaths and un- trodden depths of wilderness and travel explorations to tell the world the glories of our journey !
          </div> <ul className='flex justify-evenly  mt-14 w-[8rem]'>
            <li className='bg-yellow-300  w-7 mt-1 h-7 hover:bg-blue-700 hover:cursor-pointer'> <img src='/facebook.png' className='w-auto h-auto'></img>  </li>
            <li className='bg-yellow-300 mt-1 w-7 h-7 hover:bg-blue-500 hover:cursor-pointer'><img src='/twitter.png' className='w-auto h-auto'></img></li>
            <li className='bg-yellow-300 mt-1  w-7 h-7 hover:bg-[#f30086] hover:cursor-pointer'><img src='/instagram.png' className='w-auto h-auto'></img></li>
          </ul>
              </div>
            </div>
          

        <div className='h-14 bg-[#b32024] text-sm text-white flex justify-center items-center'>
          &#169; Copyright "COMESUM" 2018 All Rights Reserved.
        </div>


      
     

  </>
  )
}

export default Index