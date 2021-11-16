import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image,Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <Image
            style={styles.yezzy}
            source={require('./assets/yezzy.png')}
          />
      <Text style={{textAlign:'left',padding: 10,color: 'grey'}}>Adiddas</Text>
      <Text style={{textAlign:'left',padding: 10,color: 'black'}}>YEZZY BOOST 350 V2 BLACK RED</Text>

<View style={{
              borderWidth: 2,
              flex: 0.2,
              borderColor: "#E5E5E5",
              flexDirection: "row",
              padding: 6,
              borderRadius: 2,
              marginRight: 16,
              alignItems: "center",
            }}
          >
            <TextInput
                         style={styles.input}
                         placeholder="42"
                    />
            <TextInput
                         style={styles.input}
                         placeholder="340€"
                    />

            <Image
                                      source={require("./assets/buy.png")}
                                      style={{ width: 100, height: 45, flex: 1, }}
                                    />
          </View>



      <Text style={{textAlign:'left',padding: 10,color: 'black'}}>The Yeezy 350 Boost V2 Bred stands out for its sobriety and simplicity. Unlike most V2
      shoes that feature a patterned print, this shoe has a monochrome black upper with
      red stitching. Yeezy has a monochrome black upper with red stitching that reads SPLY-350.
      The silhouette is set on a black boost sole semi-translucent.</Text>
      <Text style={{textAlign:'left',padding: 5,color: 'black'}}></Text>
      <Text style={{textAlign:'left',padding: 5,color: 'black'}}>SKU: CP9652</Text>
      <Text style={{textAlign:'left',padding: 5,color: 'black'}}>Release date: February 2017</Text>
      <Text style={{textAlign:'left',padding: 5,color: 'black'}}>Colorway2: CORE BLACK/CORE BLACK/RED</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    //alignItems: 'center',
//    justifyContent: 'center',
  },
  yezzy: {
    width: 350,
    height: 200,
    alignItems: 'center',
  },

  input: {
          width: 100,
          height: 40,
          margin: 5,
          borderWidth: 1,
          textAlign: "center",

        },

});


