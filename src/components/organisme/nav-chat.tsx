import styled from '@emotion/styled';
import { Avatar } from '@mui/material';
import { Flex, FlexRowCenterBetween } from '../atoms/flex';
import { Text } from '../atoms/text';
import { ConversationInfo } from './conversation';
import SearchIcon from '@mui/icons-material/Search';
import {colors} from '../../assets/colors'

const NavChatContainer = styled(Flex)`
  width: 100%;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  background: ${ colors.black };
`

const NavContent = styled(FlexRowCenterBetween)`
  width: 100%;
`

const NavChat = () => {
  return (
    <NavChatContainer>
      <Avatar
        alt="User Name"
        sx={{ width: 40, height: 40 }}
      />
      <NavContent>
        <ConversationInfo>
          <Text color={colors.white}>Bayu</Text>
          <Text fsize={12} color="gray">Terakhir kali dilihat kemarin</Text>
        </ConversationInfo>
        <SearchIcon />
      </NavContent>
    </NavChatContainer>
  );
};

export default NavChat;