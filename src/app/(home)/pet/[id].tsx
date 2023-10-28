import { useLayoutEffect } from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { pets } from '@/utils/data';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useNavigation } from 'expo-router';
const { width } = Dimensions.get('window');

export default function Profile() {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();
  const filter = pets.find((item) => item.id === Number(id));

  useLayoutEffect(() => {
    // navigation.setOptions({
    //   headerRight: () => {
    //     return (
    //       <Ionicons
    //         name={'information-circle-outline'}
    //         size={25}
    //         color={'black'}
    //       />
    //     );
    //   },
    // });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          // pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={filter?.image}
          horizontal
          centerContent
          snapToAlignment="center"
          scrollEventThrottle={16}
          contentContainerStyle={{
            marginHorizontal: 20,
          }}
          ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity activeOpacity={0.9}>
                <Image
                  source={{ uri: item?.image }}
                  height={width * 0.6}
                  width={width * 0.7}
                  borderRadius={6}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <View style={styles.content}>
        <Text style={[styles.title, { color: 'orange' }]}>{filter?.name}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.text}>{filter?.race}</Text>
          <Text style={styles.text}>{filter?.location}</Text>
        </View>
        <View style={styles.bar}>
          <View style={styles.card_profile}>
            <Text style={styles.text}>Sexo</Text>
            <Ionicons
              name={filter?.gender as keyof typeof Ionicons.glyphMap}
              size={25}
              color={filter?.gender == 'female' ? '#c85f9a' : '#49aae1'}
            />
          </View>
          <View style={styles.card_profile}>
            <Text style={styles.text}>Idade</Text>
            <Text style={styles.text_fix}>{filter?.age} meses</Text>
          </View>
          <View style={styles.card_profile}>
            <Text style={styles.text}>Peso</Text>
            <Text style={styles.text_fix}>{filter?.weight} kg</Text>
          </View>
        </View>
        <Text style={styles.title}>Ultima vacina</Text>
        <View
          style={[
            styles.bar,
            {
              padding: 20,
              borderRadius: 6,
              backgroundColor: '#f3f1f1',
              alignItems: 'center',
              justifyContent: 'space-between',
            },
          ]}
        >
          <Image
            source={require('assets/icon/vaccine.png')}
            style={{ height: 45, width: 45 }}
          />
          <View style={{ marginRight: 80 }}>
            <Text style={styles.text_fix}>5 vacinas</Text>
            <Text style={styles.text}>24 de março, 2023</Text>
          </View>
          <MaterialCommunityIcons
            name="check-decagram"
            size={30}
            color="orange"
          />
        </View>
        <ScrollView>
          <TouchableOpacity activeOpacity={1}>
            <Text style={styles.title}>Sobre</Text>
            <TextInput
              style={{ color: 'gray' }}
              multiline
              value={filter?.about}
              editable={false}
            />

            <View style={{ height: 80 }} />
          </TouchableOpacity>
        </ScrollView>
      </View>
      <TouchableOpacity activeOpacity={0.9} style={styles.button}>
        <Ionicons name={'paw'} size={25} color={'white'} />
        <Text style={{ color: 'white', fontSize: 12 }}> Adote agora </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 20,
    bottom: 20,
    gap: 2,
    padding: 15,
    position: 'absolute',
    right: 20,
  },
  card_profile: {
    alignItems: 'center',
    backgroundColor: '#f3f1f1',
    borderRadius: 5,
    flex: 1,
    gap: 5,
    justifyContent: 'center',
    padding: 10,
  },
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  content: {
    flex: 1,
    // justifyContent: 'space-around',
    padding: 20,
  },
  text: {
    color: '#797979',
    fontSize: 14,
    fontWeight: '400',
  },
  text_fix: {
    fontSize: 15,
    fontWeight: '500',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
});
