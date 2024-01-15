import { Stack, useRouter } from "expo-router"
import { Button, Text } from "react-native";

const NewsStack = () => {
    const router = useRouter();
    return <Stack>
        <Stack.Screen name="index" options={{ headerTitle: 'News', headerLeft: () => <Button title="Go Home" onPress={() => router.replace('/')} /> }} />
    </Stack>
}

export default NewsStack;