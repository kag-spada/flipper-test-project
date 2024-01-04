import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import InputBase from '@mui/material/InputBase'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const drawerWidth = 240

const MessageDrawer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        '@media (max-width: 1264px)': {
          display: 'none',
        },
      }}
    >
      <CssBaseline />
      <Drawer
        anchor={'right'}
        PaperProps={{
          sx: {
            width: drawerWidth,
            boxSizing: 'border-box',
            height: '100%',
            bgcolor: '#121C23',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            '-ms-overflow-style': 'none',
            scrollbarWidth: 'none',
          },
        }}
        variant="permanent"
        sx={{
          height: '100%',
          width: drawerWidth,
          flexShrink: 0,
        }}
      >
        <Toolbar />
        <Box>
          <List>
            {[
              {
                name: 'Frnkfrt2324',
                icon: './images/user-icon-sm.png',
                rec: './images/rectangle-icon.png',
              },
              {
                name: 'dukaj',
                icon: './images/user-icon-sm.png',
                rec: './images/rectangle-icon.png',
              },
              {
                name: 'Frnkfrt2324',
                icon: './images/user-icon-sm.png',
                rec: './images/rectangle-icon.png',
              },
              {
                name: 'dukaj',
                icon: './images/user-icon-sm.png',
                rec: './images/rectangle-icon.png',
              },
              {
                name: 'Morrriez',
                icon: './images/user-icon-sm.png',
                rec: './images/rectangle-icon.png',
              },
              {
                name: 'Morrriez',
                icon: './images/user-icon-sm.png',
                rec: './images/rectangle-icon.png',
              },
              {
                name: 'Morrriez',
                icon: './images/user-icon-sm.png',
                rec: './images/rectangle-icon.png',
              },
              {
                name: 'Morrriez',
                icon: './images/user-icon-sm.png',
                rec: './images/rectangle-icon.png',
              },
              {
                name: 'dukaj',
                icon: './images/user-icon-sm.png',
                rec: './images/rectangle-icon.png',
              },
            ].map((item) => (
              <ListItem
                sx={{
                  color: 'white',
                  p: 1,
                }}
                key={item.name}
              >
                <ListItemButton>
                  <Box
                    component="img"
                    sx={{
                      marginRight: '5px',
                    }}
                    src={item.icon}
                  />
                  <Box
                    component="img"
                    sx={{
                      marginRight: '5px',
                    }}
                    src={item.rec}
                  />
                  <ListItemText
                    primaryTypographyProps={{ fontSize: '12px' }}
                    primary={item.name}
                  />
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: '12px',
                      color: '#586A84',
                      fontStyle: 'normal',
                      fontWeight: '600',
                      lineHeight: '20px',
                    }}
                    primary={'ez	 money'}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <InputBase
            sx={{
              ml: 1,
              mb: 1,
              p: 1,
              flex: 1,
              color: 'white',
              fontSize: '12px',
              borderRadius: '12px',
              border: ' 1px solid #222C39',
            }}
            placeholder="Type Message"
            inputProps={{ 'aria-label': 'Type Message', color: '#454E61' }}
          />
          <MoreVertIcon
            sx={{
              color: 'white',
            }}
          />
        </Box>
      </Drawer>
    </Box>
  )
}

export default MessageDrawer
