import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link, Stack, useGlobalSearchParams, useRouter } from 'expo-router'

const newsDetails = () => {
    const { id, } = useGlobalSearchParams();
    const router = useRouter();
    return (
        <View>
            <Stack.Screen options={{ headerTitle: `Detail #${id}` }} />
            <Text>newsDetails is: {id}</Text>
            <Button title="Go back to home" onPress={() => router.replace('/')} />
        </View>
    )
}

export default newsDetails