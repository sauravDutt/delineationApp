import { StyleSheet, View, Image, StatusBar, ScrollView, Text, ImageBackground, SafeAreaView} from 'react-native';
import { Motion } from "@legendapp/motion";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons/faWallet';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle= 'light-content'/>
      <View style={styles.navbar}>
          <Image 
            source={require('./assets/logo.png')}
            style = {{
              width: 150,
              height: 50,
              marginTop: 5,
              marginBottom: 10,
              resizeMode:"contain"
            }}
          />
          <Image
              source={require('./assets/earth.png')}
              style = {{
                width: 42,
                height: 42,
                resizeMode: "contain",
                marginTop: 12,
                marginRight: 20,
              }}
          /> 
        </View>
        <ScrollView style={styles.mainArea}>
        <ScrollView 
          contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 0,
            width: "100%",
          }}
          horizontal 
          showsHorizontalScrollIndicator={false}
          >

        <Motion.Pressable style={styles.pressable}>
          <Motion.View 
            style={styles.card} 
            whileTap={{scale: 0.7}}
            transition = {{
              type: 'spring',
              damping: 20,
              stiffness: 300,
            }}
          >
            <Text style={styles.cardTitle}>Hello.</Text>
          </Motion.View>
        </Motion.Pressable>

        <Motion.Pressable style={styles.pressable}>
          <Motion.View 
            style={styles.card} 
            whileTap={{scale: 0.7}}
            transition = {{
              type: 'spring',
              damping: 20,
              stiffness: 300,
            }}
          >
            <Text style={styles.cardTitle}>Hello.</Text>
          </Motion.View>
        </Motion.Pressable>

        <Motion.Pressable style={styles.pressable}>
          <Motion.View 
            style={styles.card} 
            whileTap={{scale: 0.7}}
            transition = {{
              type: 'spring',
              damping: 20,
              stiffness: 300,
            }}
          >
            <Text style={styles.cardTitle}>Hello.</Text>
          </Motion.View>
        </Motion.Pressable>

        <Motion.Pressable style={styles.pressable}>
          <Motion.View 
            style={styles.card} 
            whileTap={{scale: 0.7}}
            transition = {{
              type: 'spring',
              damping: 20,
              stiffness: 300,
            }}
          >
            <Text style={styles.cardTitle}>Hello.</Text>
          </Motion.View>
        </Motion.Pressable>

        </ScrollView>
        </ScrollView>
              
        <View style={styles.footer}>
            <FontAwesomeIcon icon={ faWallet } size={20} style={styles.footerIcons} />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(7, 7, 7, 0.948)',
  },
  navbar: {
    flexDirection: 'row',
    borderWidth: 0.5,
    borderTopWidth: 'none',
    borderRightWidth: 'none',
    borderLeftWidth: 'none',
    borderColor: 'rgba(255, 255, 255, 0.19)',
    justifyContent: 'space-between',
  },
  searchBar: {
    height: 40,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainArea: {
    backgroundColor: 'rgba(0, 0, 0, 0.66)',
  },
  pressable: {
    width: '50%',
    height: 170,
    justifyContent: 'center',
  },
  card: {
    width: 160,
    height: 150,
    marginLeft: '2%',
    marginRight: '2%',
    backgroundColor: '#4832a888',
    justifyContent: 'center',
    borderRadius: 7,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 13,
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  textLeft:{
    textAlign: 'left',
    color: "#4832a888",
    marginLeft: 5,
  },
  textRight:{
    textAlign: 'right',
    color: "#4832a888",
    marginRight: 5,
    marginTop: 5,
    fontSize: 10,
  },
  footer: {
    height: 42,
    borderWidth: 0.5,
    borderBottomWidth: 'none',
    borderRightWidth: 'none',
    borderLeftWidth: 'none',
    borderColor: 'rgba(255, 255, 255, 0.19)',
  },
  footerIcons: {
    color: 'rgba(255, 255, 255, 0.835);',
    marginLeft: 20,
    marginTop: 15,
  }
});
