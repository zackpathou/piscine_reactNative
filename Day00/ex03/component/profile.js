import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, } from "react-native";

class Profile extends React.Component {
  render() {
    return (
      <View>

        <View style={styles.header}>

            <Image
              style={styles.image}
              source={require("./../assets/hulk.png")}/>
            <Text style={styles.name}>{this.props.name}</Text>

        </View>

        <ScrollView
            horizontal={true} 
            style={styles.ligne}>
          <View>
            <Image
              style={styles.logojs}
              source={require("./../assets/js.png")}
            />
          </View>
          <View>
            <Image
              style={styles.logoreact}
              source={require("./../assets/react.png")}
            />
          </View>
          <View>
            <Image
              style={styles.logoreact}
              source={require("./../assets/react.png")}
            />
          </View>
          <View>
            <Image
              style={styles.logojs}
              source={require("./../assets/js.png")}
            />
          </View>
          <View>
            <Image
              style={styles.logojs}
              source={require("./../assets/js.png")}
            />
          </View>
        </ScrollView>

        <View style={styles.ligne}>
          <Text style={styles.title}>CONTINUE LEARNING</Text>
          </View>
          
          <View style={styles.ligne}>
            <Image
              style={styles.skills}
              source={require("./../assets/progress.png")}
            />
          </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginRight: 70,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 70,
    margin: 30,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
    justifyContent: "center",
  },
  logojs: {
    width: 135,
    height: 70,
    margin: 12,
    borderRadius: 10,
  },
  logoreact: {
    width: 135,
    height: 70,
    margin: 12,
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  skills: {
    width: 250,
    height: 250,
    margin: 12,
    borderRadius: 10,
  },
  ligne: {
    flexDirection:"row",
    // justifyContent:"center",
    // alignItems:"center",
    margin : 5,
    
  },

});
export default Profile;
