import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({ label, theme, onPress }) {
  let styleButtonContainer = styles.buttonContainer;
  let styleButton = styles.button;
  let styleButtonLabel = styles.buttonLabel;
  
  if (theme === "primary") {
    styleButtonContainer = [styleButtonContainer, { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 }];
    styleButton = [styleButton, { backgroundColor: "#fff" }];
    styleButtonLabel = [styleButtonLabel, { color: "#25292e" }];
  }
  
  return (
    <View style={styleButtonContainer}>
      <Pressable style={styleButton} onPress={onPress}>
        {theme === "primary" ? <ButtonIcon/> : null}
        <Text style={styleButtonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const ButtonIcon = () => {
  return (
    <FontAwesome
      name="picture-o"
      size={18}
      color="#25292e"
      style={styles.buttonIcon}
    />
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
