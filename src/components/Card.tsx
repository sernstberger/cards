import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { ICard } from "../data";

const styles = {
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

export interface IProps {
  info: ICard;
  classes: any;
}

const SimpleCard: React.SFC<IProps> = (props) => {
  const { classes } = props;
  const cardInfo = props.info;

  return (
    <Card className={classes.card}>
      <CardContent>
        <img src="https://crasstalk.com/wp-content/uploads/2012/04/Luck-IND-copy-952x1024.png" style={{ width: "100%" }} alt="alskfj" />
        <Typography variant="h3">{cardInfo.rating}</Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {cardInfo.firstName}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {cardInfo.lastName}
        </Typography>
      </CardContent>
    </Card>
  );
}

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
