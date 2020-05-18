import React from 'react';
import styled from 'styled-components/native'
import {Appointment} from "../components/Appointment";
import {SectionList} from "react-native";
import SectionTitle from "../components/SectionTitle";
import {Ionicons} from '@expo/vector-icons';

const DATA = [
    {
        title: '12 сентября',
        data: [
            {
                time: '12:30',
                active: true,
                user: {
                    diagnosis: 'зубы',
                    fullname: 'Иван Голунов',
                    avatar: 'https://vk.com/images/camera_100.png?ava=1'
                }
            },
            {
                time: '13:30',
                active: false,
                user: {
                    diagnosis: 'пульпит',
                    fullname: 'Вася Пупкин',
                    avatar: 'https://i7.pngflow.com/pngimage/379/610/png-computer-icons-computer-software-font-awesome-user-others-service-logo-compass-sign-clipart.png'
                }
            },
        ]
    },
    {
        title: '13 сентября',
        data: [
            {
                time: '12:30',
                active: true,
                user: {
                    diagnosis: 'зубы',
                    fullname: 'Иван Голунов',
                    avatar: 'https://i7.pngflow.com/pngimage/379/610/png-computer-icons-computer-software-font-awesome-user-others-service-logo-compass-sign-clipart.png'
                }
            },
            {
                time: '13:30',
                active: false,
                user: {
                    diagnosis: 'пульпит',
                    fullname: 'Вася Пупкин',
                    avatar: 'https://i7.pngflow.com/pngimage/379/610/png-computer-icons-computer-software-font-awesome-user-others-service-logo-compass-sign-clipart.png'
                }
            }
        ]
    },
    {
        title: '14 сентября',
        data: [
            {
                time: '12:30',
                active: true,
                user: {
                    diagnosis: 'зубы',
                    fullname: 'Иван Голунов',
                    avatar: 'https://i7.pngflow.com/pngimage/379/610/png-computer-icons-computer-software-font-awesome-user-others-service-logo-compass-sign-clipart.png'
                }
            },
            {
                time: '13:30',
                active: false,
                user: {
                    diagnosis: 'пульпит',
                    fullname: 'Вася Пупкин',
                    avatar: 'https://i7.pngflow.com/pngimage/379/610/png-computer-icons-computer-software-font-awesome-user-others-service-logo-compass-sign-clipart.png'
                }
            },
            {
                time: '13:30',
                active: false,
                user: {
                    diagnosis: 'пульпит',
                    fullname: 'Вася Пупкин',
                    avatar: 'https://i7.pngflow.com/pngimage/379/610/png-computer-icons-computer-software-font-awesome-user-others-service-logo-compass-sign-clipart.png'
                }
            },
            {
                time: '13:30',
                active: false,
                user: {
                    diagnosis: 'пульпит',
                    fullname: 'Вася Пупкин',
                    avatar: 'https://i7.pngflow.com/pngimage/379/610/png-computer-icons-computer-software-font-awesome-user-others-service-logo-compass-sign-clipart.png'
                }
            },
            {
                time: '13:30',
                active: false,
                user: {
                    diagnosis: 'пульпит',
                    fullname: 'Вася Пупкин',
                    avatar: 'https://i7.pngflow.com/pngimage/379/610/png-computer-icons-computer-software-font-awesome-user-others-service-logo-compass-sign-clipart.png'
                }
            },
            {
                time: '13:30',
                active: false,
                user: {
                    diagnosis: 'пульпит',
                    fullname: 'Вася Пупкин',
                    avatar: 'https://i7.pngflow.com/pngimage/379/610/png-computer-icons-computer-software-font-awesome-user-others-service-logo-compass-sign-clipart.png'
                }
            }
        ]
    }
];

function HomeScreen(props) {
    const {navigation} = props;
    return (
        <Container>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => <Appointment navigate={navigation.navigate} item={item}/>}
                renderSectionHeader={({section: {title}}) => (
                    <SectionTitle>{title}</SectionTitle>
                )}
            />
            <PlusButton
                style={{
                    shadowColor: "#2A86FF",
                    shadowOffset: {
                        width: 0,
                        height: 2
                    },
                    shadowOpacity: 0.3,
                    shadowRadius: 3.5,
                    elevation: 5
                }}
            >
                <Ionicons name="ios-add" size={32} color="white"/>
            </PlusButton>

        </Container>
    )
}

HomeScreen.navigationOptions = {
    title: 'Пациенты',
    headerTintColor: '#2A86FF',
    headerStyle: {
        elevation: 0.8,
        shadowOpacity: 0.8
    }

};


const PlusButton = styled.TouchableOpacity`
    position: absolute;
    align-items: center;
    justify-content: center
    border-radius: 50px;
    width: 64px;
    height: 64px;
    background: #2a86ff;
    right: 25px;
    bottom: 25px;
    
    
    `;

const Container = styled.View`
    flex: 1;
    padding: 0 20px;
`;


export default HomeScreen
