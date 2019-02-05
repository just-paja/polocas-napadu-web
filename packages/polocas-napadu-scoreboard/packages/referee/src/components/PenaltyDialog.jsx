import Avatar from '@material-ui/core/Avatar';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Group from '@material-ui/icons/Group';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import React from 'react';

import { Classes } from 'core/proptypes';
import { MatchContext } from 'core/context';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  teams: {
    display: 'flex',
    justifyContent: 'center',
  },
};

class PenaltyDialog extends React.Component {
  constructor() {
    super();
    this.handleTabChange = this.handleTabChange.bind(this);
    this.state = { tab: 'groups' };
  }

  handleTabChange(event, tab) {
    this.setState({ tab });
  }

  render() {
    const {
      classes,
      onClose,
      open,
    } = this.props;
    return (
      <MatchContext.Consumer>
        {data => (
          <Dialog
            aria-labelledby="penaltyDialogTitle"
            onClose={onClose}
            open={open}
          >
            <DialogTitle id="penaltyDialogTitle">
              Udělit trestný bod
            </DialogTitle>
            <DialogContent class={classes.teams}>
              {data.match.contestantGroups.map(group => (
                <List>
                  <ListItem button key={group.id} onClick={() => {}}>
                    <ListItemAvatar>
                      <Avatar>
                        {group.logo
                          ? <img src={group.logo} alt={group.band.name} />
                          : <Group />}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={group.band.name} />
                  </ListItem>
                </List>
              ))}
            </DialogContent>
          </Dialog>
        )}
      </MatchContext.Consumer>
    );
  }
}

PenaltyDialog.propTypes = {
  classes: Classes.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(PenaltyDialog);
