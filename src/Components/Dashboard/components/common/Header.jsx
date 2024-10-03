const Header = ({ title }) => {
	return (
		<header className='bg-white  backdrop-blur-md shadow-lg border-b border-gray-300'>
			<div className='max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8'>
				<h1 className='text-3xl font-semibold text-green-600'>{title}</h1>
			</div>
		</header>
	);
};
export default Header;
