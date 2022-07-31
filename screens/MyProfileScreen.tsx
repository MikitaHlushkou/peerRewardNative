import {  SafeAreaView, StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const MyProfileScreen = ({ navigation }: RootTabScreenProps<'MyProfile'>) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default MyProfileScreen;
