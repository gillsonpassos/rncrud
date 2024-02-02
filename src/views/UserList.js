import React from 'react'
import { View, Text, FlatList, Alert } from 'react-native'
import Users from '../data/Users'
import { ListItem, Avatar, Button, Icon } from 'react-native-elements'

export default props => {

    function confirmUserDeletion(user) {
        Alert.alert('Excluir usuário', 'Deseja excluir usuário?', [
            {
                text: 'Sim',
                onPress() {
                    console.warn('delete' + user.id)
                }
            },
            {
                text: 'Não'
            }
        ])


    }

    function getAction(user) {
        return (
            <>
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <Button
                    onPress={() => {
                        props.navigation.navigate('UserForm', user);
                    }}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />

            </>
        )
    }


    function getUserItem({ item: user }) {
        return (
            <ListItem
                onPress={() => props.navigation.navigate('UserForm')}>
                <Avatar
                    title={user.name}
                    Subtitle={user.email}
                    source={{ uri: user.avatarUrl }}
                    bottomDivider
                    rightElement={getAction(user)}
                    onPress={() => props.navigation.navigate('UserForm', user)}
                />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <Button
                    onPress={() => {
                        props.navigation.navigate('UserForm', user);
                    }}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />
                <Button
                    onPress={() => {
                        confirmUserDeletion(user)
                    }}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />

            </ListItem>
        )
    }
    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={Users}
                renderItem={getUserItem}
            />
        </View>
    )
}






