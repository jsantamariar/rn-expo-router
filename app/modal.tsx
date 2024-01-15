import { Stack, useNavigation } from 'expo-router'
import React from 'react'
import { View, Text, Button } from 'react-native'

const modal = () => {
    const navigation = useNavigation<any>();
    const isPresented = navigation.canGoBack();
    return (
        <View>
            {isPresented && (
                <Stack.Screen options={{ headerTitle: 'Modal', headerLeft: () => <Button title="Close" onPress={() => navigation.goBack()} /> }} />
            )}
            <Text>modal</Text>
        </View>
    )
}

export default modal