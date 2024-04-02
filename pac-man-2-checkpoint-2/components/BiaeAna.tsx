import React from 'react';
import {StyleSheet, View, Image, SafeAreaView, ScrollView } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu'


export default ({ navigation }) => {
 
 
  const handleAboutPress = () => {
    navigation.navigate('BiaeAna');
  };
 
  return (
    
    
    <SafeAreaView style={style.container}>

       <Header navigation={navigation} />

    <ScrollView>
    
    
    
      <View  style={style.contentContainer}>

          
    
          <Image 
            style={style.biaImage} 
            source={require('../assets/Bia.png')} 
          />
        </View>


        <View>
          <Image 
            style={style.anaImage} 
            source={require('../assets/ana.png')} 
          />
        </View>




      </ScrollView>

     <Footer/>
      
    </SafeAreaView>


  );
};

const style = StyleSheet.create({


   biaImage: {
    marginTop: 5,
    height: 145,
    width: 360,
    alignItems: 'flex-end'

   
  },
  anaImage: {
    marginTop: 30,
    height: 145,
    width: 360,
    marginBottom: 111
  },

   container: {
    flex: 1,
    backgroundColor: '#FFDF00',
    marginTop: 25,
  },


  contentContainer: {
    paddingTop: 150, 
    paddingBottom: 50, 
    alignItems: 'center',
  },

  
});
