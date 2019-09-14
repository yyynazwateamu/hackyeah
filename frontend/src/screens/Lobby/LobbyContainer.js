import React from 'react';
import CustomAppBar from '@components/CustomAppBar/CustomAppBar';
import LobbyTable from './LobbyTable';
import CustomButton from '@components/CustomButton/CustomButton';

const options = [
  'Zgłoś',
];

const LobbyContainer = (props: Props) => {
  props.getLobbyData();
  return (
    <div >
        <CustomAppBar title="Lobby" options={options} path={'/'} history={props.history} />
        <LobbyTable />
        <CustomButton text='Gotowość 3/4' bottom />
    </div>
  );
}

type Props = {
    history: object,
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  getLobbyData: () => dispatch(lobbyActions.getLobbyData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LobbyContainer);