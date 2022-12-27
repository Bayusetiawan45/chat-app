import styled from '@emotion/styled';
import { colors } from '../../assets/colors';
import { Flex, FlexCol } from '../atoms/flex';
import BubleChat from '../molecules/buble-chat';
import SearchChat from '../molecules/search-chat';
import Conversation from '../organisme/conversation';
import FooterChat from '../organisme/footer-chat';
import NavChat from '../organisme/nav-chat';

const ContainerChat = styled(Flex)`
  justify-content: space-between;
  height: 100vh;
`

const LeftContent = styled(FlexCol)`
  width: 40%;
  padding: 1.5rem 0;
  box-sizing: border-box;
`
const RightContent = styled(FlexCol)`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  background: ${colors.primary};
`

export const Scrollable = styled(FlexCol)`
  max-height: 83vh;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`

const ChatSection = styled(FlexCol)`
  height: auto;
  padding: 0 1rem 5rem 1rem;
`

const ChatContent = () => {
  return (
    <ContainerChat>
      <LeftContent>
        <SearchChat />
        <Scrollable>
          <Conversation />
        </Scrollable>
      </LeftContent>
      <RightContent>
        <NavChat />
        <ChatSection>
          <Scrollable>
            <BubleChat action='send' />
            <BubleChat action='receive' />
            <BubleChat action='send' />
            <BubleChat action='send' />
            <BubleChat action='receive' />
            <BubleChat action='send' />
            <BubleChat action='send' />
            <BubleChat action='receive' />
            <BubleChat action='send' />
            <BubleChat action='send' />
            <BubleChat action='receive' />
            <BubleChat action='send' />
            <BubleChat action='send' />
            <BubleChat action='receive' />
            <BubleChat action='send' />
            <BubleChat action='send' />
            <BubleChat action='receive' />
            <BubleChat action='send' />
            <BubleChat action='send' />
            <BubleChat action='receive' />
            <BubleChat action='send' />
            <BubleChat action='send' />
            <BubleChat action='receive' />
            <BubleChat action='send' />
          </Scrollable>
          <FooterChat />
        </ChatSection>
      </RightContent>
    </ContainerChat>
  );
};

export default ChatContent;