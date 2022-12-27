import styled from '@emotion/styled';
import { Avatar } from '@mui/material';
import { FlexAlignCenter, FlexCol, FlexRowCenterBetween } from '../atoms/flex';
import { Text } from '../atoms/text';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { StyledBadge } from '../atoms/badge';
import { colors } from '../../assets/colors';

const ConversationContainer = styled(FlexAlignCenter)`
  padding: 13px 1rem;
  &: hover {
    background: ${colors.darkGrey};
    cursor: pointer;
  }
`

export const ConversationInfo = styled(FlexCol)`
  margin-left: 10px;
  width: 100%;
`

const LastMessage = styled(Text)`
  font-size: 14px;
  margin: 0 5px;
  text-overflow: ellipsis; 
  overflow: hidden; 
  white-space: nowrap;
  max-width: 300px;
  color: gray;
`

const Conversation = () => {
  return (
    <ConversationContainer>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >

        <Avatar
          alt="User Name"
          sx={{ width: 50, height: 50 }}
        />
      </StyledBadge>
      <ConversationInfo>
        <FlexRowCenterBetween>
          <Text fsize={16} color={colors.white}>Bayu</Text>
          <Text fsize={12} color="gray">Kemarin</Text>
        </FlexRowCenterBetween>
        <FlexAlignCenter>
          <DoneAllIcon sx={{ width: 15, color: colors.white }} />
          <LastMessage>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio ex aliquid nemo molestiae temporibus maxime esse voluptatibus velit omnis.</LastMessage>
        </FlexAlignCenter>
      </ConversationInfo>
    </ConversationContainer>
  );
};

export default Conversation;