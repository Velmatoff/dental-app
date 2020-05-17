import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native'


export const Appointment = ({user, diagnosis, active, time}) => {
    return (
        <GroupItem>
            <Avatar
                sourse={{uri: user.avatar}}
            />
            <View style={{flex: 1}}>
                <FullName>{user.fullname}</FullName>
                <GrayText>{diagnosis}</GrayText>
            </View>
            <GroupDate active={active}>{time}</GroupDate>
        </GroupItem>
    )
};


const GroupDate = styled.Text`
    background: ${props => props.active ? '#2A86FF' : '#E9F5FF'};
    color: ${props => props.active ? '#fff' : '#4294ff'};
    border-radius: 18px;
    font-weight: 600;
    font-size: 14px;
    width: 70px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    
`;

const GrayText = styled.Text`
    font-size: 16px;
    color: #8b979f;
`;

const FullName = styled.Text`
    font-weight: 600;
    font-size: 16px;
`;

const Avatar = styled.Image`
    border-radius: 50px;
    width: 40px;
    height: 40px;
    margin-right: 15px;
`;

const GroupItem = styled.TouchableOpacity`
    align-items: center;
    flex-direction: row;
    padding: 20px 0;
    border-bottom-width: 1px;
    border-bottom-color: #f3f3f3;
`;

