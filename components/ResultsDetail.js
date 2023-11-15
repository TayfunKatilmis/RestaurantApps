import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ResultsDetail({result}) {
  return (
    <View style={styles.contaniner}>
        <Image style={styles.image} 
        source={result.image_url ? {uri: result.image_url} : null} />
        <Text style={styles.name} >{result.name}</Text>
        <Text>{result.rating} Yıldızlı Restoran, {result.review_count} Değerlendirme aldı</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contaniner: {
    marginLeft: 15,
  },
  image: {
    height: 120, 
    width: 250,
    borderRadius: 8,

  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
  }
})