import { Box, Typography, Grid, Toolbar, AppBar } from '@mui/material'
import SearchIcon from '../assets/search-icon.png'
import MessageIcon from '../assets/message-icon.png'
import UserIcon from '../assets/user-icon.png'
import NotificationIcon from '../assets/notification-icon.png'
import { NavLink } from "react-router-dom";
import Wallet from "./Wallet";
import MessageDrawer from "./MessageDrawer";

const Navbar = () => {
	return (
		<>
			<AppBar
				position="fixed"
				sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: "#121C23" }}
			>
				<Toolbar>
					<Grid container sx={{
						justifyContent: "space-between",
						p: 0
					}}>
						<Grid sx={{
							display:"flex",
							justifyContent:{
								md:"start",
								sm:"center",
								xs:"center"
							}
						}} item sm={12} xs={12} md={4}>
							<NavLink
								style={{
									color: "white",
								}}
								to="/"
							>
								<img style={{
									height: "30px",
								}} src={"/images/logo.png"} />
							</NavLink>
						</Grid>
						<Grid  item sm={12} xs={12} md={4} sx={{
							display: "flex",
							justifyContent:{
								sm:"center",
								xs:"center"
							}
						}}>
							<Wallet />
						</Grid>
						<Grid item sm={12} xs={12} md={4} sx={{
							display: 'flex',
							justifyContent:{
								md:"end",
								sm:"center",
								xs:"center"
							}
						}}>
							<Box sx={{display: { xs: 'none', sm: 'none', md: 'flex' }}}>
								<img className='nav-icon' src={SearchIcon} />
								<img className='nav-icon' src={MessageIcon} />
								<img className='nav-icon' src={NotificationIcon} />
							</Box>
							<Box sx={{
								display: 'flex',
								height: '40px',
								borderRadius: "12px",
								padding: "2px 2px 2px 16px",
								border: "1px solid #222C39",
								alignItems: 'center',
							}} >
								<Typography sx={{
									marginRight: '10px',
									verticalAlign: 'middle'
								}} variant="body2">Peter Penn</Typography>
								<Box
									component="img"
									sx={{
										height: '35px'
									}}
									src={UserIcon}
								/>
							</Box>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
			<MessageDrawer/>
		</>
	);
};

export default Navbar;
