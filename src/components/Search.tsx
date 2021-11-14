import React, { FunctionComponent } from 'react'
import { styled } from "@mui/material/styles"
import { InputBase, IconButton, CircularProgress } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'

const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: 'fit-content',
  padding: theme.spacing(1),
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
  placeholder: string;
  loading: boolean;
  defaultValue?: string | null;
  handleSearch: (type: 'search', newValue: string) => void;
}

const Search: FunctionComponent<Props> = React.memo(({ placeholder, loading, handleSearch, defaultValue }) => (
  <StyledForm onSubmit={(e) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      search: { value: string }
    }
    handleSearch('search', target.search.value)
  }}>
    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
      {loading ?
        <CircularProgress color="secondary" />
        :
        <SearchIcon color="secondary" />
      }
    </IconButton>
    <StyledInputBase
      placeholder={defaultValue || placeholder}
      name="search"
      defaultValue={defaultValue}
      key={defaultValue}
      inputProps={{ 'aria-label': placeholder }}
    />
    <IconButton onClick={() => handleSearch('search', '')} sx={{ p: '10px' }} aria-label="clear">
      {defaultValue && <ClearIcon color="secondary" />}
    </IconButton>
  </StyledForm>
))

export default Search