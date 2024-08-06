import Image from 'next/image';
import Banner from './Banner';

const VideoDubberCard = () => {
    return (
        <>

            <Banner />
            <div className="bg-white p-4 rounded-md max-w-3xl mx-auto">
                {/* <div className="bg-green-500 text-white text-center py-2">
        <span>Hey there! Please, complete your onboarding.</span>
        <button className="ml-2 bg-white text-green-500 px-2 py-1 rounded-md">
          Complete onboarding
        </button>
      </div> */}
                <div className="py-4">
                    <nav className="text-sm text-gray-600">

                        <a href="#" className="hover:text-blue-600 text-gray-400">Home</a> &gt; <a href="#" className="hover:text-blue-600 text-gray-400">Product</a> &gt; <span>VideoDubber - Fast Video Translator</span>
                    </nav>
                    <div className='lg:flex '>

                    <div className='lg:w-2/3 w-full pr-4 '>

                            <Image src="/logo.avif" alt="Lip Icon" width={80} height={80} className='mt-8' />
                            <div className="mt-4 flex items-center">
                                <h1 className="ml-2 text-[22px] font-semibold">VideoDubber - Fast Video Translator</h1><Image height={20} width={20} src='/drop.svg'/>
                            </div>
                            <p className="mt-2 font-light text-[20px] text-gray-900">Translate videos in your own voice, globalize in a click!</p>
                     </div>

                 
                    <div className="mt-4 flex items-center lg:w-[18rem] lg:mt-[10rem]">
                        <button className="border-1 border border-gray-300 text-black px-4 py-5 outline-2 rounded-md mr-2 w-[20rem]">
                            <span className='flex mx-3 px-1'>Visit <Image height={20} width={20} src='/drop.svg'/>
                                </span>
                        </button>
                        <button  className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white border-red-600 border-1 border w-[40rem] py-5 rounded-md cursor-pointer text-[13px] ">
                            <span className="  text-white ">▲</span> UPVOTE 161
                        </button>

                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VideoDubberCard;
