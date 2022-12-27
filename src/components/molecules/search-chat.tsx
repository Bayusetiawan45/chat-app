import styled from "@emotion/styled";
import { InputBase } from "@mui/material";
import { Flex } from "../atoms/flex";
import SearchIcon from '@mui/icons-material/Search';
import { colors } from "../../assets/colors";

const ContainerSearch = styled(Flex)`
  margin: 0.5rem 1rem;
  align-items: center;
  border: none;
  padding: 5px 10px;
  border-radius: 20px;
  background: ${colors.darkGrey}
`

const SearchInput = styled(InputBase)`
  width: 100%;
  padding: 0 5px;
  color: gray;
`
const SearchChat = () => {
  return (
    <ContainerSearch>
      <SearchIcon sx={{ color: 'gray' }} />
      <SearchInput placeholder="Search Chat" />
    </ContainerSearch>
  );
};

export default SearchChat;