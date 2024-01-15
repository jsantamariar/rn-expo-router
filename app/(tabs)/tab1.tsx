import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const tab1 = () => {
  const router = useRouter()
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Go back to home" onPress={() => router.push('/')} />
    </View>
  )
}

export default tab1