import { useLayoutEffect, useState } from 'react';
import { FlatList, View, Text, Dimensions } from 'react-native';
import { Image } from 'react-native';

import { CardPetsCategory } from '@/components/CardPetsCategoy';
import { pets } from '@/utils/data';
import { router, useLocalSearchParams } from 'expo-router';

const { width } = Dimensions.get('window');

export default function Category() {
  const { category, city } = useLocalSearchParams();
  const [filter, setFilter] = useState<typeof pets>([]);

  useLayoutEffect(() => {
    if (!category) return;

    if (category == 'fav') {
      const value = pets.filter((item) => item.favorite == true);
      return setFilter(value);
    }

    if (category == 'all') return setFilter(pets);

    if (category && category != 'city') {
      const value = pets.filter((item) => item.type == category);
      return setFilter(value);
    }

    if (city) {
      const value = pets.filter((item) =>
        item.location
          .toLowerCase()
          .startsWith(city.toString().toLowerCase() as string)
      );
      return setFilter(value);
    }
  }, [category, city]);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {filter.length == 0 ? (
        <View
          style={{
            alignItems: 'center',
            flex: 1,
            gap: 20,
            justifyContent: 'center',
          }}
        >
          <Image
            style={{
              height: width * 0.6,
              width: width * 0.7,
            }}
            source={require('assets/image/cat_search.png')}
            resizeMode="cover"
          />
          <Text style={{ fontSize: 20, fontWeight: '400', color: 'gray' }}>
            Não há dados no momento.
          </Text>
        </View>
      ) : (
        <FlatList
          data={filter}
          numColumns={2}
          columnWrapperStyle={{
            gap: 20,
            marginBottom: 20,
          }}
          initialNumToRender={4}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <CardPetsCategory.Wrapper
                onPress={() => router.push(`/pet/${item.id}`)}
              >
                <CardPetsCategory.Image src={item.image[0].image} />
                <CardPetsCategory.Favorite isFavorite={item.favorite} />
                <View style={{ paddingBottom: 10, paddingHorizontal: 10 }}>
                  <CardPetsCategory.Title
                    gender={item.gender as string}
                    text={item.name}
                  />
                  <CardPetsCategory.Location text={item.location} />
                </View>
              </CardPetsCategory.Wrapper>
            );
          }}
        />
      )}
    </View>
  );
}
