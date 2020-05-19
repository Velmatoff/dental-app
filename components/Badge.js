import React from 'react'
import styled from "styled-components/native";

const getColor = ({active, color}) => {
    const colors = {
        green: {
            background: 'rgba(132, 210, 105, 0.21)',
            color: '#618842'
        },
        active: {
            background: '#2A86FF',
            color: "#fff"
        },
        default: {
            background: '#E9F5FF',
            color: "#4292FF"
        }
    };

    let result;

    if (active){
        result = colors.active
    }else  if (color && colors[color]){
        result = colors[color]
    }else {
        result = colors.default;
    }
    return result
};

const Badge = styled.Text`
    background: ${props => getColor(props).background} ;
    color: ${props => getColor(props).color} ;
    border-radius: 18px;
    font-weight: 600;
    font-size: 14px;
    width: 70px;
    height: 32px;
    text-align: center;
    line-height: 30px;
`;

export default Badge
