import React, { FunctionComponent } from 'react'
import { styled } from "@mui/material/styles"
import { InputBase, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: 'fit-content',
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,
  borderRadius: theme.shape.borderRadius
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))


interface Props {
  text: string;
  defaultValue?: string | null;
  handleSearch: (e: React.SyntheticEvent) => void;
}

const Search: FunctionComponent<Props> = React.memo(({ text, handleSearch, defaultValue }) =>
(
  <StyledForm onSubmit={handleSearch}>
    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
      <SearchIcon color="secondary" />
    </IconButton>
    <StyledInputBase
      placeholder={text}
      name="search"
      defaultValue={defaultValue}
      key={defaultValue}
      inputProps={{ 'aria-label': text }}
    />
  </StyledForm>
))

export default Search