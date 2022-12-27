import styled from '@emotion/styled';
import { Button, InputBase } from '@mui/material';
import { colors } from '../../assets/colors';
import Background from '../atoms/background';
import { FlexCol } from '../atoms/flex';
import { Text } from '../atoms/text';

interface HomeContentProps {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void 
}

const ContainerForm = styled(FlexCol)`
  background: transparant;
  max-width: 300px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 2px 2px white;
`

const LoginInput = styled(InputBase)`
  border: 1px solid white;
  border-radius: 10px;
  padding: 0.1rem 1rem;
  color: white;
  margin-top: 1rem;
  text-align: center;
`

const CustomButton = styled(Button)`
  margin-top: 1rem;
  border-radius: 10px;
`

const HomeContent = (props: HomeContentProps) => {
  const { onChange } = props
  return (
    <Background>
      <ContainerForm>
        <Text color={colors.white} fsize={18} fontWeight={700}>LOGIN</Text>
        <LoginInput
          placeholder='Your Email'
          type='email'
          onChange={onChange}
        />
        <LoginInput
          placeholder='Your Password'
          type='password'
          onChange={onChange}
        />
        <CustomButton
          variant="outlined"
          color="secondary"
        >
          Login
        </CustomButton>
      </ContainerForm>
    </Background>
  );
};

export default HomeContent;