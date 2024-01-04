import { Box, Divider, Typography, Grid } from '@mui/material'
import CoinFlipTableTabs from '../components/CoinFlipTableTabs'
import InputBase from '@mui/material/InputBase'
import Chip from '@mui/joy/Chip'
import CoinsIcon from '../assets/coins-icon.png'
import NftCard from '../components/NftCard'
import Button from '@mui/material/Button'

const CoinFlip = () => {
  return (
    <>
      <Box
        sx={{
          display: {
            md: 'block',
            sm: 'flex',
          },
          flexDirection: {
            sm: 'column',
          },
          bgcolor: '#121C23',
          borderRadius: '12px',
          marginTop: {
            md: '50px',
            sm: '100px',
            xs: '100px',
          },
          width: {
            md: '100%',
            sm: '90%',
            xs: '90%',
          },
          padding: '20px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mb: 2,
            flexDirection: {
              md: 'row',
              sm: 'row',
              xs: 'column',
            },
          }}
        >
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: 700,
              lineHeight: '35px',
              color: 'white',
              textTransform: 'uppercase',
              textAlign: {
                sm: 'center',
                xs: 'center',
              },
            }}
          >
            COIN FLIP
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: {
                sm: 'center',
                xs: 'center',
              },
            }}
          >
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
            <Button
              sx={{
                color: 'black',
                ml: 1,
                mt: 0.5,
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: '700',
                minWidth: 'fit-content',
                height: '30px',
                padding: '5px 10px',
                background: '#01FE86',
                textTransform: 'none',
                '&:hover': {
                  color: 'green',
                  background: 'black',
                },
              }}
            >
              Create Game
            </Button>
          </Box>
        </Box>
        <Box>
          <Grid
            container
            spacing={2}
            sx={{
              display: 'flex',
              justifyItems: 'center',
              alignItems: 'center',
            }}
          >
            <Grid
              item
              sx={{
                display: 'flex',
              }}
              xs={12}
              sm={6}
              md={4}
            >
              <NftCard />
            </Grid>
            <Grid
              item
              sx={{
                display: 'flex',
              }}
              xs={12}
              sm={6}
              md={4}
            >
              <NftCard />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          bgcolor: '#121C23',
          borderRadius: '12px',
          marginTop: '50px',
          padding: '20px',
          width: {
            md: '100%',
            sm: '90%',
            xs: '90%',
          },
        }}
      >
        <Typography
          sx={{
            color: '#8996A2',
            fontSize: '16px',
            fontsSyle: 'normal',
            fontWeight: 700,
            textAlign: 'center',
            textTransform: 'uppercase',
          }}
        >
          OVERVIEW
        </Typography>
        <CoinFlipTableTabs />
      </Box>
    </>
  )
}

export default CoinFlip
