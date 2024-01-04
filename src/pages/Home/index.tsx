import React from 'react'
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link, Outlet } from "react-router-dom";

const drawerWidth = 240;

const Home = () => {

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<Drawer
				PaperProps={{
					sx: {
						width: drawerWidth,
						boxSizing: "border-box",
						minHeight: "100vh",
						bgcolor: "#121C23",
						'&::-webkit-scrollbar': {
							display: 'none',
						},
						'-ms-overflow-style': 'none',
						scrollbarWidth: 'none',
					}
				}}
				variant="permanent"
				sx={{
					height: "100%",
					width: drawerWidth,
					flexShrink: 0,
					display: {
						md: "block",
						sm: "none",
						xs: "none"
					}
				}}
			>
				<Toolbar />
				<Box >
					<List >
						{[
							{ name: "CoinFlip", to: "/flip", icon: './images/coin-flip-icon.png' },
							{ name: "Crash", icon: './images/crash-icon.png' },
							{ name: "Plinko", icon: './images/plinko-icon.png' },
							{ name: "Dice", icon: './images/dice-icon.png' },
							{ name: "Lucky Wheel", icon: './images/wheel-icon.png' },
							{ name: "Mines", to: "/mines", icon: './images/mines-icon.png' },
							{ name: "Leaderboard", icon: './images/leaderboard-icon.png' },
							{ name: "Statistics", icon: './images/statistics-icon.png' },
							{ name: "Settings", icon: './images/settings-icon.png' },
						].map((item, index) => (
							<Link key={index} className="link-text" to={item?.to || "/"}>
								<ListItem sx={{
									"&:hover": {
										color: "#01FE86",
										borderLeft: "1px solid #01FE86",
										background: " linear-gradient(90deg, rgba(0, 255, 134, 0.08) 0%, rgba(0, 255, 134, 0.00) 100%)"
									}
								}} key={item.name}>
									<ListItemButton >
										<Box
											component="img"
											sx={{
												marginRight: '20px'
											}}
											src={item.icon}
										/>
										<ListItemText primaryTypographyProps={{ fontSize: '12px' }} primary={item.name} />
									</ListItemButton>
								</ListItem>
							</Link>
						))}
					</List>
				</Box>
			</Drawer >
			<Box component="main" sx={{
				pt: "50px", pl: "30px", minHeight: "100vh",mb:2, width: {
					md: "auto",
					sm: "100vw",
					xs: "100vw"
				}
			}}>
				<Outlet />
			</Box>
		</Box >
	);
};

export default React.memo(Home);

