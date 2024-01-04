import { Box, Typography } from '@mui/material'
import WalletExitIcon from '../assets/wallet-exit-icon.png'
import DownArrowIcon from '../assets/down-arrow-icon.png'
import SolanaIcon from './Icons/SolanaIcon'

const Wallet = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          borderRadius: '12px',
          border: '1px solid #222C39',
          p: '10px 0px 5px 10px',
          justifyContent: 'between',
          justifyItems: 'center',
          width: 'fit-content',
        }}
      >
        <SolanaIcon />
        <Typography variant="body2">49.55677717</Typography>
        <img height={'30px'} src={DownArrowIcon} />
      </Box>
      <Box
        component="img"
        sx={{
          marginLeft: '-6px',
          height: '45px',
        }}
        src={WalletExitIcon}
      />
    </>
  )
}

export default Wallet
