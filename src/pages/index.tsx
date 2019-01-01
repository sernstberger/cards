import * as React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
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

export interface ICard {
  id: number;
  name: string;
  rating: number;
}

type State = {
  cards: ICard[] | undefined;
};

// silver = 1000 - 1999
// gold = 2000 - 2999
// platinum = 3000 - 3999
// legend = 4000 - 4999

const cards: ICard[] = [
  {
    id: 2000,
    name: "Barkevious Mingo",
    rating: 80,
  },

  {
    id: 3000,
    name: "Andrew Luck",
    rating: 80,
  },

  {
    id: 1000,
    name: "Joe Haeg",
    rating: 80,
  },

  {
    id: 1001,
    name: "Ryan Grant",
    rating: 81,
  },

  {
    id: 1002,
    name: "Zack Pascal",
    rating: 82,
  },
  
  {
    id: 1003,
    name: "Zack Rascal",
    rating: 83,
  },

  {
    id: 1004,
    name: "Zack Mascal",
    rating: 84,
  },

  {
    id: 1005,
    name: "Wack Nascal",
    rating: 85,
  },

  {
    id: 2001,
    name: "Quenton Nelson",
    rating: 80,
  },

  {
    id: 4000,
    name: "Dwight Freeney",
    rating: 80,
  },
];

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

class Index extends React.Component<WithStyles<typeof styles>, State> {
  state = {
    cards: [] as ICard[],
  };

  handleClick = () => {
    const randomNumber: number = getRandomInt(1000, 1005);
    const result: ICard | undefined = cards.find( card => card.id === randomNumber );

    console.log(result);

    const blah: ICard[] = this.state.cards.concat(result as ICard);
    console.log(blah);

    this.setState({
      // cards: this.state.cards.push(result),
      cards: blah,
    }, () => console.log("yep", this.state.cards));
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        <Typography variant="h4" gutterBottom>
          Material-UI
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          example project
        </Typography>

        <Button variant="contained" onClick={() => this.handleClick()}>
          Random Player
        </Button>

        <Grid container spacing={32}>
          {this.state.cards.map((card: ICard, index: number) => {
            return (
              <Grid key={index} item xs={3}>
                <Card info={card} />
              </Grid>
            );
          })}

        </Grid>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(Index));
