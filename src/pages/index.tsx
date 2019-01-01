import * as React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import withRoot from '../withRoot';

import { cards, ICard } from "../data";

import Card from "../components/Card";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      // textAlign: 'center',
      // paddingTop: theme.spacing.unit * 20,
    },
  });

type State = {
  cards: ICard[] | undefined;
};

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
