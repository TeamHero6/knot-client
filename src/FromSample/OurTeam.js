import React from 'react';
import Habib from '../Image/Team/Habib.jpg'
import Monir from '../Image/Team/Monir.jpg'
import Seam from '../Image/Team/Seam.jpg'
import Rahad from '../Image/Team/Rahad.jpg'
import Kabbo from '../Image/Team/Kabbo.jpg'


const OurTeam = () => {
    return (
        <div>

            <div class="container flex justify-center mx-auto pt-16">
            <div className="">
                    <h2 className="text-xl md:text-4xl font-semibold mb-5 text-gray-600">
                        Meet our team
                    </h2>
                </div>
            </div>
            <div class="w-full  dark:bg-gray-800 px-10 pt-10">
                <div class="container mx-auto">
                    <div role="list" aria-label="Behind the scenes People " class="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                        <div role="listitem" class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                            <div class="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
                                <div class="absolute -mt-20 w-full flex justify-center">
                                    <div class="h-32 w-32">
                                        <img src={Habib} alt="" role="img" class="rounded-full object-cover h-full w-full shadow-md" />
                                    </div>
                                </div>
                                <div class="px-6 mt-16">
                                    <h1 class="font-bold dark:text-white text-2xl text-center mb-1">Abdullah Al Habib</h1>
                                    <p class="text-gray-800 dark:text-white text-sm text-center">Team Leader & Project Designer</p>
                                    {/* <p class="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p> */}
                                    <div class="w-full flex justify-center pt-5 pb-5">
                                        <a href="javascript:void(0)" class="mx-5">
                                            <div aria-label="Github" role="img">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg" alt="github" />
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)" class="mx-5">
                                            <div aria-label="Twitter" role="img">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg" alt="twitter" />
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)" class="mx-5">
                                            <div aria-label="Instagram" role="img">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg" alt="instagram" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div role="listitem" class="xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                            <div class="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
                                <div class="absolute -mt-20 w-full flex justify-center">
                                    <div class="h-32 w-32">
                                        <img src={Monir} alt="" role="img" class="rounded-full object-cover h-full w-full shadow-md" />
                                    </div>
                                </div>
                                <div class="px-6 mt-16">
                                    <h1 class="font-bold dark:text-white text-2xl text-center mb-1">MD MONIR HOSSAIN RABBY</h1>
                                    <p class="text-gray-800 dark:text-white text-sm text-center">GitHub Manager, Project Consultant & Problem Solver</p>
                                    {/* <p class="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">The emphasis on innovation and technology in our companies has resulted in a few of them establishing global benchmarks in product design and development.</p> */}
                                    <div class="w-full flex justify-center pt-5 pb-5">
                                        <a href="javascript:void(0)" class="mx-5">
                                            <div aria-label="Github" role="img">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg" alt="github" />
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)" class="mx-5">
                                            <div aria-label="Twitter" role="img">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg" alt="twitter" />
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)" class="mx-5">
                                            <div aria-label="Instagram" role="img">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg" alt="instagram" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div role="listitem" class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                            <div class="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
                                <div class="absolute -mt-20 w-full flex justify-center">
                                    <div class="h-32 w-32">
                                        <img src={Seam} alt="" role="img" class="rounded-full object-cover h-full w-full shadow-md" />
                                    </div>
                                </div>
                                <div class="px-6 mt-16">
                                    <h1 class="font-bold dark:text-white text-2xl text-center mb-1">Md Mobashirul Alam Seam</h1>
                                    <p class="text-gray-800 dark:text-white text-sm text-center">Tech Supporter & Full Stack Developer</p>
                                    {/* <p class="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">Our services encompass the assessment and repair of property damage caused by water, fire, smoke, or mold. We can also be a part of the restoration.</p> */}
                                    <div class="w-full flex justify-center pt-5 pb-5">
                                        <a href="javascript:void(0)" class="mx-5">
                                            <div aria-label="Github" role="img">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg" alt="github" />
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)" class="mx-5">
                                            <div aria-label="Twitter" role="img">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg" alt="twitter" />
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)" class="mx-5">
                                            <div aria-label="Instagram" role="img">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg" alt="instagram" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div role="listitem" class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                            <div class="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
                                <div class="absolute -mt-20 w-full flex justify-center">
                                    <div class="h-32 w-32">
                                        <img src={Rahad} alt="" role="img" class="rounded-full object-cover h-full w-full shadow-md" />
                                    </div>
                                </div>
                                <div class="px-6 mt-16">
                                    <h1 class="font-bold dark:text-white text-2xl text-center mb-1">Rahad Islam </h1>
                                    <p class="text-gray-800 dark:text-white text-sm text-center">Full Stack Developer</p>
                                    {/* <p class="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">An avid open-source developer who loves to be creative and inventive. I have 20 years of experience in the field.</p> */}
                                    <div class="w-full flex justify-center pt-5 pb-5">
                                        <a href="javascript:void(0)" class="mx-5">
                                            <div aria-label="Github" role="img">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg" alt="github" />
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)" class="mx-5">
                                            <div aria-label="Twitter" role="img">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg" alt="twitter" />
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)" class="mx-5">
                                            <div aria-label="Instagram" role="img">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg" alt="instagram" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div role="listitem" class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                            <div class="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
                                <div class="absolute -mt-20 w-full flex justify-center">
                                    <div class="h-32 w-32">
                                        <img src={Kabbo} alt="" role="img" class="rounded-full object-cover h-full w-full shadow-md" />
                                    </div>
                                </div>
                                <div class="px-6 mt-16">
                                    <h1 class="font-bold dark:text-white text-2xl text-center mb-1">Ahsanul Hasan Kabbo </h1>
                                    <p class="text-gray-800 dark:text-white text-sm text-center">Full Stack Developer</p>
                                    {/* <p class="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">Product designer with interests in immersive computing and XR, political ventures, and emerging technologies. Able to take ideas and give them a life.</p> */}
                                    <div class="w-full flex justify-center pt-5 pb-5">
                                        <a href="javascript:void(0)" class="mx-5">
                                            <div aria-label="Github" role="img">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg" alt="github" />
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)" class="mx-5">
                                            <div aria-label="Twitter" role="img">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg" alt="twitter" />
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)" class="mx-5">
                                            <div aria-label="Instagram" role="img">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg" alt="instagram" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div role="listitem" class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative  sm:mb-0 xl:max-w-sm lg:w-2/5">
                            <div class="rounded overflow-hidden  bg-white ">
                                <div class="absolute -mt-0 w-full flex justify-center">
                                    <div class="h-0 w-32">
                                    </div>
                                </div>
                                <div class="px-0 mt-0">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurTeam;