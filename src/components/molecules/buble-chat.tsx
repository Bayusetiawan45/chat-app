import styled from '@emotion/styled';
import React from 'react';
import { colors } from '../../assets/colors';
import { Flex } from '../atoms/flex';

interface ChatBublesProps {
  action: 'send' | 'receive'
}

interface ChatComponentProps {
  action: 'send' | 'receive'
}

const ContainerChat = styled(Flex) <ChatComponentProps>`
  flex-direction: ${(props) => props.action === 'send' ? 'row-reverse' : 'row'};
  width: max-content;
  align-items: flex-start;
  margin: ${(props) => props.action === 'send' ? '3px 10px 3px auto' : '3px 0 3px 10px'};
  transition: 0.5s;
  animation: speech 0.7s linear 1;
  background: ${(props) => props.action === 'send' ? colors.secondary : colors.darkGrey};
  color: ${colors.white};
  height: auto;
  padding: 9px 15px;
  border-radius: 5px;
  position: relative;
  text-align: start;
  &:after {
    content: " ";
    position: absolute;
    border: 7px solid transparent;
    border-top-color: ${(props) => props.action === 'send' ? colors.secondary : colors.darkGrey};
    top: 0;
    ${(props) => props.action === 'send' ? 'right' : 'left'}: -7px;
    border-right: color: ${(props) => props.action === 'send' ? colors.secondary : colors.darkGrey};
  }
`;

const BubleChat = (props: ChatBublesProps) => {
  const { action } = props
  return (
    <ContainerChat action={action}>
      helo
    </ContainerChat>
  );
};

export default BubleChat;