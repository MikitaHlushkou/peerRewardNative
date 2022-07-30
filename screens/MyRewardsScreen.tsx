import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import Separator from '../components/Separator';
import { RootTabScreenProps } from '../types';

const MyRewardsScreen = ({ navigation }: RootTabScreenProps<'MyRewards'>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <Separator />
    </View>
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

export default MyRewardsScreen;
