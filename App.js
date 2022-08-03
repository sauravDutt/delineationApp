
import { StyleSheet, StatusBar, SafeAreaView, Image, View, ScrollView, TextInput} from 'react-native';

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
          <View style={styles.searchBar}>
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
                fontSize: '20px',
                backgroundColor: 'transparent',
              }}
              placeholder="Search ..."
            />
          </View>
          {/* <Image
              source={require('./assets/earth.png')}
              style = {{
                width: 32,
                height: 32,
                resizeMode: "contain",
                marginTop: 15,
                marginRight: 20,
              }}
            /> */}
        </View>
        <ScrollView style={styles.mainArea}>

        </ScrollView>
        <View style={styles.footer}>

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
  footer: {
    height: 45,
    borderWidth: 0.5,
    borderBottomWidth: 'none',
    borderRightWidth: 'none',
    borderLeftWidth: 'none',
    borderColor: 'rgba(255, 255, 255, 0.19)',
  }
});
