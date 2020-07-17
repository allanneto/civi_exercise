import React, { useState, useEffect } from 'react';

import { format } from 'date-fns';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import api from '../../services/api';
import * as Styled from './styles';

interface Message {
  id: string;
  subject: string;
  detail: string;
  read: boolean;
  created_at: string;
  updated_at: string;
}

interface HighOrderComponentDTO {
  setUpdate: (boolean: boolean) => void;
  update: boolean;
}

const Message: React.FC = ({ setUpdate, update }: HighOrderComponentDTO) => {
  const [visible, setVisible] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageInfo, setMessageInfo] = useState({});

  const loadMessages = async () => {
    const response = await api.get('/messages');

    setMessages(response.data);
    setUpdate(false);
  };

  useEffect(() => {
    loadMessages();
  }, []);

  useEffect(() => {
    if (update === true) {
      loadMessages();
    }
  }, [update]);

  const toggleModalVisible = () => {
    setVisible(current => !current);
  };

  const defineMessageInfo = async (data: Message) => {
    await api.put('/messages', {
      message_id: data.id,
    });

    loadMessages();
    setMessageInfo(data);
    toggleModalVisible();
  };

  return (
    <>
      <Styled.TestModal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={toggleModalVisible}
      >
        <Styled.ModalBox onPress={toggleModalVisible}>
          <Styled.Box>
            <Styled.Title>{messageInfo.subject}</Styled.Title>
            <Styled.Content>{messageInfo.detail}</Styled.Content>
            <Styled.Date>{messageInfo.created_at}</Styled.Date>
          </Styled.Box>
        </Styled.ModalBox>
      </Styled.TestModal>
      {messages.length === 0 ? (
        <Styled.Message>
          <Styled.Subject>Sem mensagens cadastradas</Styled.Subject>
        </Styled.Message>
      ) : (
        messages.map(message => (
          <Styled.Message
            onPress={() => defineMessageInfo(message)}
            key={message.id}
          >
            <Styled.Subject>{message.subject}</Styled.Subject>
            <Styled.Info>
              <Styled.Date>{message.created_at}</Styled.Date>
              <Icon
                size={20}
                name="message-bulleted"
                color={message.read === true ? '#34b7f1' : '#ccc9c6'}
              />
            </Styled.Info>
          </Styled.Message>
        ))
      )}
    </>
  );
};

export default Message;
