
import ban1 from "../assets/images/banner/1.jpg"
import ban2 from "../assets/images/banner/2.jpg"
import ban3 from "../assets/images/banner/3.jpg"
import ban4 from "../assets/images/banner/4.jpg"

const Banner = () => {
    return (
        <div className="">
            <div className="carousel w-full rounded-lg h-[600px] ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={ban1} className="w-full" />
                    <div className="absolute items-center h-full w-1/2 flex justify-start  space-y-6 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className="  p-4 ">
                            <h2 className="text-6xl text-white">Affordable Price For Car Servicing</h2>
                            <p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="space-x-4 mt-4">
                            <button className="btn btn-secondary">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0  ">
                        <a href="#slide4" className="btn btn-circle mr-2">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-red-400 text-white">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={ban2} className="w-full" />
                    <div className="absolute items-center h-full w-1/2 flex justify-start  space-y-6 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className="  p-4 ">
                            <h2 className="text-6xl text-white">Affordable Price For Car Servicing</h2>
                            <p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="space-x-4 mt-4">
                            <button className="btn btn-secondary">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
                        <a href="#slide1" className="btn btn-circle mr-2">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-red-400 text-white">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={ban3} className="w-full" />
                    <div className="absolute items-center h-full w-1/2 flex justify-start  space-y-6 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className="  p-4 ">
                            <h2 className="text-6xl text-white">Affordable Price For Car Servicing</h2>
                            <p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="space-x-4 mt-4">
                            <button className="btn btn-secondary">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
                        <a href="#slide2" className="btn btn-circle mr-2">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-red-400 text-white">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                <img src={ban4} className="w-full" />
                <div className="absolute items-center h-full w-1/2 flex justify-start  space-y-6 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className="  p-4 ">
                            <h2 className="text-6xl text-white">Affordable Price For Car Servicing</h2>
                            <p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="space-x-4 mt-4">
                            <button className="btn btn-secondary">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
                        <a href="#slide3" className="btn btn-circle mr-2">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-red-400 text-white">❯</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Banner
