import React, { useState, useEffect } from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FormatDate from '../../services/formatDate';

import api from '../../services/api';
import * as Styled from './styles';

interface Message {
  id: string;
  subject: string;
  detail: string;
  read: boolean;
  parsed_date: string;
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

    const messagesArray = response.data.map(message => ({
      ...message,
      parsed_date: FormatDate(message.created_at),
    }));

    setMessages(messagesArray);
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

    const updateMessages = messages;

    const findIndex = updateMessages.findIndex(item => item.id === data.id);

    updateMessages[findIndex].read = true;

    setMessages(updateMessages);
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
            <Styled.Date>{messageInfo.parsed_date}</Styled.Date>
          </Styled.Box>
        </Styled.ModalBox>
      </Styled.TestModal>
      {messages.length === 0 ? (
        <Styled.Message>
          <Styled.Subject>No messages rocorded</Styled.Subject>
        </Styled.Message>
      ) : (
        messages.map(message => (
          <Styled.Message
            onPress={() => defineMessageInfo(message)}
            key={message.id}
          >
            <Styled.Subject>{message.subject}</Styled.Subject>
            <Styled.Info>
              <Styled.Date>{message.parsed_date}</Styled.Date>
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
