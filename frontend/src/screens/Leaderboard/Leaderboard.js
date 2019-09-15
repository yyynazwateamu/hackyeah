//@flow
import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import CustomAppBar from '@components/CustomAppBar/CustomAppBar';
import LeaderboardTable from './LeaderboardTable';
import CustomButton from '@components/CustomButton/CustomButton';
import { leaderboardActions, userActions } from '@actions';
import { leaderboardSelectors } from '@reducers';
import './leaderboard-container.scss';

const options = [
  'Zgłoś',
];



const Leaderboard = (props: Props) => {


  const { users } = props;

  useEffect(() => {
    props.getLeaderboardData();
    return () => clearInterval(interval);
  }, []);

  const rows = users && users.map(user => ({ name: user.name, points: user.points }));

  return (
    <div >
        <CustomAppBar title="Leaderboard" options={options} path={'/'} history={props.history} />
        <LeaderboardTable rows={rows} />
        <div className='button-container'>
          <div className='next-button'>
            <CustomButton text='Next round' />
          </div>
          <CustomButton text='Back to home' />
        </div>
    </div>
  );
};

type Props = {
  history: object,
  title: string,
  users: Array<object>,
  getLeaderboardData: () => void,
  getUserDetails: () => void,
}

const mapStateToProps = (state) => ({
  title: leaderboardSelectors.getTitle(state),
  users: leaderboardSelectors.getUsers(state),
});

const mapDispatchToProps = (dispatch) => ({
  getLeaderboardData: () => dispatch(leaderboardActions.getLeaderboardData()),
  getUserDetails: () => dispatch(userActions.getUserDetails()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);