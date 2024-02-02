import React from 'react'
import { View, Text, FlatList } from 'react-native'
import Users from '../data/Users'
import { ListItem, Avatar } from 'react-native-elements'

export default props => {

    function getUserItem({ item: user }) {
        return (
            <ListItem
                onPress={() => props.navigation.navigate('UserForm')}>
                <Avatar
                    title={user.name}
                    Subtitle={user.email}
                    source={{ uri: user.avatarUrl }}
                    bottomDivider
                    onPress={() => props.navigation.navigate('UserForm')}
                />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
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
