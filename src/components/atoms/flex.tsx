import styled from "@emotion/styled";

export const Flex = styled.div`
  display: flex;
`

export const FlexCol = styled(Flex)`
  flex-direction: column;
`

export const FlexAlignCenter = styled(Flex)`
  align-items: center;
`
export const FlexRowBetween = styled(Flex)`
  justify-content: space-between;
`

export const FlexRowCenterBetween = styled(FlexAlignCenter)`
  justify-content: space-between;
`

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
`