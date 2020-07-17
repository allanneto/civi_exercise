import React, { useState } from 'react';

import { ImageBackground } from 'react-native';

import Message from '../../components/Message';
import BackgroundImage from '../../assets/background.jpg';

import Input from '../../components/Input';
import * as Styled from './styles';

const Dashboard: React.FC = () => {
  const [update, setUpdate] = useState(false);

  return (
    <Styled.Background source={BackgroundImage}>
      <Styled.Container>
        <Styled.Content>
          <Message update={update} setUpdate={setUpdate} />
        </Styled.Content>
        <Input setUpdate={setUpdate} />
      </Styled.Container>
    </Styled.Background>
  );
};

export default Dashboard;
