import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import CustomAppBar from '@components/CustomAppBar/CustomAppBar';
import LobbyTable from './LobbyTable';
import CustomButton from '@components/CustomButton/CustomButton';
import { lobbyActions } from '@actions';
import { lobbySelectors } from '@reducers';
import CheckIcon from '@material-ui/icons/Check';
import DotLoader from '@assets/icons/dot-loader.svg';

const options = [
  'Zgłoś',
];

const LobbyContainer = (props: Props) => {

  useEffect(() => {
    props.getLobbyData();
  }, []);

  const { users } = props;

  const rows = users && users.map(user => ({ name: user.name, readyIcon: (user.ready ? <CheckIcon /> : <img src={DotLoader} />) }));
  const userCount = users && {
    ready: users.reduce((count, user) => user.ready ? count + 1 : count, 0),
    total: users.length,
  };

  return (
    <div >
        <CustomAppBar title="Lobby" options={options} path={'/'} history={props.history} />
        <LobbyTable rows={rows} />
        <CustomButton text={'Gotowość ' + (userCount && `${userCount.ready}/${userCount.total}`)} bottom />
    </div>
  );
};

type Props = {
  history: object,
  title: string,
  users: Array<object>,
  getLobbyData: () => void,
}

const mapStateToProps = (state) => ({
  title: lobbySelectors.getTitle(state),
  users: lobbySelectors.getUsers(state),
});

const mapDispatchToProps = (dispatch) => ({
  getLobbyData: () => dispatch(lobbyActions.getLobbyData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LobbyContainer);