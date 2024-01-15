import { Stack } from 'expo-router';

const StackLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerTitle: 'Your home' }} />
            <Stack.Screen name="profile" options={{ headerTitle: 'Profile' }} />
            <Stack.Screen name="feed" options={{ headerTitle: 'Feed' }} />
            <Stack.Screen name="drawer" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        </Stack>
    )
}

export default StackLayout;