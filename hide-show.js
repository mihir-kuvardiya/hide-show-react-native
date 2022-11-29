import React,{useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  const [show, setShow] = useState(false)
  return (
    <View style={styles.container}>
      {show && 
        <Text style={styles.paragraph}>
          Change code in the editor and watch it change on your phone! Save to get a shareable url.
        </Text>
      }
      <TouchableOpacity 
        style={{backgroundColor:'black'}} 
        onLongPress={()=>setShow(true)}
        onPressOut={()=>setShow(false)}
      >
        <Text style={{color:'white',margin:10}}>hello world</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
