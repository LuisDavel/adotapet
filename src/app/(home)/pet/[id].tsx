import { useCallback, useLayoutEffect, useMemo, useRef } from 'react';
import { useForm } from 'react-hook-form';
import {
  Image,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Button,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { ControlledInputModal } from '@/components/ControlledInputModal';
import Modal, { TComportModal } from '@/components/Modal';
import { complaintSchema } from '@/schema/complaintSchema';
import { pets } from '@/utils/data';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLocalSearchParams, useNavigation } from 'expo-router';

const { width } = Dimensions.get('window');

export default function Profile() {
  const navigation = useNavigation();

  const methods = useForm({
    resolver: zodResolver(complaintSchema),
  });

  const { control, handleSubmit } = methods;

  const { id } = useLocalSearchParams();
  const snapPoints = useMemo(() => ['25%', '50%'], []);
  const filter = pets.find((item) => item.id === Number(id));
  const bottomSheetModalRef = useRef<TComportModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.handlePresentModalPress();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Octicons
            name={'report'}
            size={20}
            onPress={handlePresentModalPress}
            color={'red'}
          />
        );
      },
    });
  }, [navigation]);

  const onSubmit = () => {
    return;
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ zIndex: 0 }}>
        <TouchableOpacity style={{ zIndex: 0 }} activeOpacity={1}>
          <View style={{ zIndex: 1 }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={filter?.image}
              horizontal
              centerContent
              snapToAlignment="center"
              scrollEventThrottle={16}
              contentContainerStyle={{
                marginHorizontal: 20,
                zIndex: 1,
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
            <Text style={[styles.title, { color: 'orange' }]}>
              {filter?.name}
            </Text>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
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
                  alignItems: 'center',
                  backgroundColor: '#f3f1f1',
                  borderRadius: 6,
                  justifyContent: 'space-between',
                  padding: 20,
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
            <Text style={styles.title}>Sobre</Text>

            <TextInput
              style={{ color: 'gray' }}
              multiline
              value={filter?.about}
              editable={false}
            />

            <View style={{ height: 80 }} />
          </View>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity activeOpacity={0.9} style={styles.button}>
        <Ionicons name={'paw'} size={25} color={'white'} />
        <Text style={{ color: 'white', fontSize: 12 }}> Adote agora </Text>
      </TouchableOpacity>

      <Modal ref={bottomSheetModalRef} snapPoints={snapPoints}>
        <View style={styles.container_modal}>
          <View style={{ gap: 6 }}>
            <Text>Informe seu nome: </Text>
            <ControlledInputModal control={control} name="name" />
          </View>
          <View style={{ gap: 6 }}>
            <Text>Informe seu email: </Text>
            <ControlledInputModal
              inputMode="email"
              control={control}
              name="email"
            />
          </View>
          <View style={{ gap: 6 }}>
            <Text>Motivo da denuncia: </Text>
            <ControlledInputModal
              multiline
              control={control}
              name="observation"
            />
          </View>
          <Button title="Teste" onPress={handleSubmit(onSubmit)} />
        </View>
      </Modal>
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
  container_modal: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  input: {
    backgroundColor: 'rgba(236, 236, 236, 0.37)',
    borderRadius: 10,
    fontSize: 16,
    lineHeight: 20,
    padding: 10,
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
