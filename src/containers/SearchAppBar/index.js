import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SearchBox from '../../components/searchBox'
import SearchAppBarComponent from '../../components/searchAppBar'


function SearchAppBar({ classes, title, children }) {
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            {title}
          </Typography>
          {children}
        </Toolbar>
      </AppBar>
    </div>
  );
}

class SearchAppBar extends Component {
  render() {
    const title = 'Movies for Jeff!!'
    const onSearchPlaceHolder = 
    return(
      <SearchAppBarComponent {...title}>
        <SearchBox onSearch={()=>}/>
      </SearchAppBarComponent>
    )
  }

// <div className={classes.grow} />
//           <div className={classes.search}>
//             <SearchBox onSearch={()=> console.log('hellooo')} />
//           </div>
// SearchAppBar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(SearchAppBar);