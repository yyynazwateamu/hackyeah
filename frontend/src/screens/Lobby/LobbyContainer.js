import React from 'react';
import CustomAppBar from '@components/CustomAppBar/CustomAppBar';

const options = [
  'Zgłoś',
];


export default function ButtonAppBar(props: Props) {
  return (
    <div >
        <CustomAppBar title="Lobby" options={['Zgłoś']} path={'/'} history={props.history} />
    </div>
  );
}

type Props = {
    history: object,
}
