import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phoneNumber: "",
    email: "",
    address: "",
    problem: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (currentdata) => {
    //console.log(formData);
    console.log("Sending email with the following details:");
    console.log("From:", currentdata.email);
    //console.log("To:", formData.To);
    console.log("Subject:", `New message from ${currentdata.name}`);
    console.log("Body:", currentdata);
    window.Email.send({
      SecureToken: "5befb33d-2b30-45a4-b6b5-06007e683d82",
      To: "pnttiwari77@gmail.com",
      From: formData.email,
      Subject: `New message from ${currentdata.name}`,
      Body: currentdata,
    })
      .then((message) => alert(message))
      .catch((error) => alert("Error: " + error));
  };

  // const sendEmail = () => {
  //   window.Email.send({
  //     SecureToken: "YOUR_SMTPJS_SECURE_TOKEN",
  //     To: "recipient@example.com",
  //     From: formData.email,
  //     Subject: `New message from ${formData.name}`,
  //     Body: formData.message,
  //   }).then((message) => alert(message));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(formData);
  };

  return (
    <div className="max-w-2xl mx-auto  p-6 bg-gradient-to-r from-yellow-200 to-yellow-500 shadow-lg rounded-lg mt-6 ">
      <h1 className="text-2xl font-bold mb-6 text-center">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-red-950">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-red-950">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-red-950">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-red-950">Email ID</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-red-950">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            rows="2"
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-red-950">Problem</label>
          <textarea
            name="problem"
            value={formData.problem}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            rows="3"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-400 font-bold to-blue-700 text-red-950 py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
