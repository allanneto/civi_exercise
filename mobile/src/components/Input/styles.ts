import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  position: relative;
  background: #fff;

  elevation: 11;

  border-radius: 10px;

  width: 100%;
`;

export const Input = styled.TextInput`
  padding: 10px 60px 10px 10px;

  border-bottom-color: #ccc;
  border-bottom-width: 1px;
`;

export const SendIcon = styled(Icon)`
  position: absolute;
  color: #128c7e;

  right: 10px;
  top: 25%;
`;
