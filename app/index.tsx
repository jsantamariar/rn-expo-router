import { Link, useRouter } from 'expo-router'
import React from 'react'
import { View, Button } from 'react-native'

const App = () => {
    const router = useRouter();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Link href="/profile" asChild>
                <Button title="Open Profile" />
            </Link>
            <Link href="/feed" asChild>
                <Button title="Open Feed" />
            </Link>
            <Link href="/details/42" asChild>
                <Button title="Open Details 42" />
            </Link>
            <Link href="/details/133" asChild>
                <Button title="Open Details 133" />
            </Link>
            <Link href="/drawer" asChild replace>
                <Button title="Open Drawer" />
            </Link>
            <Link href="/(tabs)" asChild replace>
                <Button title="Open Tabs" />
            </Link>
            <Link href="/modal" asChild>
                <Button title="Open Modal" />
            </Link>
        </View>
    )
}

export default App