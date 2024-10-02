import React from 'react';

const Blog = () => {
    return (
        
        <div className="container mx-auto p-6 bg-gray-100">
            <h1 className="text-4xl font-bold mb-4 text-center text-green-700">Blog & News</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Main Blog Posts Section */}
                <div className="col-span-2">
                    <div className="bg-white p-6 rounded-lg shadow mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Available now </h2>
                        <p className="text-gray-600 mb-4">Published on: <span className="font-semibold">Oct 1, 2024</span></p>
                        <p>Abebe eats Beso which is made from barley, you can get it by using our platform now. <a href="#" className="text-blue-500 hover:underline">Read more</a></p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow mb-6">
                        <h2 className="text-2xl font-semibold mb-2">new product </h2>
                        <p className="text-gray-600 mb-4">Published on: <span className="font-semibold">sept 15, 2024</span></p>
                        <p>Abebe eats Beso which is made from barley, you can get it by using our platform now. <a href="#" className="text-blue-500 hover:underline">Read more</a></p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow mb-6">
                        <h2 className="text-2xl font-semibold mb-2">New region joind us </h2>
                        <p className="text-gray-600 mb-4">Published on: <span className="font-semibold">sept 1, 2024</span></p>
                        <p>Abebe eats Beso which is made from barley, you can get it by using our platform now. <a href="#" className="text-blue-500 hover:underline">Read more</a></p>
                    </div>
                </div>

                {/* Sidebar Section */}
                <aside className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-semibold mb-4">Categories</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li><a href="#" className="text-blue-500 hover:underline">Agriculture</a></li>
                        <li><a href="#" className="text-blue-500 hover:underline">Marketing</a></li>
                        <li><a href="#" className="text-blue-500 hover:underline">Sustainability</a></li>
                        <li><a href="#" className="text-blue-500 hover:underline">Technology</a></li>
                    </ul>

                    <h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-blue-500 hover:underline">Blog Post Title 1</a></li>
                        <li><a href="#" className="text-blue-500 hover:underline">Blog Post Title 2</a></li>
                        <li><a href="#" className="text-blue-500 hover:underline">Blog Post Title 3</a></li>
                    </ul>
                </aside>
            </div>

            {/* call to action  */}
            <section className="bg-green-500 text-white p-10 text-center mt-10">
                <h2 className="text-2xl font-bold mb-4">Stay Updated!</h2>
                <p className="mb-4">Subscribe to our newsletter for the latest news and updates.</p>
                <input type="email" placeholder="Your email address" className="p-2 rounded-lg mr-2" />
                <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200">Subscribe</button>
            </section>
        </div>
       
    );
};

export default Blog;