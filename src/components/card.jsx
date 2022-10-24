import React from 'react'

const card = () => {
  return (
   <>
   <section class="bg-grey-lightest py-8">
  <div class="w-full max-w-2xl ml-auto mr-auto mt-8">
    <div class="flex flex-wrap -mx-6 -my-6">
      <div class="w-full lg:w-1/2 px-6 py-6 text-center">
        <div class="bg-white rounded shadow-lg overflow-hidden p-8">
          <div class="rounded-full h-64 w-64 flex items-center justify-center bg-grey-light mx-auto mb-8"></div>
          <div class="font-bold text-xl mb-2">John Doe</div>
          <p class="text-grey-darker text-base mb-4">Senior Developer, Co-Founder</p>
          <button class="bg-transparent hover:bg-blue text-blue-dark rounded-full font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent ">Contact</button>
        </div>
      </div>
    
      <div class="w-full lg:w-1/2 px-6 py-6 text-center">
        <div class="bg-white rounded shadow-lg overflow-hidden p-8">
          <div class="rounded-full h-64 w-64 flex items-center justify-center bg-grey-light mx-auto mb-8"></div>
          <div class="font-bold text-xl mb-2">Jane Doe</div>
          <p class="text-grey-darker text-base mb-4">UX and UI Specialist, Co-Founder</p>
          <button class="bg-transparent hover:bg-blue text-blue-dark rounded-full font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent ">Contact</button>
        </div>
      </div>
    </div>
  </div>
</section></>
  )
}

export default card