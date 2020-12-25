import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    maxHeight: '36px'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

function SearchBar({setSearchValue}) {
  const classes = useStyles();
  const [inputValue ,setInputValue] = React.useState('')

  const handleInput = (event) => {
    setInputValue(event.target.value)
    setSearchValue(event.target.value)
  }

  return (
    <Paper component="form" className={classes.root}>
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Search users by name, id"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={(e) => handleInput(e)}
      />
    </Paper>
  );
}

export default SearchBar
