import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

export interface IProps {
  name: string;
  classes: any;
}

const SimpleCard: React.SFC<IProps> = (props) => {
// function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.name}
        </Typography>
      </CardContent>
    </Card>
  );
}

// SimpleCard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(SimpleCard);















// import * as React from "react";

// import * as Mui from "@material-ui/core/";
// import Link from "ModulesNew/Shared/Link";

// import styled from "react-emotion";

// export interface IProps {
//   linkLabel: string;
//   linkPath: string;
//   icon?: JSX.Element;
//   count?: number;
//   tabId?: number;
// }

// const PanelRow: React.SFC<IProps> = (props) => {

//   return (
//   <Mui.ListItem divider>
//     <CountContainer>
//       <Mui.Typography variant="h4" align="right">{props.count}</Mui.Typography>
//     </CountContainer>
//     <IconContainer>
//       {props.icon && props.icon}
//     </IconContainer>
//     <div>
//       <Link to={{ pathname: props.linkPath, state: { tabId: props.tabId }}}>
//         {props.linkLabel}
//       </Link>
//     </div>
//   </Mui.ListItem>
//   );
// };

// export default PanelRow;

// const CountContainer = styled("div")({
//   minWidth: 80,
// });

// const IconContainer = styled("div")({
//   display: "flex",
//   margin: "0 20px",
//   width: 20,
// });

// // const PanelLabel = styled("div")({
// //   fontSize: 13,
// // });
