
import React from "react";

const features = [
  { icon: "👨‍⚕️", title: "Standardizing cost, quality and hygiene" },
  { icon: "🏥", title: "Bringing dentistry into mainstream medicine" },
  { icon: "🌇️", title: "Creating awareness around good oral hygiene" },
  { icon: "💻", title: "Digitizing the dental healthcare industry" },
];

const AboutUs = () => {
  return (
    <div className="w-full mt-25 min-h-screen overflow-y-scroll snap-y snap-mandatory">
      <div className="w-full relative h-[800px] flex justify-center items-center bg-gray-100 snap-start">
        <img
          src="https://img.freepik.com/free-vector/teeth-dental-care-medical-background_1419-1932.jpg?t=st=1743675061~exp=1743678661~hmac=52a1e38417bd42ce60441ad1479b9b139e0fa1e5969cf343a40ce03b85fea1bc&w=996"
          alt="About Us"
          className="w-full h-full  object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-black px-6 md:px-12">
  {/* Heading */}
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black-700 drop-shadow-lg animate-fadeInUp">
    Enhancing Dental Healthcare with <br className="hidden sm:block" /> Innovation & Technology
  </h1>

  {/* Subtext */}
  <p className="text-base sm:text-lg md:text-xl mt-4 max-w-3xl text-gray-800 leading-relaxed animate-fadeInUp delay-200">
    Our **Dentist Management System** simplifies clinic operations, enhances patient experiences, and ensures seamless **appointment scheduling, records management, and treatment planning**. With innovation at our core, we empower dental professionals to focus on what matters most—**delivering exceptional oral healthcare**.
  </p>

  {/* Call to Action Button */}
  <a 
  href="/pricing"
  className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition-transform duration-300 animate-fadeInUp delay-400"
>
  Learn More →
</a>

</div>

      </div>
      <h2 className="text-5xl font-bold text-[#66c5eb] text-center my-12">OUR JOURNEY</h2>
      <div className="flex flex-col md:flex-row bg-gray-200 px-10 w-full py-6 min-h-[50vh]">
        <div className="md:w-2/3 text-gray-700 text-center md:text-left">
          <p className="text-3xl   mt-10">
            "Good oral hygiene is the window to good overall health - and it should be accessible and affordable for everyone."
          </p>
          <p className="mb-8 text-3xl">
            MyDentalPlan Healthcare was founded in 2015 by three pioneering dentists in India. Today, it is profoundly changing the shape
            of dental care services by blending art, science, information technology, and ingenuity.
          </p>
          <p className="text-3xl   mb-8">
            "Good oral hygiene is the window to good overall health - and it should be accessible and affordable for everyone."
          </p>
          <p className="mb-8 text-3xl">
            MyDentalPlan Healthcare was founded in 2015 by three pioneering dentists in India. Today, it is profoundly changing the shape
            of dental care services by blending art, science, information technology, and ingenuity.
          </p>
          <p className="text-3xl   mb-8">
            "Good oral hygiene is the window to good overall health - and it should be accessible and affordable for everyone."
          </p>
          <p className="mb-8 text-3xl">
            MyDentalPlan Healthcare was founded in 2015 by three pioneering dentists in India. Today, it is profoundly changing the shape
            of dental care services by blending art, science, information technology, and ingenuity.
          </p>
          
          <p className="mb-8 text-3xl">
            MyDentalPlan Healthcare was founded in 2015 by three pioneering dentists in India. Today, it is profoundly changing the shape
            of dental care services by blending art, science, information technology, and ingenuity.
          </p>
          <p className="mb- 8  font-bold text-3xl ">
           Our mission is to leverage cutting-edge technology and innovative solutions to simplify business operations and drive growth. We aim to empower organizations with smarter, more efficient tools that streamline processes, enhance productivity, and deliver sustainable value. By focusing on customer-centric solutions and fostering an environment of continuous innovation, we aspire to be a trusted partner in transforming industries and driving digital excellence.
          </p>
          <p className=" mt-10 font-bold text-3xl">Our vision - To become a globally recognized leader in technology solutions, enabling businesses of all sizes to navigate the complexities of the digital world with ease. We envision a future where Manasvi Technologies empowers enterprises through transformative, agile, and scalable technology that drives efficiency, sustainability, and long-term success.".</p>
        </div>
        <div className="md:w-1/3 flex justify-center mt-8 md:mt-2">
          <img
            className="rounded-lg shadow-lg w-50 h-30 md:w-full md:h-full object-cover"
            src="https://mydentalplan.in/frontassets/images/about-para.png"
            alt="Our Journey"
          />
        </div>
      </div>
      <div className="w-full flex justify-center mt-25 items-center snap-start px-4">
      <div className="bg-blue-900 text-white py-10 px-5 text-center roun++ded-lg shadow-lg w-full max-w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">WHAT WE ARE DOING</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-blue-800 p-10 rounded-lg flex flex-col items-center text-center shadow-lg w-full min-h-[250px]"
              >
                <div className="text-5xl mb-6" aria-hidden="true">{feature.icon}</div>
                <p className="text-xl font-medium">{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center snap-start">
        <h2 className="text-4xl font-bold text-[#66c5eb] text-center py-20">OUR HAPPY CLIENTS</h2>
        <div className="max-w-6xl w-full space-y-4">
          <div className="flex flex-col lg:flex-row items-center gap-6 mt-5">
            <img src="https://tgdentist.com/wp-content/uploads/2022/05/ccosmetic-dentistry.jpg" alt="Dr Mohender Narula" className="w-full max-w-xs h-auto object-cover rounded-lg shadow-lg" />
            <div className="bg-white p-4 rounded-lg shadow-lg w-full">
              <h3 className="text-2xl font-bold text-blue-900">Dr Mohender Narula</h3>
              <p className="  text-gray-700">Founder and Chairperson</p>
              <p className="text-gray-700 mt-2">Dr Narula is the Chairperson and one of the founders of MyDentalPlan Healthcare. He holds an MDS from AIIMS (India), a Fellowship from the Harvard School of Dental Medicine (USA), and a DMD from the Boston Dental School (USA).</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="bg-white p-4 rounded-lg shadow-lg w-full">
              <h3 className="text-2xl font-bold text-blue-900">Dr Anandakrishna GN</h3>
              <p className="  text-gray-700">Founder and Director</p>
              <p className="text-gray-700 mt-2">Dr Anandakrishna is the Director and one of the founders of MyDentalPlan Healthcare. He is a graduate from the Govt. Dental College (Bangalore) and completed his MDS in Prosthodontics from the AB Shetty Memorial Institute of Dental Sciences (Mangalore).</p>
            </div>
            <img src="https://th.bing.com/th/id/R.77f0708ccc4f2eca813fcdb0208d8440?rik=jaNgoR7%2buU4V6w&riu=http%3a%2f%2fwww.winningsmile.ph%2fwp-content%2fuploads%2f2018%2f01%2fsmile-is-perfect.jpg&ehk=UgsqLWA54fdkuG0JXiPQf9QWd0TIWXYKiwkNY2n5ux0%3d&risl=&pid=ImgRaw&r=0" alt="Dr Anandakrishna GN" className="w-full max-w-xs h-auto object-cover rounded-lg shadow-lg" />
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-6 mb-5">
            <img src="https://th.bing.com/th/id/OIP.qt7HWQUY1oDKgjSiD39hTwHaE8?rs=1&pid=ImgDetMain" alt="Dr Mohender Narula" className="w-full max-w-xs h-auto object-cover rounded-lg shadow-lg" />
            <div className="bg-white p-4 rounded-lg shadow-lg w-full">
              <h3 className="text-2xl font-bold text-blue-900">Dr Mohender Narula</h3>
              <p className="  text-gray-700">Founder and Chairperson</p>
              <p className="text-gray-700 mt-2">Dr Narula is the Chairperson and one of the founders of MyDentalPlan Healthcare. He holds an MDS from AIIMS (India), a Fellowship from the Harvard School of Dental Medicine (USA), and a DMD from the Boston Dental School (USA).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
