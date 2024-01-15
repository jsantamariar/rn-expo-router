import { View, Text, Button } from 'react-native'
import React from 'react'
import { Stack, useGlobalSearchParams, useRouter } from 'expo-router'

const details = () => {
    const { id } = useGlobalSearchParams();
    const router = useRouter();

    return (
        <View>
            <Stack.Screen options={{ headerTitle: `Details #${id}` }} />
            <Text>details: {id}</Text>
            <Button title="update params" onPress={() => router.setParams({ id: '999' })} />
        </View>
    )
}

export default details