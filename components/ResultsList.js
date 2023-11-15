import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import ResultsDetail from './ResultsDetail';
import {useNavigation} from '@react-navigation/native';

export default function ResultsList({title, results}) {
  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
        <Text style={styles.title} >{title}</Text>
        <FlatList data={results} horizontal showsHorizontalScrollIndicator= {false} renderItem={({item}) => {
            return( 
            <TouchableOpacity onPress={() => navigation.navigate('ResultShow', {id:item.id})}>
                <ResultsDetail result={item} />
            </TouchableOpacity>)
        }} />
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom:10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 8
  }
})