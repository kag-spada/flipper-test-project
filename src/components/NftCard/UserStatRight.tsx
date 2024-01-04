import { Box, Typography } from '@mui/material'
import ProfileIcon from '../../assets/profile-icon-big.png'
import SilverCoinIcon from '../../assets/silver-coin-icon-big.png'

const UserStatRight = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        bgcolor: '#121C23',
        borderRadius: '20px',
        mt: 2,
        p: 1,
      }}
    >
      <Box
        sx={{
          height: '30px',
          mr: 1,
          alignItems: 'start',
        }}
        component="img"
        src={SilverCoinIcon}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '70px',
          height: '30px',
          alignItems: 'center',
          borderRadius: '20px',
          background: 'rgba(205, 42, 42, 0.13)',
        }}
      >
        <Typography
          sx={{
            color: '#CD2A2A',
            pl: 1,
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: '700',
            textTransform: 'uppercase',
          }}
        >
          49
        </Typography>
        <Box
          sx={{
            height: '30px',
          }}
          component="img"
          src={ProfileIcon}
        />
      </Box>
    </Box>
  )
}

export default UserStatRight
