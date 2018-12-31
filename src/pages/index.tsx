import * as React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import withRoot from '../withRoot';

import Card from "../components/Card";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      // textAlign: 'center',
      // paddingTop: theme.spacing.unit * 20,
    },
  });

type State = {
  open: boolean;
};

const cards = [
  {
    id: 1,
    name: "Barkevious Mingo",
  },

  {
    id: 2,
    name: "Andrew Luck",
  },

  {
    id: 3,
    name: "Joe Haeg",
  },

  {
    id: 4,
    name: "Quenton Nelson",
  },

  {
    id: 5,
    name: "Dwight Freeney",
  },
];

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

class Index extends React.Component<WithStyles<typeof styles>, State> {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const randomNumber = getRandomInt(1, 5);
    const result = cards.find( fruit => fruit.id === randomNumber );

    console.log(result);
    return (
      <div className={this.props.classes.root}>
        <Typography variant="h4" gutterBottom>
          Material-UI
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          example project
        </Typography>
        <Card
          name={result!.name}
        />
        {/* {result && result!.map((card, index) => {
          return (
            <Card
              key={index}
              name={card.name}
            />
          );
        })} */}
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(Index));
