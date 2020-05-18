import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native'
import GrayText from "./GrayText";


export const Appointment = ({navigate, item}) => {
    const {user,active,time} = item;

    return (
        <GroupItem onPress={navigate.bind(this, "Patient", item)}>
            <Avatar
                sourse={{uri: user.avatar}}
            />
            <View style={{flex: 1}}>
                <FullName>{user.fullname}</FullName>
                <GrayText>{user.diagnosis}</GrayText>
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
    line-height: 30px;
    
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

