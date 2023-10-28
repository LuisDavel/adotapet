import { useRef } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Swiper from 'react-native-deck-swiper';

import { CardSwipePet } from '@/components/CardSwipePet';
import { Header } from '@/components/Header';
import { pets } from '@/utils/data';
import { router } from 'expo-router';

export default function Sorted() {
  // @ts-ignore
  const swipeRef = useRef<Swiper<T>>(null);
  return (
    <View style={styles.wrapper}>
      <Header.Wrapper>
        <Header.Icon name={'arrow-left'} onPress={() => router.back()} />
        <Header.Location city="Criciuma" state="SC" />
        <Header.Icon
          name={'bell'}
          onPress={() => router.push(`/(sorted)/sorted`)}
        />
      </Header.Wrapper>
      <Text style={styles.title}> Encontre um novo amigo </Text>
      <CardSwipePet.Wrapper>
        <Swiper
          ref={swipeRef}
          cards={pets}
          backgroundColor="transparent"
          onSwipedRight={() => {
            console.log('Direita');
          }}
          onSwipedLeft={() => {
            console.log('Esquerda');
          }}
          stackSize={6}
          cardIndex={0}
          overlayLabels={{
            left: {
              title: '😢    ',
              style: {
                label: {
                  color: 'red',
                  textAlign: 'right',
                },
              },
            },
            right: {
              title: '🥰    ',
              style: {
                label: {
                  color: 'red',
                },
              },
            },
          }}
          animateCardOpacity
          verticalSwipe={false}
          onTapCard={(index) => router.push(`/pet/${pets[index].id}`)}
          renderCard={(card) => {
            return (
              <View>
                {card ? (
                  <CardSwipePet.Image
                    locale={card.location}
                    text={card.name}
                    age={card.age as number}
                    src={card.image[0].image}
                    gender={card.gender}
                  />
                ) : (
                  <Text> Acabou os dados </Text>
                )}
              </View>
            );
          }}
        />
      </CardSwipePet.Wrapper>
      <CardSwipePet.XStack>
        <CardSwipePet.Icon
          icon="ios-close"
          color="red"
          onPress={() => swipeRef.current?.swipeLeft()}
        />
        <CardSwipePet.Icon icon="heart" color="red" />
        <CardSwipePet.Icon
          icon="ios-checkmark-sharp"
          color="green"
          onPress={() => swipeRef.current?.swipeRight()}
        />
      </CardSwipePet.XStack>
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
    padding: 20,
  },
});
