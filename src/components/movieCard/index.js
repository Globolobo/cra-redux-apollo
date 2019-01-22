import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GridListTile from '@material-ui/core/GridListTile'

import styles from './styles'


function MovieCard ({ title, classes, date, overview, imgSrc, expanded, onClick }) {
  return (
    <GridListTile cols={2}>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Movie" className={classes.avatar}>
              M
            </Avatar>
          }
          {...{title}}
          subheader={date}
        />
        <CardMedia
          className={classes.media}
          image={imgSrc}
          {...{title}}
        />
        <CardActions className={classes.actions} disableActionSpacing>
        <Typography paragraph>Overview</Typography>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            {...{onClick}}
            aria-expanded={expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              {overview}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </GridListTile>
  );
}

MovieCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieCard);