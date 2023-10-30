import { useEffect, useState } from "react"
import Servis from "./Servis";


const Section2 = () => {
  const [services, setSurvices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/services")
      .then(res => res.json())
      .then(data => setSurvices(data));
  })
  return (
    <div>
      <div className="text-center">
        <h3 className="text-2xl font-bold text-red-500">Service</h3>
        <h3 className="text-4xl font-bold">Our Service Area</h3>
        <p>the majority have suffered alteration in some form, by injected humour, or randomised <br/> words which don't look even slightly believable. </p>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 ">
        {
          services.map(service => <Servis key={service._id} service={service}></Servis>)
        }
      </div>
      <div className="items-center justify-center m-4">
        <button className="btn btn-outline items-center text-orange-500">More Services</button>
      </div>

    </div>
  )
}

export default Section2
