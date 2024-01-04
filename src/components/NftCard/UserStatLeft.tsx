import { Box, Typography } from '@mui/material'
import ProfileIcon from '../../assets/profile-icon-big.png'
import SilverCoinIcon from '../../assets/silver-coin-icon-big.png'

const UserStatLeft = () => {
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
          display: 'flex',
          justifyContent: 'space-between',
          width: '70px',
          height: '30px',
          alignItems: 'center',
          borderRadius: '20px',
          background: '#222C39',
        }}
      >
        <Box
          sx={{
            height: '30px',
          }}
          component="img"
          src={ProfileIcon}
        />
        <Typography
          sx={{
            color: 'white',
            pr: 1,
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: '700',
            textTransform: 'uppercase',
          }}
        >
          49
        </Typography>
      </Box>
      <Box
        sx={{
          height: '30px',
          ml: 1,
          alignItems: 'start',
        }}
        component="img"
        src={SilverCoinIcon}
      />
    </Box>
  )
}

export default UserStatLeft
