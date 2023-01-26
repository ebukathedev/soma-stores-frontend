const Header = () => {
	return (
		<header className="bg-gray-800 text-white p-4">
			<div className="container mx-auto">
				<div className="flex items-center justify-between">
					<div className="w-1/4">
                        {/* <img src={logo} alt="Logo" className="w-32" /> */}
                        <h1>SOMA</h1>
					</div>
					<div className="w-3/4">
						<nav>
							<ul className="flex items-center justify-end">
								<li className="mr-4">
									<a
										href="#"
										className="text-white hover:text-gray-500"
									>
										Home
									</a>
								</li>
								<li className="mr-4">
									<a
										href="#"
										className="text-white hover:text-gray-500"
									>
										Shop
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-white hover:text-gray-500"
									>
										My Account
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
