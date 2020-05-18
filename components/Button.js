import styled from "styled-components/native/dist/styled-components.native.esm";
import React from "react";


const Button = ({ children, color }) => {
    return(
        <ButtonWrapper color={color}>
            <ButtonText>
                { children }
            </ButtonText>
        </ButtonWrapper>
    )
};

Button.defaultProps = {
    color: '#2a86ff'
};




const ButtonWrapper = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    height: 45px;
    background: ${props => props.color};
`;

const ButtonText = styled.Text`
    color: white;
    font-weight: 600;
    font-size: 16px;
`;

export default Button
