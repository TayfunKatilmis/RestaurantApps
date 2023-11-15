import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
import { useState } from 'react'

export default function SearchScreen() {
  const [searchApi, results, errorMessage] = useResults();
  const [term, setTerm] = useState('')

  const filterByPriceResults = (price) => {
    return results.filter((results) => {
      return results.price === price;
    })
  }
  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {results.length === 0 ? <></> :<>
      <ResultsList title="Ucuz Restoranlar"  results={filterByPriceResults('₺')} />
      <ResultsList title="Uygun Restoranlar" results={filterByPriceResults('₺₺')} />
      <ResultsList title="Pahalı Restoranlar" results={filterByPriceResults('₺₺₺')} />
   </> }
      </View>
  )
}

const styles = StyleSheet.create({})