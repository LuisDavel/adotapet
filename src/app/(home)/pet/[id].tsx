import {
  Image,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import { pets } from '@/utils/data';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';

export default function Modal() {
  const { width } = Dimensions.get('window');
  const { id } = useLocalSearchParams();
  const filter = pets.find((item) => item.id === Number(id));
  return (
    <View style={{ flex: 1 }}>
      <View>
        <FlatList
          pagingEnabled
          data={filter?.image}
          horizontal
          centerContent
          snapToAlignment="center"
          scrollEventThrottle={15}
          contentContainerStyle={{
            margin: 20,
          }}
          ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity activeOpacity={0.8}>
                <Image
                  source={{ uri: item?.image }}
                  height={width}
                  width={width * 0.8}
                  borderRadius={6}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={styles.container}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
  content: {
    flex: 1,
    borderRadius: 10,
    gap: 14,
    padding: 14,
  },
});
