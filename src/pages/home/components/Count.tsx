import * as React from 'react';
import { connect } from 'react-redux';
import { HomePageState } from '../../../models/HomePageState';
import { Dispatch } from 'redux';
import * as actions from '../actions';

interface StateProps {
  count: number;
}

interface DispatchProps {
  increment: () => void;
  decrement: () => void;
}

class Count extends React.Component<StateProps & DispatchProps> {
  render() {
    const { increment, decrement } = this.props;

    return (
      <div>
        <div>当前计数：{this.props.count}</div>
        <div>
          <button
            onClick={() => {
              increment();
            }}
            style={{ marginRight: '20px' }}
          >
            +
          </button>
          <button
            onClick={() => {
              decrement();
            }}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (pageState: HomePageState) => {
  return {
    count: pageState.count,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    increment: () => {
      dispatch(actions.increment());
    },
    decrement: () => {
      dispatch(actions.decrement());
    },
  };
};

export default connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(Count);
