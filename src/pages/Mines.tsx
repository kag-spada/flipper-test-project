import { Box, Divider, Typography, Grid } from '@mui/material'
import DailyRouleteTable from '../components/Tables/DailyRouletteTable'
import VolumeIcon from '../assets/volume-icon.png'
import CoinIcon from '../assets/coin-1-icon.png'
import GoldCoinIcon from '../assets/gold-coin-icon.png'
import BlackCoinIcon from '../assets/black-coin-icon.png'
import CoinsIcon from '../assets/coins-icon.png'
import PlaceBets from '../components/PlaceBets'
import InputBase from '@mui/material/InputBase'
import Chip from '@mui/joy/Chip'
import GoldCoinBigIcon from '../assets/gold-coin-icon-big.png'
import BlackCoinBigIcon from '../assets/black-coin-icon-big.png'
import SilverCoinBigIcon from '../assets/silver-coin-icon-big.png'

const Mines = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: '#121C23',
          borderRadius: '12px',
          padding: '20px',
          marginTop: {
            md: '50px',
            sm: '100px',
            xs: '100px',
          },
          width: {
            md: '80%',
            sm: '90%',
            xs: '90%',
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: 700,
              lineHeight: '35px',
              color: 'white',
            }}
          >
            Roulette
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '80px',
            }}
          >
            <Box
              component="img"
              sx={{
                height: '20px',
              }}
              src={VolumeIcon}
            />
            <Typography
              sx={{
                fontSize: '12px',
                mt: '2px',
                color: '#576A78',
              }}
            >
              Sound on
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            my: 4,
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '38%',
              left: '48%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1,
            }}
          >
            <Typography
              sx={{
                color: '#FFF',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: 'normal',
                textTransform: 'uppercase',
              }}
            >
              Rolling
            </Typography>
            <Typography
              sx={{
                color: '#FFF',
                fontSize: '40px',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: 'normal',
              }}
            >
              3.89
            </Typography>
          </Box>
          <Box
            sx={{
              background:
                'linear-gradient(to right, transparent 0%, rgba(28,41,50,0.1)) 50%, transparent 100%)',
            }}
          >
            <Box
              component="img"
              sx={{
                ml: 1,
                opacity: 0.1,
              }}
              src={GoldCoinBigIcon}
            />
            <Box
              component="img"
              sx={{
                ml: 1,
                opacity: 0.4,
              }}
              src={GoldCoinBigIcon}
            />
            <Box
              component="img"
              sx={{
                opacity: 0.3,
                ml: 1,
              }}
              src={SilverCoinBigIcon}
            />
            <Box
              component="img"
              sx={{
                opacity: 0.4,
                ml: 1,
              }}
              src={BlackCoinBigIcon}
            />
            <Box
              component="img"
              sx={{
                opacity: 0.5,
                ml: 1,
              }}
              src={GoldCoinBigIcon}
            />
            <Box
              component="img"
              sx={{
                opacity: 0.1,
                ml: 1,
              }}
              src={GoldCoinBigIcon}
            />
            <Box
              component="img"
              sx={{
                opacity: 0.5,
                ml: 1,
              }}
              src={GoldCoinBigIcon}
            />
            <Box
              component="img"
              sx={{
                opacity: 0.5,
                ml: 1,
              }}
              src={SilverCoinBigIcon}
            />
            <Box
              component="img"
              sx={{
                opacity: 0.4,
                ml: 1,
              }}
              src={BlackCoinBigIcon}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mb: 3,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                color: '#5B6C79',
                fontSize: '12px',
                fontStyle: 'normal',
                lineHeight: 'normal',
                textTransform: 'uppercase',
              }}
            >
              Previous rolls
            </Typography>
            <Box
              sx={{
                background:
                  'linear-gradient(to right, transparent, rgba(28,41,50,0.1))',
              }}
            >
              <Box
                component="img"
                sx={{
                  opacity: '0.1',
                  height: '10px',
                  ml: 1,
                }}
                src={CoinIcon}
              />
              <Box
                component="img"
                sx={{
                  opacity: '0.2',
                  height: '10px',
                  ml: 1,
                }}
                src={CoinIcon}
              />
              <Box
                component="img"
                sx={{
                  opacity: '0.3',
                  height: '10px',
                  ml: 1,
                }}
                src={GoldCoinIcon}
              />
              <Box
                component="img"
                sx={{
                  opacity: '0.4',
                  height: '10px',
                  ml: 1,
                }}
                src={GoldCoinIcon}
              />
              <Box
                component="img"
                sx={{
                  opacity: '0.5',
                  height: '10px',
                  ml: 1,
                }}
                src={CoinIcon}
              />
              <Box
                component="img"
                sx={{
                  opacity: '0.6',
                  height: '10px',
                  ml: 1,
                }}
                src={GoldCoinIcon}
              />
              <Box
                component="img"
                sx={{
                  opacity: '0.7',
                  height: '10px',
                  ml: 1,
                }}
                src={GoldCoinIcon}
              />
              <Box
                component="img"
                sx={{
                  opacity: '0.8',
                  height: '10px',
                  ml: 1,
                }}
                src={CoinIcon}
              />
              <Box
                component="img"
                sx={{
                  opacity: '0.9',
                  height: '10px',
                  ml: 1,
                }}
                src={GoldCoinIcon}
              />
              <Box
                component="img"
                sx={{
                  opacity: '1',
                  height: '10px',
                  ml: 1,
                }}
                src={GoldCoinIcon}
              />
            </Box>
            <Typography
              sx={{
                color: '#5B6C79',
                fontSize: '12px',
                fontStyle: 'normal',
                lineHeight: 'normal',
                textTransform: 'uppercase',
                ml: 2,
              }}
            >
              last 100
            </Typography>
            <Box
              component="img"
              sx={{
                height: '10px',
                ml: 1,
              }}
              src={CoinIcon}
            />
            <Typography
              sx={{
                color: '#5B6C79',
                fontSize: '12px',
                fontStyle: 'normal',
                lineHeight: 'normal',
                textTransform: 'uppercase',
                ml: 1,
              }}
            >
              40
            </Typography>
            <Box
              component="img"
              sx={{
                height: '10px',
                ml: 1,
              }}
              src={BlackCoinIcon}
            />
            <Typography
              sx={{
                color: '#5B6C79',
                fontSize: '12px',
                fontStyle: 'normal',
                lineHeight: 'normal',
                textTransform: 'uppercase',
                ml: 1,
              }}
            >
              4
            </Typography>
            <Box
              component="img"
              sx={{
                height: '10px',
                ml: 1,
              }}
              src={GoldCoinIcon}
            />
            <Typography
              sx={{
                color: '#5B6C79',
                fontSize: '12px',
                fontStyle: 'normal',
                lineHeight: 'normal',
                textTransform: 'uppercase',
                ml: 1,
              }}
            >
              56
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              borderRadius: '20px',
              border: '1px solid var(--2, #222C39)',
              background: 'var(--0, #0E131B)',
              mb: 1,
              height: '38px',
            }}
          >
            <Box
              sx={{
                width: 'fit-content',
                display: 'flex',
                justifyItems: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                component="img"
                sx={{
                  height: '15px',
                  mx: 2,
                }}
                src={CoinsIcon}
              />
              <InputBase
                sx={{
                  ml: 1,
                  flex: 1,
                  color: '#454E61',
                  minWidth: '100px',
                  width: '120px',
                  fontSize: '12px',
                }}
                placeholder="Enter Bet Amount"
                inputProps={{
                  'aria-label': 'Enter Bet Amount',
                  color: '#454E61',
                }}
              />
              <Divider
                sx={{
                  height: '23px',
                  m: 0.5,
                  borderRightWidth: '1px',
                  background: '#5B6C79',
                }}
                orientation="vertical"
              />
            </Box>
            <Box
              sx={{
                ml: 2,
                pt: 0.5,
                pr: 1,
              }}
            >
              <Chip
                size="sm"
                sx={{
                  backgroundColor: '#222C39',
                  color: '#8694B6',
                  fontWeight: '700',
                  ml: 1,
                  '& :hover': {
                    cursor: 'pointer',
                  },
                  display: 'inline-block',
                  '@media (max-width: 767px)': {
                    display: 'none',
                  },
                }}
              >
                CLEAR
              </Chip>
              <Chip
                size="sm"
                sx={{
                  backgroundColor: '#222C39',
                  color: '#8694B6',
                  fontWeight: '700',
                  ml: 1,
                  '& :hover': {
                    cursor: 'pointer',
                  },
                  '@media (max-width: 1004px)': {
                    display: 'none',
                  },
                }}
              >
                +0.01
              </Chip>
              <Chip
                size="sm"
                sx={{
                  backgroundColor: '#222C39',
                  color: '#8694B6',
                  fontWeight: '700',
                  ml: 1,
                  '& :hover': {
                    cursor: 'pointer',
                  },
                  '@media (max-width: 1004px)': {
                    display: 'none',
                  },
                }}
              >
                +0.1
              </Chip>
              <Chip
                size="sm"
                sx={{
                  backgroundColor: '#222C39',
                  color: '#8694B6',
                  fontWeight: '700',
                  ml: 1,
                  '& :hover': {
                    cursor: 'pointer',
                  },
                  '@media (max-width: 1004px)': {
                    display: 'none',
                  },
                }}
              >
                +10
              </Chip>
              <Chip
                size="sm"
                sx={{
                  backgroundColor: '#222C39',
                  color: '#8694B6',
                  fontWeight: '700',
                  ml: 1,
                  '& :hover': {
                    cursor: 'pointer',
                  },
                  '@media (max-width: 1004px)': {
                    display: 'none',
                  },
                }}
              >
                +100
              </Chip>
              <Chip
                size="sm"
                sx={{
                  backgroundColor: '#222C39',
                  color: '#8694B6',
                  fontWeight: '700',
                  ml: 1,
                  '& :hover': {
                    cursor: 'pointer',
                  },
                  display: 'inline-block',
                  '@media (max-width: 767px)': {
                    display: 'none',
                  },
                }}
              >
                MAX
              </Chip>
            </Box>
          </Box>
        </Box>
        <Box>
          <Grid
            container
            spacing={2}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Grid
              item
              sx={{
                display: 'flex',
                justifyContent: {
                  sm: 'center',
                  xs: 'center',
                },
              }}
              xs={12}
              sm={6}
              md={4}
            >
              <PlaceBets />
            </Grid>
            <Grid
              item
              sx={{
                display: 'flex',
                justifyContent: {
                  sm: 'center',
                  xs: 'center',
                },
              }}
              xs={12}
              sm={6}
              md={4}
            >
              <PlaceBets />
            </Grid>
            <Grid
              item
              sx={{
                display: 'flex',
                justifyContent: {
                  sm: 'center',
                  xs: 'center',
                },
              }}
              xs={12}
              sm={6}
              md={4}
            >
              <PlaceBets />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          bgcolor: '#121C23',
          borderRadius: '12px',
          marginTop: '50px',
          width: {
            md: '80%',
            sm: '90%',
            xs: '90%',
          },
          padding: '20px',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: 700,
              lineHeight: '35px',
              color: 'white',
            }}
          >
            Daily Roulette Race
          </Typography>
          <Typography
            sx={{
              fontSize: '12px',
              color: '#AAB5C6',
            }}
          >
            Ends in 5h 23 min 11 sec
          </Typography>
        </Box>
        <DailyRouleteTable />
      </Box>
    </>
  )
}

export default Mines
