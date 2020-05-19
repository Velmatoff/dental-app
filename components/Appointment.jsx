import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native'
import GrayText from "./GrayText";
import Badge from "./Badge";
import {Image} from "react-native";


export const Appointment = ({navigate, item}) => {
    const {user, active, time} = item;

    return (
        <GroupItem onPress={navigate.bind(this, "Patient", item)}>
            <Image
                style={{
                    borderTopRightRadius: 50,
                    height: 40,
                    width: 40,
                    marginRight: 15,
                }}
                sourse={{uri: user.avatar}}
            />
            <View style={{flex: 1}}>
                <FullName>{user.fullname}</FullName>
                <GrayText>{user.diagnosis}</GrayText>
            </View>
            <Badge active={active}>{time}</Badge>
        </GroupItem>
    )
};


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

