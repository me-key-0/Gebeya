import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const dailyOrdersData = [
	{ date: "01/07", orders: 45 },
	{ date: "02/07", orders: 52 },
	{ date: "03/07", orders: 49 },
	{ date: "04/07", orders: 55 },
	{ date: "05/07", orders: 50 },
	{ date: "06/07", orders: 58 },
	{ date: "07/07", orders: 62 },
];

const DailyOrders = () => {
	return (
		<motion.div
			className='bg-white backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<h2 className='text-xl font-semibold text-green-700 mb-4'>Daily Orders</h2>

			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<LineChart data={dailyOrdersData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#374151' />
						<XAxis dataKey='date' stroke='#9CA3AF' />
						<YAxis stroke='#9CA3AF' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
						<Line type='monotone' dataKey='orders' stroke='#8B5CF6' strokeWidth={2} />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default DailyOrders;
