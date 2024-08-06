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

                        <a href="#" className="hover:underline">Home</a> &gt; <a href="#" className="hover:underline">Product</a> &gt; <span>VideoDubber - Fast Video Translator</span>
                    </nav>
                    <div className='lg:flex'>

                    <div className='lg:w-1/2 w-full '>

                            <Image src="/logo.avif" alt="Lip Icon" width={80} height={80} className='mt-12' />
                            <div className="mt-4 flex items-center">
                                <h1 className="ml-2 text-2xl font-semibold">VideoDubber - Fast Video Translator</h1>
                            </div>
                            <p className="mt-2 font-thin text-2xl text-gray-900">Translate videos in your own voice, globalize in a click!</p>
                     </div>

                 
                    <div className="mt-4 flex items-center lg:w-1/2 lg:mt-[14rem]">
                        <button className="border-1 border border-gray-300 text-black px-4 py-2 outline-2 rounded-md mr-2 w-2/3">
                            Visit &darr;
                        </button>
                        <a  className="hover:bg-gradient-to-r from-pink-500 to-yellow-500 hover:text-white border-red-600 border-1 border px-8 py-2 rounded-md flex items-center w-full cursor-pointer">
                            <span className="mr-1 ml-4 text-sm text-red-500 ">▲</span> UPVOTED 161
                        </a>

                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VideoDubberCard;
