import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import DailyRouleteTable from './Tables/DailyRouletteTable'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ overflow: 'auto' }}>{children}</Box>}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const CoinFlipTableTabs = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(event)
    setValue(newValue)
  }

  return (
    <>
      <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          sx={{
            '& .Mui-selected': {
              color: 'white',
              textDecoration: 'none',
              fontWeight: '700',
              outline: 'none',
            },
          }}
          TabIndicatorProps={{
            sx: {
              backgroundColor: '#01FE86',
            },
          }}
          value={value}
          onChange={handleChange}
        >
          <Tab sx={{ color: 'white' }} label="My Bets" {...a11yProps(0)} />
          <Tab sx={{ color: 'white' }} label="All Bets" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <DailyRouleteTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <DailyRouleteTable />
      </CustomTabPanel>
    </>
  )
}

export default CoinFlipTableTabs
