import React from 'react'

function Banner() {
  return (
   <>
   <div class="bg-white pb-3 sm:pb-4 lg:pb-6">
  {/* <!-- banner - start --> */}
  <div class="relative flex flex-wrap bg-[#599d6a] px-4 py-3 sm:flex-nowrap sm:items-center sm:justify-center sm:gap-3 sm:pr-8 md:px-8">
    <div class="order-1 mb-2 inline-block w-11/12 max-w-screen-sm text-sm text-white sm:order-none sm:mb-0 sm:w-auto md:text-base">Hey there! Please, complete your onboarding.</div>

    <a href="#" class="order-last inline-block w-full whitespace-nowrap rounded-lg bg-gray-100 px-2 py-1 text-center text-xs font-semibold text-black outline-none hover:border-red-500 border transition duration-100  focus-visible:ring sm:order-none sm:w-auto outline-1 md:text-sm">Complete onboarding</a>    
  </div>
  {/* <!-- banner - end --> */}
</div>
   </>
  )
}

export default Banner