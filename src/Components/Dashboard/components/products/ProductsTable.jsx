

import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useState } from "react";

const PRODUCT_DATA = [
	{ id: 1, name: "Arabica Coffee | አረቢክ ቡና", category: "Coffee and Tea", price: 500, stock: 50, sales: 300 },
	{ id: 2, name: "Avocados | አቮካዶ", category: "Fruits and Vegetables", price: 65, stock: 100, sales: 150 },
	{ id: 3, name: "Bananas | ሙዝ", category: "Fruits and Vegetables", price: 60, stock: 200, sales: 400 },
	{ id: 4, name: "Barley | ገብስ", category: "Cereal Grains", price: 129, stock: 75, sales: 180 },
	{ id: 5, name: "Beeswax |", category: "Honey and Bee Products", price: 220, stock: 30, sales: 90 },
	{ id: 6, name: "Butter |ቅቤ", category: "Dairy Products", price: 750, stock: 60, sales: 200 },
	{ id: 7, name: "Cabbage |ጥቅል ጎመን", category: "Fruits and Vegetables", price: 25, stock: 150, sales: 350 },
	{ id: 8, name: "Carrots | ካሮት ", category: "Fruits and Vegetables", price: 50, stock: 120, sales: 250 },
	{ id: 9, name: "Cheese | አይብ", category: "Dairy Products", price: 550, stock: 40, sales: 130 },
	{ id: 10, name: "Coffee | ቡና", category: "Coffee and Tea", price: 390, stock: 80, sales: 220 },
	{ id: 11, name: "Groundnuts(Peanuts) |ለውዝ", category: "Oil Seeds", price: 187, stock: 90, sales: 160 },
	{ id: 12, name: "Garlic | ነጭ ሽንኩርት", category: "Fruits and Vegetables", price: 210, stock: 70, sales: 140 },
	{ id: 13, name: "Honey | ማር", category: "Honey and Bee Products", price: 430, stock: 25, sales: 110 },
	{ id: 14, name: "Kale |ጥቁር ጎመን", category: "Fruits and Vegetables", price: 90, stock: 130, sales: 300 },
	{ id: 15, name: "Maize(corn) |በቆሎ", category: "Fruits and Vegetables", price: 130, stock: 110, sales: 210 },
	{ id: 16, name: "Mangoes | ማንጎ", category: "Fruits and Vegetables", price: 160, stock: 140, sales: 260 },
	{ id: 17, name: "Niger seed | ኑግ", category: "Oil Seeds", price: 330, stock: 50, sales: 180 },
	{ id: 18, name: "Onions |ቀይ ሽንኩርት", category: "Fruits and Vegetables", price: 105, stock: 200, sales: 400 },
	{ id: 19, name: "Oranges | ብርቱካን ", category: "Fruits and Vegetables", price: 200, stock: 90, sales: 190 },
	{ id: 20, name: "Papayas | ፓፓያ ", category: "Fruits and Vegetables", price: 45, stock: 150, sales: 320 },
	{ id: 21, name: "Potatoes | ድንች", category: "Fruits and Vegetables", price: 35, stock: 180, sales: 350 },
	{ id: 22, name: "Rice |ሩዝ", category: "Fruits and Vegetables", price: 127, stock: 60, sales: 120 },
	{ id: 23, name: "Sesame seeds|ሰሊጥ", category: "Oil Seeds", price: 100, stock: 55, sales: 110 },
	{ id: 24, name: "Sorghum | ማሽላ", category: "Cereal Grains", price: 110, stock: 70, sales: 140 },
	{ id: 25, name: "Sunflower seeds |ሱፍ", category: "Oil Seeds", price: 165, stock: 80, sales: 200 },
	{ id: 26, name: "Tea (Herbal) |ሻይ ቅጠል", category: "Coffee and Tea", price: 70, stock: 150, sales: 300 },
	{ id: 27, name: "Teff |ጤፍ", category: "Cereal Grains", price: 185, stock: 90, sales: 170 },
	{ id: 28, name: "Tomatoes |ቲማቲም", category: "Fruits and Vegetables", price: 55, stock: 200, sales: 400 },
	{ id: 29, name: "Wheat |ስንዴ", category: "Cereal Grains", price: 115, stock: 50, sales: 100 },
	{ id: 30, name: "Yogurt |እርጎ", category: "Dairy Products", price: 190, stock: 60, sales: 130 },
];

const ProductsTable = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);
	const [showAll, setShowAll] = useState(false); // State to toggle view

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = PRODUCT_DATA.filter(
			(product) => product.name.toLowerCase().includes(term) || product.category.toLowerCase().includes(term)
		);

		setFilteredProducts(filtered);
	};

	const visibleProducts = showAll ? filteredProducts : filteredProducts.slice(0, 10); // Show only the first 10 products if not showing all

	return (
		<motion.div
			className='bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<div className='flex justify-between items-center mb-6'>
				<h2 className='text-2xl font-semibold text-green-700'>Product List</h2>
				<div className='relative'>
					<input
						type='text'
						placeholder='Search products...'
						className='bg-white text-black placeholder-gray-400 border border-gray-600 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
						onChange={handleSearch}
						value={searchTerm}
					/>
					<Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
				</div>
			</div>

			<div className='overflow-x-auto'>
				<table className='min-w-full divide-y divide-purple-900'>
					<thead>
						<tr>
							<th className='px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider'>
								Name
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider'>
								Category
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider'>
								Price
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider'>
								Stock
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider'>
								Sales
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider'>
								Actions
							</th>
						</tr>
					</thead>

					<tbody className='divide-y divide-black-600'>
						{visibleProducts.map((product) => (
							<motion.tr
								key={product.id}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							>
								<td className='px-6 py-4 whitespace-nowrap text-md font-medium text-gray-800 flex gap-2 items-center'>
									<img
										src=''
										alt='Product img'
										className='size-10 rounded-full'
									/>
									{product.name}
								</td>

								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800'>
									{product.category}
								</td>

								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800'>
									ETB {product.price.toFixed(2)}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800'>{product.stock}</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800'>{product.sales}</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800'>
									<button className='text-indigo-400 hover:text-indigo-300 mr-2'>
										<Edit size={18} />
									</button>
									<button className='text-red-400 hover:text-red-300'>
										<Trash2 size={18} />
									</button>
								</td>
							</motion.tr>
						))}
					</tbody>
				</table>
			</div>

			{/* See All Link */}
			<div className='mt-4 text-center'>
				<button
					onClick={() => setShowAll(!showAll)}
					className='text-blue-600 hover:underline focus:outline-none'
				>
					{showAll ? "Show Less" : "See All"}
				</button>
			</div>
		</motion.div>
	);
};

export default ProductsTable;