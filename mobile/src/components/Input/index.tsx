import React, { useState } from 'react';

import { Keyboard } from 'react-native';

import * as Styled from './styles';

import api from '../../services/api';

interface HighOrderComponentDTO {
  setUpdate: () => void;
}

const Input: React.FC = ({ setUpdate }: HighOrderComponentDTO) => {
  const [subject, setSubject] = useState('');
  const [detail, setDetail] = useState('');

  const submitInfo = async () => {
    await api.post('/messages', {
      subject,
      detail,
    });

    setDetail('');
    setSubject('');

    setUpdate(true);

    Keyboard.dismiss();
  };

  return (
    <Styled.Container>
      <Styled.Input
        placeholder="Message subject"
        value={subject}
        onChangeText={text => setSubject(text)}
      />
      <Styled.Input
        placeholder="Message detail"
        value={detail}
        onChangeText={text => setDetail(text)}
      />
      <Styled.SendIcon onPress={submitInfo} name="send-circle" size={50} />
    </Styled.Container>
  );
};

export default Input;
