import { useState } from 'react';
import {
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import SearchBar from '@/components/SearchBar';
import { Ionicons } from '@expo/vector-icons';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Stack, router } from 'expo-router';

export default function Layout() {
  const [, setValue] = useState('');
  // console.log(value);
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <BottomSheetModalProvider>
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
              <Stack.Screen
                name="(home)/category/[category]"
                options={{
                  contentStyle: { backgroundColor: 'white' },
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
                  headerRight: () => {
                    return (
                      <View style={{ width: 200 }}>
                        <SearchBar
                          setValue={setValue}
                          placeholder="Buscar"
                          // onPress={handleSearch}
                        />
                      </View>
                    );
                  },
                  headerShadowVisible: false,
                  headerShown: true,
                  headerTitleAlign: 'center',
                  title: '',
                }}
              />
            </Stack>
          </View>
        </BottomSheetModalProvider>
      </TouchableWithoutFeedback>
    </>
  );
}
