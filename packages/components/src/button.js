import React from 'react';
import styled from 'styled-components/native';

const StyledText = styled.Text`
  color: #fff;
`;

const StyledTouchable = styled.TouchableOpacity`
  background-color: #000;
  border-radius: 4px;
  height: 48px;
  justify-content: center;
  align-items: center;
`;

export default function Button({ children, textStyle, ...props }) {
  React.useEffect(() => {
    console.log('Effect');
  }, []);
  return (
    <>
      <StyledTouchable {...props}>
        <StyledText style={textStyle}>{children}</StyledText>
      </StyledTouchable>
    </>
  );
}
