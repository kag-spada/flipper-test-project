import { Box, Divider, Typography } from '@mui/material'
import CoinIcon from '../../assets/coin-1-icon.png'
import CoinsIcon from '../../assets/coins-icon.png'
import ProfileIcon from '../../assets/profile-icon.png'

const PlaceBets = () => {
  return (
    <Box
      sx={{
        width: '270px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: '10px',
          borderRadius: '24px',
          border: '1px solid #243742',
          background: ' #12181D;',
          mb: 1,
        }}
      >
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <Box
            component="img"
            sx={{
              height: '20px',
            }}
            src={CoinIcon}
          />
          <Typography
            sx={{
              fontSize: '12px',
              ml: '5px',
              mt: '2px',
              color: '#D3E0E9',
            }}
          >
            PLACE BET
          </Typography>
        </Box>
        <Typography
          sx={{
            color: '#5B6C79',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: 'normal',
            textTransform: 'uppercase',
          }}
        >
          WIN 2X
        </Typography>
      </Box>
      <Box
        sx={{
          borderRadius: '12px',
          border: '1px solid #243742',
          background: '#1C2932',
          height: '300px',
          p: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            justifyItems: 'center',
            color: '#5B6C79',
          }}
        >
          <Typography
            sx={{
              fontSize: '12px',
              lineHeight: '35px',
              fontWeight: '600',
            }}
          >
            17 Bets Total
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              justifyItems: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              sx={{
                height: '10px',
                mr: '4px',
              }}
              src={CoinsIcon}
            />
            <Typography
              sx={{
                fontSize: '12px',
                fontWeight: '600',
              }}
            >
              139.10
            </Typography>
          </Box>
        </Box>
        <Divider
          sx={{
            background: '#5B6C79',
            borderBottomWidth: 1,
            m: 0,
            width: '100%',
          }}
          variant="middle"
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            justifyItems: 'center',
            color: '#5B6C79',
            mt: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              justifyItems: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              sx={{
                height: '13px',
                mr: '4px',
              }}
              src={ProfileIcon}
            />
            <Typography
              sx={{
                fontSize: '12px',
                fontWeight: '600',
              }}
            >
              FenRik
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: '12px',
              fontWeight: '600',
            }}
          >
            40.00
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            justifyItems: 'center',
            color: '#5B6C79',
            mt: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              justifyItems: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              sx={{
                height: '13px',
                mr: '4px',
              }}
              src={ProfileIcon}
            />
            <Typography
              sx={{
                fontSize: '12px',
                fontWeight: '600',
              }}
            >
              FenRik
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: '12px',
              fontWeight: '600',
            }}
          >
            40.00
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            justifyItems: 'center',
            color: '#5B6C79',
            mt: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              justifyItems: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              sx={{
                height: '13px',
                mr: '4px',
              }}
              src={ProfileIcon}
            />
            <Typography
              sx={{
                fontSize: '12px',
                fontWeight: '600',
              }}
            >
              FenRik
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: '12px',
              fontWeight: '600',
            }}
          >
            40.00
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            justifyItems: 'center',
            color: '#5B6C79',
            mt: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              justifyItems: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              sx={{
                height: '13px',
                mr: '4px',
              }}
              src={ProfileIcon}
            />
            <Typography
              sx={{
                fontSize: '12px',
                fontWeight: '600',
              }}
            >
              FenRik
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: '12px',
              fontWeight: '600',
            }}
          >
            40.00
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default PlaceBets
