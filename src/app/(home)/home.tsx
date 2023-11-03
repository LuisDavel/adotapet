import { useCallback, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { CardPets } from '@/components/CardPets';
import { Header } from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import { categories, pets } from '@/utils/data';
import { Link, router } from 'expo-router';

import { CardRace } from '../../components/CardsRaces';

export default function Home() {
  const [value, setValue] = useState('');

  const handleFavorite = useCallback((value: number, isFavorite: boolean) => {
    const filter = pets.find((item) => item.id == value);
    return filter ? (filter.favorite = !isFavorite) : false;
  }, []);

  const handleSearch = useCallback(() => {
    return router.push({
      params: { city: value || ' ' },
      pathname: `/category/city`,
    });
  }, [value]);

  return (
    <View style={styles.wrapper}>
      <Header.Wrapper>
        <Header.Icon
          name={'radar'}
          onPress={() => router.push(`/(sorted)/sorted`)}
        />
        <Header.Location city="Cricíuma" state="SC" />
        <Header.Icon
          name={'heart'}
          color="red"
          onPress={() => router.push(`/category/fav`)}
        />
      </Header.Wrapper>
      <Text style={styles.title}> Encontre um novo amigo </Text>
      <SearchBar
        setValue={setValue}
        placeholder="Buscar"
        onPress={handleSearch}
      />
      <View style={styles.YStack}>
        <Text style={[styles.subtitle]}>Raças</Text>
        {/* <Text style={styles.other_text}> veja mais </Text> */}
      </View>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() => router.push(`/category/${item.icon}`)}
              style={{ paddingRight: 20 }}
            >
              <CardRace icon={item.icon} text={item.title} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.YStack}>
        <Text style={[styles.subtitle]}>
          Adote um{' '}
          <Text style={[styles.subtitle, { color: 'orange' }]}>Pet</Text>
        </Text>
        <Link href={'/category/all'} asChild>
          <Text style={styles.other_text}> veja mais </Text>
        </Link>
      </View>
      <FlatList
        data={pets.slice(0, 5)}
        horizontal
        centerContent
        snapToAlignment="center"
        scrollEventThrottle={16}
        style={styles.card_pets}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
        renderItem={({ item }) => {
          return (
            <View>
              <CardPets.Wrapper onPress={() => router.push(`/pet/${item.id}`)}>
                <CardPets.Favorite
                  onPress={() => handleFavorite(item.id, item.favorite)}
                  isFavorite={item.favorite}
                />
                <CardPets.Image src={item.image[0].image} />
                <CardPets.Title
                  gender={item.gender as string}
                  text={item.name}
                />
                <CardPets.Location text={item.location} />
              </CardPets.Wrapper>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card_pets: {
    flex: 1,
  },
  other_text: {
    color: 'gray',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  title: {
    fontSize: 24,
    // fontFamily: 'comic-sans',
    fontWeight: '600',
  },
  wrapper: {
    backgroundColor: 'white',
    flex: 1,
    gap: 15,
    padding: 20,
  },
  YStack: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
