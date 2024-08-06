import React from 'react'
import Image from 'next/image'
function Hero() {
  return (
    <>
<div className='w-1/2 lg:mx-auto md:mx-12'>
<div className='mt-10'>
<Image src={'/logo.avif'} height={80} width={80} /> 

<p className='text-xl font-bold mt-8'>VideoDubber - Fast Video Translator</p>
</div>
<div>

</div>
</div>
    </>
  )
}

export default Hero