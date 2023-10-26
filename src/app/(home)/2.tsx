import { Stack } from 'expo-router';
export default function Layout() {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen
        name="home"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="pet/[id]"
        options={{
          headerShown: true,
          presentation: 'modal',
          title: '',
        }}
      />
    </Stack>
  );
}
