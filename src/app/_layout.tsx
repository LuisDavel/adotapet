import {
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { Stack, router } from 'expo-router';

export default function Layout() {
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{ flex: 1 }}>
          <Stack
            screenOptions={{
              animation: 'slide_from_right',
              headerShown: false,
              headerStyle: {
                backgroundColor: '#ffff',
              },
            }}
          >
            <Stack.Screen name="(home)/home" />
            <Stack.Screen
              name="(home)/pet/[id]"
              options={{
                headerLeft: () => {
                  return (
                    <TouchableOpacity
                      hitSlop={20}
                      onPress={() => router.back()}
                    >
                      <Ionicons
                        name="arrow-back-outline"
                        size={24}
                        color="orange"
                      />
                    </TouchableOpacity>
                  );
                },
                headerShadowVisible: false,
                headerShown: true,
                headerTitleAlign: 'center',
                title: 'Detalhes',
              }}
            />
          </Stack>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}
