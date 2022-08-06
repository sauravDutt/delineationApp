import { StyleSheet, View, Image, StatusBar, ScrollView, Text, ImageBackground, SafeAreaView} from 'react-native';
import { Motion } from "@legendapp/motion";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'

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
              resizeMode:"contain",
            }}
          />
          {/* <View style={styles.searchBar}>
            <Image 
                source={require('./assets/search.png')}
                resizeMode="contain"
                style = {{
                  width: 20, 
                  height: 20,
                  marginTop: 10,
                  marginLeft: 20,
                }}
            />
            <TextInput 
              style={{
                color:'#fff',
                width: '50%',
                marginRight: 100,
                marginLeft: -30,
                fontSize: 20,
                backgroundColor: 'transparent',
              }}
              placeholder="Search ..."
            />
          </View> */}
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
        <View style={styles.cardOuter}>

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
            <Text style={[styles.cardTitle, styles.textLeft]}>ART</Text>
            <ImageBackground source={require('./assets/one.png')} resizeMode="cover" >
            <Text style={styles.cardTitle}></Text>
            <Text style={styles.cardTitle}></Text>
            <Text style={styles.cardTitle}></Text>
            <Text style={styles.cardTitle}></Text>
            <Text style={styles.cardTitle}></Text>
            <Text style={styles.cardTitle}></Text>
            <Text style={styles.cardTitle}></Text>
            <Text style={styles.cardTitle}></Text>
            </ImageBackground>
            <Text style={[styles.cardTitle, styles.textRight]}>Work.</Text>
          </Motion.View>
        </Motion.Pressable>

        </View>
        </ScrollView>
              
        <View style={styles.footer}>
            <FontAwesomeIcon icon={ faMugSaucer } size={30} style={styles.footerIcons} />
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
  cardOuter: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  pressable: {
    width: '50%',
    height: 170,
    justifyContent: 'center',
  },
  card: {
    width: '90%',
    height: 150,
    marginLeft: '5%',
    backgroundColor: '#4832a888',
    justifyContent: 'center',
    borderRadius: 7,
    shadowColor: 'rgba(255, 255, 255, 0.683)',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
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
    marginLeft: 5,
  },
  textRight:{
    textAlign: 'right',
    marginRight: 5,
    marginTop: 5,
    fontSize: 10,
  },
  footer: {
    height: 45,
    borderWidth: 0.5,
    borderBottomWidth: 'none',
    borderRightWidth: 'none',
    borderLeftWidth: 'none',
    borderColor: 'rgba(255, 255, 255, 0.19)',
  },
  footerIcons: {
    color: '#fff',
  }
});
