import React from 'react'
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText"

const drawerWidth = 240;

const MessageDrawer = () => {
	return (
		<Box sx={{ display: "flex" }}>
				<CssBaseline />
				<Drawer
					anchor={"right"}
					PaperProps={{
						sx: {
							width: drawerWidth,
							boxSizing: "border-box",
							height: "100%",
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
					}}
				>
					<Toolbar />
					<Box >
						<List >
							{[
								{ name: "Frnkfrt2324", icon: './images/user-icon-sm.png', rec: './images/rectangle-icon.png' },
								{ name: "dukaj", icon: './images/user-icon-sm.png', rec: './images/rectangle-icon.png' },
								{ name: "Frnkfrt2324", icon: './images/user-icon-sm.png', rec: './images/rectangle-icon.png' },
								{ name: "dukaj", icon: './images/user-icon-sm.png', rec: './images/rectangle-icon.png' },
								{ name: "Morrriez", icon: './images/user-icon-sm.png', rec: './images/rectangle-icon.png' },
								{ name: "Morrriez", icon: './images/user-icon-sm.png', rec: './images/rectangle-icon.png' },
								{ name: "Morrriez", icon: './images/user-icon-sm.png', rec: './images/rectangle-icon.png' },
								{ name: "Morrriez", icon: './images/user-icon-sm.png', rec: './images/rectangle-icon.png' },
								{ name: "dukaj", icon: './images/user-icon-sm.png', rec: './images/rectangle-icon.png' },
							].map((item) => (
								<ListItem sx={{
									color: "white",
									p:1,
								}} key={item.name}>
									<ListItemButton >
										<Box
											component="img"
											sx={{
												marginRight: '5px'
											}}
											src={item.icon}
										/>
										<Box
											component="img"
											sx={{
												marginRight: '5px'
											}}
											src={item.rec}
										/>
										<ListItemText primaryTypographyProps={{ fontSize: '12px' }} primary={item.name} />
										<ListItemText primaryTypographyProps={{
											fontSize: '12px', color: "#586A84",
											fontStyle: "normal",
											fontWeight: "600",
											lineHeight: "20px",
										}} primary={'ez	 money'} />
									</ListItemButton>
								</ListItem>
							))}
						</List>
					</Box>
				</Drawer >
			</Box >
	);
};

export default React.memo(MessageDrawer);

