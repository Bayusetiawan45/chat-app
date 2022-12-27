import styled from '@emotion/styled';
import { Flex } from '../atoms/flex';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { InputBase } from '@mui/material';
import { colors } from '../../assets/colors';

const FooterChatContainer = styled(Flex)`
  position: fixed;
  bottom: 0;
  padding: 1rem 0;
  width: 69%;
`

const WrapFooterContent = styled(Flex)`
  background: ${colors.darkGrey};
  width: 100%;
  align-self: center;
  color: ${colors.white};
  align-items: center;
  padding: 0.5rem;
  border-radius: 20px;
`

const ChatInput = styled(InputBase)`
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  width: 100%;
  color: ${colors.white}
`

const IconContainer = styled(Flex)`
  background: ${colors.accent};
  padding: 5px;
  width: 25px;
  height: 25px;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  border-radius: 12px;
  cursor: pointer;
`

const FooterChat = () => {
  return (
    <FooterChatContainer>
      <WrapFooterContent>
        <ChatInput />
        <AttachFileIcon sx={{ width: 20 }} />
        <IconContainer>
          <SendRoundedIcon sx={{ width: 20, color: colors.black }}  />
        </IconContainer>
      </WrapFooterContent>
    </FooterChatContainer>
  );
};

export default FooterChat;