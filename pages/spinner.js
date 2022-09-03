import React from 'react'

function Spinner() {
  return (
    
  <div className='wheel h-80 w-80 rounded-full overflow-hidden bg-slate-600 relative m-auto mt-80'>
          <div className=''>
          <div className='bg-red-600   rotate-45'> OFFER1</div>
          <div className='bg-blue-600    rotate-90'>OFFER2</div>
          <div className='bg-orange-600    -rotate-45'>OFFER3</div>
          <div className='bg-green-600 '>OFFER4</div>
          </div> 

         
  </div>
        
  )

}

export default Spinner