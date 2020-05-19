import React from 'react'
import styled from 'styled-components/native'
import GrayText from "../components/GrayText";
import Button from "../components/Button";
import {Foundation} from "@expo/vector-icons";
import {View, Text} from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Badge from "../components/Badge";



const PatientScreen = ({navigation}) => {
    const {fullname, phone, diagnosis} = navigation.getParam('user');
    return (
        <View style={{flex: 1}}>
            <PatientDetails>
                <PatientFullname>{fullname}</PatientFullname>
                <GrayText>{phone}</GrayText>

                <PatientButtons>
                    <FormulaButtonView>
                        <Button> Формула зубов </Button>
                    </FormulaButtonView>
                    <PhoneButtonView>
                        <Button color='#84D269'>
                            <Foundation name="telephone" size={22} color="white"/>
                        </Button>
                    </PhoneButtonView>
                </PatientButtons>
            </PatientDetails>

            <PatientAppointments>
                <Container>
                    <AppointmentCard>
                        <AppointmentCardRow>
                            <MaterialCommunityIcons name="tooth" size={16} color="#A3A3A3"/>
                            <AppointmentCardLabel>
                                Зуб:
                                <Text style={{fontWeight: "600"}}> 12 </Text>
                            </AppointmentCardLabel>
                        </AppointmentCardRow>

                        <AppointmentCardRow>
                            <Foundation name="clipboard-notes" size={16} color="#A3A3A3"/>
                            <AppointmentCardLabel>
                                Диагноз:
                                <Text style={{fontWeight: '600'}}> {diagnosis} </Text>
                            </AppointmentCardLabel>
                        </AppointmentCardRow>
                        <AppointmentCardRow style={{
                            marginTop: 15,
                            justifyContent: "space-around",
                        }}
                        >
                            <Badge style={{width: 155}} active>11.102019 - 15:40</Badge>
                            <Badge color='green'>1500 Р</Badge>
                        </AppointmentCardRow>
                    </AppointmentCard>
                </Container>
            </PatientAppointments>

        </View>
    )
};

const AppointmentCardRow = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 3.5px;
    margin-top: 3.5px;
`;

const AppointmentCardLabel = styled.Text`
    font-size: 16px;
    margin-left: 10px;
       
`;
const AppointmentCard = styled.View`
    shadow-color: black;
    elevation: 1;
    shadow-opacity: 0.4;
    shadow-radius: 3.5;
    padding: 20px 25px;
    border-radius: 10px;
    background-color: white;
    
`;

const Container = styled.View`
    padding: 25px;
    flex: 1;
`;

const PatientDetails = styled(Container)`
    flex: 0.3;
`;

const PatientAppointments = styled.View`
    flex: 1;
   background: #F8FAFD;
`;

const FormulaButtonView = styled.View`
    flex: 1;
`;

const PhoneButtonView = styled.View`
    margin-left: 10px;
    width: 45px;
`;

const PatientButtons = styled.View`
    flex: 1;
    flex-direction: row;
    margin-top: 20px;
   
`;

const PatientFullname = styled.Text`
    font-weight: 800;
    line-height: 30px;
    font-size: 24px;
    margin-bottom: 3px;
`;

PatientScreen.navigationOptions = {
    title: 'Карта пациента',
    headerTintColor: '#2A86FF',
    headerStyle: {
        elevation: 0.8,
        shadowOpacity: 0.8
    }

};

export default PatientScreen;
