import person from "../../assets/images/about_us/person.jpg"
import part from "../../assets/images/about_us/parts.jpg"

const Section1 = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-400">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="relative w-1/2">
                        <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                        <img src={part} className="w-1/2 top-1/2 right-8 absolute rounded-lg shadow-2xl" />
                    </div>
                    <div className="w-1/2">
                        <h1 className="text-2xl font-bold text-red-500">About Us</h1>
                        <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <button className="btn btn-primary">Get More Info</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Section1
