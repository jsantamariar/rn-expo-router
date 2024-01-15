import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
    return (
        <View>
            <Link href="/(tabs)/news/43" asChild>
                <Button title="Go to 43" />
            </Link>
            <Link href="/(tabs)/news/4133" asChild>
                <Button title="Go to 4133" />
            </Link>
        </View>
    )
}

export default index