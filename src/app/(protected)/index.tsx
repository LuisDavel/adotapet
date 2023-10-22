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
import { Link, router, useNavigation } from 'expo-router';

import { CardRace } from '../../components/CardsRaces';

export default function Home() {
  const categories = [
    {
      title: 'Cachorro',
      icon: 'dog',
    },
    {
      title: 'Gato',
      icon: 'cat',
    },
    {
      title: 'Passaro',
      icon: 'kiwi-bird',
    },
  ];

  const pets = [
    {
      id: 1,
      name: 'Puppy',
      location: 'Criciuma - SC',
      favorite: true,
      gender: 'female',
      image:
        'https://th.bing.com/th/id/OIP.N37bMTixTGosvzm5ElAWyAHaFj?pid=ImgDet&rs=1',
    },
    {
      id: 2,
      name: 'Fuppy',
      location: 'Joinville - SC',
      favorite: false,
      gender: 'male',
      image:
        'https://cobasi.vteximg.com.br/arquivos/ids/265361/Pinscher.jpg?v=637021869369770000',
    },
    {
      id: 3,
      name: 'Poppy',
      location: 'Florianópolis - SC',
      favorite: false,
      gender: 'male',
      image:
        'https://s2.glbimg.com/-P6PLZnUFUVfg8S-6RZl3Lllaak=/1200x630/s.glbimg.com/jo/g1/f/original/2015/01/05/cao-obeso3.jpg',
    },
  ];

  const handleFavorite = (value: number, isFavorite: boolean) => {
    const filter = pets.find((item) => item.id == value);
    return filter ? (filter.favorite = !isFavorite) : false;
  };

  return (
    <View style={styles.wrapper}>
      <Header.Wrapper>
        <Header.Menu />
        <Header.Location city="Criciuma" state="SC" />
        <Header.Avatar userImage={''} />
      </Header.Wrapper>
      <Text style={styles.title}> Encontre um novo amigo </Text>
      <SearchBar placeholder="Buscar" />
      <View style={styles.YStack}>
        <Text style={[styles.subtitle]}>Raças</Text>
        <Text onPress={() => router.push('/modal')} style={styles.other_text}>
          {' '}
          veja mais{' '}
        </Text>
      </View>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              style={{ paddingHorizontal: 3, paddingVertical: 3 }}
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
        <Link href={'/'} asChild>
          <Text style={styles.other_text}> veja mais </Text>
        </Link>
      </View>
      <FlatList
        data={pets}
        horizontal
        style={styles.card_pets}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
        renderItem={({ item }) => {
          return (
            <View>
              <CardPets.Wrapper>
                <CardPets.Favorite
                  onPress={() => handleFavorite(item.id, item.favorite)}
                  isFavorite={item.favorite}
                  src={item.image}
                />
                <CardPets.Image src={item.image} />
                <CardPets.Title gender={item.gender} text={item.name} />
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
