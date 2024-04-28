import React from 'react'
import { NewspaperIcon, PhoneIcon, SupportIcon } from '@heroicons/react/outline'
import dogGrooming from "../../assets/dogGrooming.jpg"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { serviceRequest } from 'services/operations/authAPI'
import long from "../../assets/long.jpeg"
import axios from 'axios';

const HeaderServices = () => {

  const supportLinks = [
    {
      name: 'Pet Boarding',
      href: '#',
      description:
        'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
      icon: PhoneIcon,
    },
    {
      name: 'Pet Feeding',
      href: '#',
      description:
        'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
      icon: SupportIcon,
    },
    {
      name: 'Pet Grooming',
      href: '#',
      description:
        'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
      icon: NewspaperIcon,
    },
    {
      name: 'Pet Training',
      href: '#',
      description:
        'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
      icon: NewspaperIcon,
    },
    {
      name: 'Pet Exercise',
      href: '#',
      description:
        'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
      icon: NewspaperIcon,
    },
    {
      name: 'Pet Treatment',
      href: '#',
      description:
        'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
      icon: NewspaperIcon,
    },  
  ]

  
  
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // const [service, setService] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');
  // const [appointmentDate, setAppointmentDate] = useState('');
  // const [petName, setPetName] = useState('');
  // const [petType, setPetType] = useState('');
  // const [petBreed, setPetBreed] = useState('');
  // const [petSex, setPetSex] = useState('');
  // const [petAge, setPetAge] = useState('');
  // const [petMedicalHistory, setPetMedicalHistory] = useState('');

  const [formData, setFormData] = useState({
    service: 'Pet-sitter',
    email: 'harsh.dugar22@spit.ac.in',
    message: 'fsaf',
    appointmentDate: '22-09-2021',
    petName: 'fafd',
    petType: 'fafa',
    petBreed: 'fasf', 
    petSex: 'Male', 
    petAge: '5', 
    petMedicalHistory: 'faf',
  })

  // const {service, email, message, appointmentDate, petName, petType, petBreed, petSex, petAge, petMedicalHistory} = formData;

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (event) => {
    console.log("Entered handle submit");
    event.preventDefault();
    
    try {
      console.log("Entered Try Block , data : ", formData);
      axios.post('/message/serviceRequest', formData)
      .then((res) => { console.log("Response : ", res)})
      .catch((res) => { console.log("Error : ", res)})

      const res = await serviceRequest(formData, navigate);
      console.log("Result : " , res);
      console.log("Sent Request")
      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnChange = (e) => {
    console.log("handle change called : ", e.target.value, e.target.name);

    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }


   return (
      <div className="bg-white">
        {/* Header */}
        <div className="relative pb-32 bg-gray-800">

         {/* Heading */}
        <div className='mx-auto'>

         <div className='mx-auto'>
            <div className="absolute inset-0">
               <img
               className="w-full h-full object-cover"
               src={long}
               alt=""
               />
               <div className="absolute inset-0 bg-gray-400 mix-blend-multiply" aria-hidden="true" />
            </div>

               {/* Desc */}
            <div className="relative max-w-7xl  py-24 px-4 sm:py-32 sm:px-6 lg:px-8 mx-auto">
               <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl mx-auto">Our Services</h1>
               <p className="mt-9 max-w-3xl text-xl text-gray-300  mx-auto">
               Discover a variety of pet care products and accessories, ensuring your pets are happy and healthy. From food to toys, we have everything you need for your furry friends!

               </p>
            </div>
         </div>

         {/* <div>
            <img src={dogGrooming} />
         </div> */}
        </div>


        </div>
  
        {/* Overlapping cards */}
        <section
          className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
          aria-labelledby="contact-heading"
        >
          <h2 className="sr-only" id="contact-heading">
            Contact us
          </h2>
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
            
            {/* Service 1 */}
            <div  className="flex flex-col bg-white rounded-2xl shadow-xl">
                <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                  <div className="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
                    <icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">{supportLinks[0].name}</h3>
                  <p className="mt-4 text-base text-gray-500">{supportLinks[0].description}</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                  <button onClick={() => openModal()}><a href={supportLinks[0].link} className="text-base font-medium text-indigo-700 hover:text-indigo-600">
                      Contact us<span aria-hidden="true"> &rarr;</span>
                    </a>
                  </button>
                </div>
            </div>

            

            {/* Service 2 */}
            <div  className="flex flex-col bg-white rounded-2xl shadow-xl">
                <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                  <div className="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
                    <icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">{supportLinks[1].name}</h3>
                  <p className="mt-4 text-base text-gray-500">{supportLinks[1].description}</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <button onClick={() => openModal()}><a href={supportLinks[1].link} className="text-base font-medium text-indigo-700 hover:text-indigo-600">
                    Contact us<span aria-hidden="true"> &rarr;</span>
                  </a></button>
                </div>
            </div>

            {/* Service 3 */}
            <div  className="flex flex-col bg-white rounded-2xl shadow-xl">
                <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                  <div className="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
                    <icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">{supportLinks[2].name}</h3>
                  <p className="mt-4 text-base text-gray-500">{supportLinks[2].description}</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <button onClick={() => openModal()}><a href={supportLinks[2].link} className="text-base font-medium text-indigo-700 hover:text-indigo-600">
                    Contact us<span aria-hidden="true"> &rarr;</span>
                  </a></button>
                </div>
            </div>

            {/* Service 4 */}
            <div  className="flex flex-col bg-white rounded-2xl shadow-xl  mt-[2rem]">
                <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                  <div className="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
                    <icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">{supportLinks[3].name}</h3>
                  <p className="mt-4 text-base text-gray-500">{supportLinks[3].description}</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <button onClick={() => openModal()}><a href={supportLinks[3].link} className="text-base font-medium text-indigo-700 hover:text-indigo-600">
                    Contact us<span aria-hidden="true"> &rarr;</span>
                  </a></button>
                </div>
            </div>

            {/* Service 5 */}
            <div  className="flex flex-col bg-white rounded-2xl shadow-xl mt-[2rem]">
                <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                  <div className="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
                    <icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">{supportLinks[4].name}</h3>
                  <p className="mt-4 text-base text-gray-500">{supportLinks[4].description}</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <button onClick={() => openModal()}><a href={supportLinks[5].link} className="text-base font-medium text-indigo-700 hover:text-indigo-600">
                    Contact us<span aria-hidden="true"> &rarr;</span>
                  </a></button>
                </div>
            </div>

            {/* Service 6 */}
            <div  className="flex flex-col bg-white rounded-2xl shadow-xl mt-[2rem]">
                <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                  <div className="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
                    <icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">{supportLinks[5].name}</h3>
                  <p className="mt-4 text-base text-gray-500">{supportLinks[5].description}</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                  <button onClick={() => openModal()}><a href={supportLinks[5].link} className="text-base font-medium text-indigo-700 hover:text-indigo-600">
                    Contact us<span aria-hidden="true"> &rarr;</span>
                  </a></button>
                </div>
            </div>


          </div>

        </section>

        {/* Modal */}
        {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-75 z-[1000] overflow-auto backdrop-blur-sm">
        <div className="bg-white p-8 rounded-lg max-w-md w-full">
          <h5 className="mb-1 text-center text-lg font-medium">Book Appointment</h5>
          <div>
            <div className="mb-1">
              <label htmlFor="serviceInput" className="form-label">Service</label>
              <input type="text" className="form-control outline-none border border-gray-300 rounded px-3 py-2 w-3/4" name="service" id="serviceInput" value={formData.service} onChange={handleOnChange} required />
            </div>
            <div className="mb-1">
              <label htmlFor="emailInput" className="form-label">Email address</label>
              <input type="email" className="form-control outline-none border border-gray-300 rounded px-3 py-2 w-3/4" id="emailInput" name="email" value={formData.email} onChange={handleOnChange} aria-describedby="emailHelp" required />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-1">
              <label htmlFor="messageInput" className="form-label">Message</label>
              <textarea className="form-control outline-none border border-gray-300 rounded px-3 py-2 w-3/4" id="messageInput" name="message" value={formData.message} onChange={handleOnChange} rows="3"></textarea>
            </div>
            <div className="mb-1">
              <label htmlFor="appointmentDateInput" className="form-label">Appointment Date</label>
              <input type="date" className="form-control outline-none border border-gray-300 rounded px-3 py-2 w-3/4" id="appointmentDateInput" name="appointmentDate" value={formData.appointmentDate} onChange={handleOnChange} required />
            </div>
            <h4 className="mb-1 text-lg font-semibold">Pet Details</h4>
            <hr className="mb-1" />
            <div className="mb-1">
              <label htmlFor="petNameInput" className="form-label">Pet Name</label>
              <input type="text" className="form-control outline-none border border-gray-300 rounded px-3 py-2 w-3/4" id="petNameInput" name="petName" value={formData.petName} onChange={handleOnChange} required />
            </div>
            <div className="mb-1">
              <label htmlFor="petTypeInput" className="form-label">Pet Type</label>
              <input type="text" className="form-control outline-none border border-gray-300 rounded px-3 py-2 w-3/4" id="petTypeInput" name="petType" value={formData.petType} onChange={handleOnChange} required />
            </div>
            <div className="mb-1">
              <label htmlFor="petBreedInput" className="form-label">Pet Breed</label>
              <input type="text" className="form-clear outline-none border border-gray-300 rounded px-3 py-2 w-3/4" id="petBreedInput" name="petBreed" value={formData.petBreed} onChange={handleOnChange} required />
            </div>
            <div className="mb-1">
              <label htmlFor="petSexInput" className="form-label">Pet Sex</label>
              <input type="text" className="form-control outline-none border border-gray-300 rounded px-3 py-2 w-3/4" id="petSexInput" name="petSex" value={formData.petSex} onChange={handleOnChange} required />
            </div>
            <div className="mb-1">
              <label htmlFor="petAgeInput" className="form-label">Pet Age</label>
              <input type="number" className="form-control outline-none border border-gray-300 rounded px-3 py-2 w-3/4" id="petAgeInput" name="petAge" value={formData.petAge} onChange={handleOnChange} required />
            </div>
            <div className="mb-1">
              <label htmlFor="petMedicalHistoryInput" className="form-label">Medical History</label>
              <textarea className="form-control outline-none border border-gray-300 rounded px-3 py-2 w-3/4" id="petMedicalHistoryInput" name="petMedicalHistory" value={formData.petMedicalHistory} onChange={handleOnChange} rows="3"></textarea>
            </div>
            <button type="submit" onClick={handleSubmit} className="btn btn-primary w-3/4">Submit Booking</button>
          </div>
          <button onClick={closeModal} className="mt-4 w-3/4 text-center text-gray-600 hover:text-gray-900">Close</button>
        </div>
      </div>
      
      )}
      </div>
    )
}

export default HeaderServices


