import React from 'react';
import CustomAppBar from '@components/CustomAppBar/CustomAppBar';
import LobbyTable from './LobbyTable';
import CustomButton from '@components/CustomButton/CustomButton';

const options = [
  'Zgłoś',
];


export default function LobbyContainer(props: Props) {
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
