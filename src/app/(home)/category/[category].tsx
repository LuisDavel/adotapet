import { FlatList, Text, View } from 'react-native';

import { pets } from '@/utils/data';
import { useLocalSearchParams } from 'expo-router';

export default function Category() {
  const { category } = useLocalSearchParams();

  const filter =
    category != 'all' ? pets : pets.filter((item) => item.type == category);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={filter}
        numColumns={2}
        renderItem={({ item }) => {
          return <Text> {item.name} </Text>;
        }}
      />
    </View>
  );
}
