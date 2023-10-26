import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Onboarding, { DoneButtonProps } from 'react-native-onboarding-swiper';

import { FontAwesome5 } from '@expo/vector-icons';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');

export default function OnboardingScreen() {
  const handleDone = () => {
    return router.push('/home');
  };

  const doneButton = ({ ...props }: DoneButtonProps) => {
    return (
      <TouchableOpacity
        {...props}
        activeOpacity={0.8}
        style={styles.done_button}
      >
        <Text style={styles.text_done}> Vamos adotar ? </Text>
        <FontAwesome5 name="paw" size={20} color="white" />
      </TouchableOpacity>
    );
  };

  return (
    <Onboarding
      onDone={handleDone}
      bottomBarHighlight={false}
      controlStatusBar
      titleStyles={{
        borderBottomWidth: 2,
        borderColor: 'orange',
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 10,
      }}
      nextLabel={'Próximo'}
      showSkip={false}
      containerStyles={{ paddingHorizontal: 20 }}
      DoneButtonComponent={doneButton}
      pages={[
        {
          backgroundColor: '#ffffff',
          title: 'Pensando em trazer um bichinho para sua vida?',
          image: (
            <Image
              style={styles.image}
              source={require('assets/image/0.png')}
            />
          ),
          subtitle:
            'Ótimo! Aqui estão algumas razões legais para considerar isso.',
        },
        {
          backgroundColor: '#ffffff',
          title: 'Salve uma vida',
          image: (
            <Image
              style={styles.image}
              source={require('assets/image/1.png')}
            />
          ),
          subtitle:
            'Adotar um pet de um abrigo é como ser um super-herói. Você tira um bichinho de um lugar incerto e dá a ele um lar cheio de amor.',
        },
        {
          backgroundColor: '#ffffff',
          title: 'Companheirismo incrível',
          image: (
            <Image
              style={styles.image}
              source={require('assets/image/2.png')}
            />
          ),
          subtitle:
            'Animais de estimação são mais do que amigos; eles são praticamente membros da família. Eles sempre estão lá para te fazer sorrir e te confortar quando você precisa.',
        },
        {
          backgroundColor: '#ffffff',
          title: 'Relaxe e divirta-se:',
          image: (
            <Image
              style={styles.image}
              source={require('assets/image/3.png')}
            />
          ),
          subtitle:
            'Animais de estimação têm o poder mágico de aliviar o estresse e trazer felicidade para você e sua familia no dia a dia.',
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  done_button: {
    alignItems: 'center',
    backgroundColor: 'orange',
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    flexDirection: 'row',
    gap: 2,
    padding: 12,
  },
  text_done: {
    color: 'white',
    fontSize: 16,
  },
  image: {
    height: width - 90,
    width: width * 0.9,
  },
});
