import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { Box, CardActionArea } from '@mui/material'
import NftImageOne from '../../assets/nft-1.png'
import Button from '@mui/material/Button'
import UserStatLeft from './UserStatLeft'
import UserStatRight from './UserStatRight'
import Typography from '@mui/material/Typography'
import CoinIcon from '../../assets/card-coin-icon.png'
import VersusIcon from '../../assets/verses-icon.png'

const NftCard = () => {
  return (
    <Card
      sx={{ height: '325px', borderRadius: '30px', backgroundColor: '#16222A' }}
    >
      <CardActionArea>
        <CardMedia
          sx={{
            border: '1px solid #222C39',
            backgroundSize: 'cover',
          }}
          component="img"
          height="170"
          image={NftImageOne}
          alt="green iguana"
        />
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            display: 'flex',
            top: '47%',
            justifyContent: 'space-between',
            background:
              'linear-gradient(to bottom, rgba(40,45,50, 0.4), rgba(40,45,50, 0.73))',
            p: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: '12px',
              fontWeight: '700',
              color: 'white',
            }}
          >
            Okay Bears NFT
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              sx={{
                mr: '6px',
              }}
              src={CoinIcon}
            />
            <Typography
              sx={{
                fontSize: '12px',
                fontWeight: '700',
                color: 'white',
              }}
            >
              40.00
            </Typography>
          </Box>
        </Box>
        <CardContent sx={{ p: 0, textAlign: 'center' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <UserStatLeft />
            <Box
              sx={{
                mt: 2,
                height: '50px',
              }}
              component="img"
              src={VersusIcon}
            />
            <UserStatRight />
          </Box>
          <Button
            sx={{
              mt: '20px',
              borderRadius: '20px',
              border: '1px solid #293544',
              color: 'white',
              width: 'fit-content',
              padding: '8px 30px',
              bgcolor: '16222A',
              textTransform: 'none',
            }}
            variant="outlined"
          >
            Watch Coin Flip
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default NftCard
