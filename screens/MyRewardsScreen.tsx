import { StyleSheet } from 'react-native';

import { Separator, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const MyRewardsScreen = ({ navigation }: RootTabScreenProps<'MyRewards'>) => {
  return (
    <View style={styles.container}>
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
