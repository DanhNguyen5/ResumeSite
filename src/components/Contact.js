import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <div className="container mx-auto bg-customColor px-20 py-10 font-customTwo" style={{ margin: '0 auto', maxWidth: '100%' }}>
        <h1 className="text-white sm:text-4xl text-3xl text-center pt-10 font-customTwo">
          Let's Talk
        </h1>
        <form className="mt-10 mx-auto md:max-w-lg">
          <div className="flex justify-between mb-6">
            <div className="w-1/2 mr-2">
              <label htmlFor="name" className="block text-customColorThree text-lg mb-2">Name</label>
              <input type="text" id="name" className="border rounded-lg px-4 py-2 w-full" />
            </div>
            <div className="w-1/2 ml-2">
              <label htmlFor="email" className="block text-customColorThree text-lg mb-2">Email</label>
              <input type="email" id="email" className="border rounded-lg px-4 py-2 w-full" />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-customColorThree text-lg mb-2">Message</label>
            <textarea id="message" rows="4" className="border rounded-lg px-4 py-2 w-full" />
          </div>
          <div className="text-center">
          <button className="bg-customColorTwo text-customColorThree py-2 px-4 rounded-lg w-1/3">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
