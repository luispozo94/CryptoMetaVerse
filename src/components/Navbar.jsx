import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../images/cryptocurrency.png';

const Navbar = () => {
	//adding logic to make navbar mobile friendly
	const [activeMenu, setActiveMenu] = useState(true);
	const [screenSize, setScreenSize] = useState(null);

	//this useEffect will ONLY fire when the component renders
	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth); //this will set the screen
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => window.removeEventListener('resize', handleResize); //return acts as a component unmount
	}, []);

	//this use will called when the screensize changes
	useEffect(() => {
		//mobile width
		if (screenSize < 768) {
			setActiveMenu(false);
		} else {
			setActiveMenu(true);
		}
	}, [screenSize]);

	return (
		<div className="nav-container">
			<div className="logo-container">
				<Avatar src={icon} size="large" />
				<Typography.Title level={2} className="logo">
					<Link to="/"> Cryptoverse</Link>
				</Typography.Title>
				<Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
					<MenuOutlined />
				</Button>
			</div>
			{activeMenu && (
				<Menu theme="dark">
					<Menu.Item icon={<HomeOutlined />}>
						<Link to="/"> Home</Link>
					</Menu.Item>
					<Menu.Item icon={<FundOutlined />}>
						<Link to="/cryptocurrencies"> Crypto Currency</Link>
					</Menu.Item>
					<Menu.Item icon={<MoneyCollectOutlined />}>
						<Link to="/exchanges"> Exchanges</Link>
					</Menu.Item>
					<Menu.Item icon={<BulbOutlined />}>
						<Link to="/news"> News</Link>
					</Menu.Item>
				</Menu>
			)}
		</div>
	);
};

export default Navbar;
