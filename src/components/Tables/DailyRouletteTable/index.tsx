import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Row from './Row'

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#121C23',
    color: '#3D4D65',
    border: 0,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const createData = (
  id: number,
  game: string,
  time: string,
  betAmount: number,
  multiplier: number,
  payout: number
) => {
  return { id, game, time, betAmount, multiplier, payout }
}

const rows = [
  createData(1, 'Arsenal (Alicia) - Chelsea (July)', '00:23', 6.0, 24, 4.0),
  createData(2, 'Arsenal (Alicia) - Chelsea (July)', '00:23', 9.0, 37, 4.3),
  createData(3, 'Arsenal (Alicia) - Chelsea (July)', '00:23', 16.0, 24, 6.0),
  createData(4, 'Arsenal (Alicia) - Chelsea (July)', '00:23', 3.7, 67, 4.3),
  createData(5, 'Arsenal (Alicia) - Chelsea (July)', '00:23', 16.0, 49, 3.9),
]

const DailyRouleteTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Game</StyledTableCell>
            <StyledTableCell align="left">Time</StyledTableCell>
            <StyledTableCell align="left">Bet Amount</StyledTableCell>
            <StyledTableCell align="left">Multiplier</StyledTableCell>
            <StyledTableCell align="left">Payout</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row
              id={row.id}
              game={row.game}
              time={row.time}
              betAmount={row.betAmount}
              multiplier={row.multiplier}
              payout={row.payout}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DailyRouleteTable
