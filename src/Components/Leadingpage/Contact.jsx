import React from 'react';


const Contact = () => {
    return (
        
        <div className="container mx-auto px-28 p-6 bg-gray-100">
            <h1 className="text-4xl font-bold mb-4 text-green-700 text-center">Contact Us</h1>

            <section className="bg-white p-6 rounded-lg shadow mb-6">
                <h2 className="text-2xl- text-green-800 font-semibold mb-4">Get in Touch</h2>
                <form>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Your Name"
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Your Email"
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            placeholder="Your Message"
                            rows="4"
                            className="w-full p-2 border rounded"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-500">
                        Send Message
                    </button>
                </form>
            </section>

            <section className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-semibold mb-4">Our Contact Information</h2>
                <p className="mb-2"><strong>Email:</strong> gebeya@gmail.com</p>
                <p className="mb-2"><strong>Phone:</strong> +1 (234) 567-890</p>
                <p className="mb-2"><strong>Address:</strong> Megenagna, Addis Ababa, Ethiopia</p>
            </section>

            
            <section className="bg-green-600 text-white p-10 text-center mt-10">
                <h2 className="text-2xl font-bold mb-4"> We'd Love to Hear From You!</h2>
                <p className="mb-4">Feel free to reach out with any questions or feedback.</p>
            </section>
        </div>
       
    );
};

export default Contact;