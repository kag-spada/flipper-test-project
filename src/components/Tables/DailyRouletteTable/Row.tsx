import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { IDailyRouleteTableProps } from '../../../utils/interfaces';

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color:"#BFD1EA",
    border: 0,
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "#16222B",
  },
  '&:nth-of-type(even)': {
    backgroundColor: "#121C23",
  },
}));

const Row = (props:IDailyRouleteTableProps) => {
  const { id, game, time, betAmount, multiplier,payout} = props
  return (

    <StyledTableRow key={id}>
      <StyledTableCell align="left">{game}</StyledTableCell>
      <StyledTableCell align="left">{time}</StyledTableCell>
      <StyledTableCell align="left">{betAmount}</StyledTableCell>
      <StyledTableCell align="left">{multiplier}</StyledTableCell>
      <StyledTableCell align="left">{payout}</StyledTableCell>
    </StyledTableRow>
  )
}

export default Row