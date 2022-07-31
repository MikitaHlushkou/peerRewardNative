import { Pressable, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { Text, View } from './Themed';

const Header = ({ navigation }: NativeStackHeaderProps) => {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Peer Rewards</Text>
      <Pressable
        onPress={() => navigation.navigate('Modal')}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
      >
        <FontAwesome
          name="plus"
          size={25}
          color={Colors[colorScheme].text}
          style={{ marginRight: 15 }}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
});

export default Header;
