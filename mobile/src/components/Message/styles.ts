import styled from 'styled-components/native';

export const Message = styled.TouchableOpacity`
  background: #dcf8c6;
  elevation: 10;
  min-width: 70%;
  border-radius: 4px;
  padding: 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 20px;
`;

export const Subject = styled.Text`
  font-size: 16px;
  font-weight: bold;

  margin-right: 15px;
`;

export const Info = styled.View`
  display: flex;
  align-items: flex-end;
`;

export const Date = styled.Text`
  font-size: 14px;

  margin-bottom: 5px;
  align-self: flex-end;
`;

export const TestModal = styled.Modal`
  align-items: center;
  justify-content: center;
`;

export const ModalBox = styled.TouchableOpacity`
  flex: 1;

  align-items: center;
  justify-content: center;

  padding: 0 20px;
`;

export const Box = styled.View`
  align-items: center;

  width: 100%;
  background: #fff;
  elevation: 5;

  padding: 10px;
  border-radius: 4px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;

  margin-bottom: 10px;
`;

export const Content = styled.Text`
  font-size: 16px;
`;
