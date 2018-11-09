import { connect } from 'react-redux';

import InspirationGenerator from '../components/InspirationGenerator';

import { getSuggestedInspiration } from '../../board/selectors';
import { topic } from '../../board/actions';

const mapStateToProps = state => ({
  inspiration: getSuggestedInspiration(state),
});

const mapDispatchToProps = {
  onGenerate: () => topic.generate(),
  onDiscard: topic.discard,
  onSelect: topic.use,
};

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  onDiscard: () => dispatchProps.onDiscard(stateProps.inspiration),
  onSelect: () => dispatchProps.onSelect(stateProps.inspiration),
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(InspirationGenerator);
