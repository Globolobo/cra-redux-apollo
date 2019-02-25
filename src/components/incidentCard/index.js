import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import GridListTile from '@material-ui/core/GridListTile'

import styles from './styles'

const defaultImgSrc = 'https://image.tmdb.org/t/p/original/mc7MubOLcIw3MDvnuQFrO9psfCa.jpg'

const IncidentCard = memo(({ title = 'Incident Name', classes = {}, status = '', imgSrc = defaultImgSrc, children}) => {
  return (
    <GridListTile cols={2}>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Incident" className={classes.avatar}>
              I
            </Avatar>
          }
          {...{title}}
          subheader={`Incident Status: ${status}`}
        />
        <CardMedia
          className={classes.media}
          image={imgSrc}
          {...{title}}
        />
        <CardContent>
          {children}
        </CardContent>
      </Card>
    </GridListTile>
  );
})

IncidentCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  status: PropTypes.string,
  imgSrc: PropTypes.string,
  children: PropTypes.node
};

export default withStyles(styles)(IncidentCard);