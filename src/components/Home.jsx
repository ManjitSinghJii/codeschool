import Navbar from './Navbar'
import Footer from './Footer'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";


const Home = ()=> {
    return (
        <div>
            <Navbar/>
                <div>
                    <header className='grid md:grid-cols-2 md:p-24 p-10 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% animate__animated animate__fadeIn'>
                    <div>
                            <img 
                                src="./images/student.jpg" alt="student" 
                                className='w-3/4 rounded-full animate__animated animate__pulse border border-2'
                            />
                        </div>

                        <div className='flex flex-col gap-8 justify-center'>
                            <h1 className='text-7xl font-bold text-white'>"Say Hello !" Manjit Singh</h1>
                            <p className='text-2xl font-semibold'>Enjoy complete digital learning experience with JIS College of Engineering</p>
                            <div className='flex gap-6'>
                                <button className='bg-[#370442] text-white px-12 py-4 rounded-md text-lg font-semibold hover:bg-orange-500'>Learn More</button>
                                <button className='bg-[#CC7BA8] text-white px-12 py-4 rounded-md text-lg font-semibold hover:bg-blue-500'>Watch Video</button>
                            </div>
                        </div>
                    </header>

                    <div className='p-24'>
                        <h1 className='text-center text-4xl font-bold'>Benifits & Advantages</h1>
                        <p className='text-gray-600 text-center mt-4 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eos, fuga exercitationem sapiente error provident odio aut dolorum ut voluptate quae, iusto cum. Doloribus blanditiis maxime, quos necessitatibus iusto magni cumque repellendus veniam quia aperiam</p>
                        <div className='w-11/12 mx-auto mt-12 grid grid-cols-3 gap-8'>

                            <div className='border shadow-lg rounded-md p-4 text-center'>
                                <i className="ri-artboard-line text-6xl "></i>
                                <h1 className='text-2xl font-semibold mb-2'>Great Faculty</h1>
                                <p className='text-gray-600 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, facilis?</p>

                            </div>

                            <div className='border shadow-lg rounded-md p-4 text-center'>
                                <i className="ri-edit-box-line text-6xl "></i>
                                <h1 className='text-2xl font-semibold mb-2'>Latest Curriculum</h1>
                                <p className='text-gray-600 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, facilis?</p>

                            </div>

                            <div className='border shadow-lg rounded-md p-4 text-center'>
                                <i className="ri-tree-line text-6xl "></i>
                                <h1 className='text-2xl font-semibold mb-2'>Green Environment</h1>
                                <p className='text-gray-600 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, facilis?</p>

                            </div>

                        </div>
                    </div>

                    <div className='grid grid-cols-2 p-12'>
                        <div>
                        <Swiper className="w-8/12">
                                <SwiperSlide>
                                    <img src="./images/s1.jpg" alt="" className='w-full' />
                                </SwiperSlide>
                                
                                <SwiperSlide>
                                    <img src="./images/s3.jpg" alt="" className='w-full' />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="./images/s2.jpg" alt="" className='w-full' />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="./images/s4.jpg" alt="" className='w-full'/>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="./images/s5.jpg" alt="" className='w-full' />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src="./images/s6.jpg" alt="" className='w-full' />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className='flex flex-col gap-8 justify-center'>
                            <h1 className='text-7xl font-bold text-green-600'>"Say Hello !" Manjit Singh</h1>
                            <p className='text-2xl font-semibold'>Enjoy complete digital learning experience with JIS College of Engineering</p>
                            <div className='flex gap-6'>
                                <button className='bg-red-500 text-white px-12 py-4 rounded-md text-lg font-semibold hover:bg-[#394361]'>Learn More</button>
                                <button className='bg-[#3aa9c4] text-white px-12 py-4 rounded-md text-lg font-semibold hover:bg-[#370442]'>Watch Video</button>
                            </div>
                        </div>
                    </div>

                </div>
            <Footer/>
        </div>
    )
}

export default Home;