import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'



export default function Feedback({ navigation } ) {



  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [feedbacks, setFeedbacks] = useState([]);





  const handlePublish = () => {


    if (name.trim() === '' || comment.trim() === '') {
      return;
    }



    setFeedbacks([...feedbacks, { author: name, comment }]);
    setName('');
    setComment('');


  };





  const handleDelete = (index) => {


    const updatedFeedbacks = [...feedbacks];
    updatedFeedbacks.splice(index, 1);
    setFeedbacks(updatedFeedbacks);


  };






  return (


    <SafeAreaView style={style.containerBackground}>

      <Header navigation={navigation} />
      
      
    
      <ScrollView>

        <View style={style.container}>


          <Text style={style.titulo}> Deixe seu comentário!! </Text>


          <View style={style.feedbackContainer}>


            <Text style={style.identificador}>Nome: </Text>


            <TextInput
              style={[style.input, style.inputComentario]}
              placeholder="Nome"
              value={name}
              onChangeText={text => setName(text)}
              fontSize={15}
            />


            <Text style={style.identificador}>Comentário: </Text>


            <TextInput
              style={[style.input, style.inputComentario]}
              placeholder=""
              multiline
              value={comment}
              onChangeText={text => setComment(text)}
              fontSize={15}
              color={'white'}
            />



            <TouchableOpacity
              style={style.botaoPublicar}
              onPress={handlePublish}
            >


              <Text style={style.textoPublicar}> Comentar </Text>


            </TouchableOpacity>


          </View>





          <ScrollView style={style.feedbackLista}>


            {feedbacks.map((feedback, index) => (


              <View key={index} style={style.feedbackItem}>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>


                  <Text style={[style.feedbackNome, { backgroundColor: '#000000' }]}>Nome: {feedback.author}</Text>



                  <TouchableOpacity onPress={() => handleDelete(index)}>


                    <MaterialIcons name="delete" size={24} color="red" />


                  </TouchableOpacity>



                </View>



                <Text style={[style.feedbackCommentario, { backgroundColor: '#000000' }]}>Comentário: {feedback.comment}</Text>



              </View>


            ))}


          </ScrollView>

      </View>

    </ScrollView>

    <Footer/>

  </SafeAreaView>

  );
}






const style = StyleSheet.create({



  containerBackground: {
    flex: 1,
    backgroundColor: '#FFDF00',
    marginTop: 25,


  },

  
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    width: '90%',
    marginTop: 60,
    left: 20
    
  },





  titulo: {
    color: '#000000',
    fontSize: 26,
    fontFamily: 'Minecraft',
    marginBottom: 20,
    marginLeft: 20,
  },


    identificador: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'Minecraft',
    marginBottom: 15,
    marginTop: 15,
  },





  feedbackContainer: {
    borderWidth: 6,
    borderColor: '#001E97',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#000000',
  },





  input: {
    width: '100%',
    height: 40,
    borderColor: '#001E97',
    borderWidth: 5,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontFamily: 'Minecraft',
    backgroundColor: '#000000',
  },





  inputComentario: {
    height: 100,
    color: 'white'
  },



  botaoPublicar: {
    backgroundColor: '#001E97',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },





  textoPublicar: {
    color: 'white',
    fontFamily: 'Minecraft',


  },



  feedbackLista: {
    flex: 1,
  },





  feedbackItem: {
    marginBottom: 40,
    padding: 20,
    borderWidth: 5,
    borderColor: '#001E97',
    borderRadius: 10,
    backgroundColor: '#000000'
   
  },





  feedbackNome: {
    fontFamily: 'Minecraft',
    color: 'white',
    marginBottom: 15,
    marginTop: 15,
  },



  feedbackCommentario: {
    fontFamily: 'Minecraft',
    color: 'white',
    marginBottom: 15,
  },





});







