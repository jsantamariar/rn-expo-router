import { Tabs } from "expo-router"
import { Ionicons } from '@expo/vector-icons';

const TabsLayout = () => {
    return <Tabs>
        <Tabs.Screen
            options={{
                href: null,
            }}
            name="index"
        />
        <Tabs.Screen
            options={{
                href: null,
            }}
            name="tab1"
        />
        <Tabs.Screen
            options={{
                tabBarLabel: 'News',
                headerShown: false,
                tabBarIcon: ({ color, size }) => <Ionicons name="newspaper" color={color} size={size} />
            }}
            name="news"
        />
        <Tabs.Screen
            options={{
                tabBarLabel: 'Settings',
                headerTitle: 'Settings',
                tabBarIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />
            }}
            name="tab2"
        />
    </Tabs>
}

export default TabsLayout