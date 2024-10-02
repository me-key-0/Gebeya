import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto p-6 bg-gray-100 text-green-900">
            <h1 className="text-3xl font-bold mb-12 text-center">About Us</h1>
            
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
                <p>Our mission is to promote a marketing system equitable for the Country’s development with specific solutions.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
                <p>Our vision is to advance the market for agricultural products  by providing a simple and fast system. We aim to Empower every Farmer and wholesaler of Agricultural products as Agriculture is the base for our country's economy. We envision an Ethiopia where the Marketing system is simple and preferred regardless of technological advancements.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
                <ul className="list-disc list-inside">
                    <li>Transparency: We believe in openness and transparency in all our operations, from the development of our market systems to all of our organization.
                    </li>
                    <li>Innovation: We are committed to continuous improvement and creativity.</li>
                    <li>Effectiveness: we are very passionate to serve our user’s with speed..</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Meet the Team</h2>
                <div className="flex flex-col space-y-4">
                    <div className="bg-white shadow rounded p-4">
                        <h3 className="font-semibold text-2xl">Mr X</h3>
                        <p>Founder & CEO</p>
                        <p>X is passionate about delivering quality and innovation.</p>
                    </div>
                    <div className="bg-white shadow rounded p-4">
                        <h3 className="font-semibold text-2xl">Mr Y</h3>
                        <p>Chief Operating Officer</p>
                        <p>Y ensures our operations run smoothly and efficiently.</p>
                    </div>
                    <div className="bg-white shadow rounded p-4">
                        <h3 className="font-semibold text-2xl">Mr z</h3>
                        <p>Head of Marketing</p>
                        <p>Z is dedicated to connecting our brand with our customers.</p>
                    </div>
                </div>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
                <p>If you have any questions or would like to learn more about us, feel free to <a href="gebeya@gmail.com" className="text-blue-500">email us</a>.</p>
            </section>
            
            <footer className="text-center mt-10">
                <p>&copy; 2024 Gebeya Agricultural market. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default About;