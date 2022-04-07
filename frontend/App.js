import { Fragment, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, ActivityIndicator, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './src/styles/styles';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [jokeList, setJokeList] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const [currentJokeIndex, setCurrentJokeIndex] = useState(0);

  const readJokeFromStorage = () => {
    AsyncStorage.getItem('joke').then((_value) => {
      if (_value == null) {
        setCurrentJokeIndex(0);
      }
      else {
        setCurrentJokeIndex(parseInt(_value));
      }
    });
  };

  const writeJokeToStorage = async newValue => {
    await AsyncStorage.setItem('joke', newValue.toString());
  };


  const getJokes = async () => {
    try {
      const response = await fetch(
        'http://192.168.111.103:5000/api/joke'
      );
      const json = await response.json();
      // writeJokeToStorage(0);
      const _isFinish = checkFinish(currentJokeIndex, json.length);
      setJokeList(json);
      setIsFinished(_isFinish);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const checkFinish = (index, length) => {
    return index === length;
  }

  // const voteFunny = () => {
  //   console.log(currentJokeIndex);
  //   fetch(`http://192.168.111.103:5000/api/joke/${currentJokeIndex}`, {
  //       method: 'PUT',
  //       headers: {
  //           'Accept': 'application/json',
  //           'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //           vote: 'funny',
  //       })
  //   })
  //   moveToNextJoke();
  // }

  const moveToNextJoke = () => {
    setIsFinished(false);

    if (checkFinish(currentJokeIndex, jokeList.length - 1)) {
      setIsFinished(true);
    } else {
      setCurrentJokeIndex(currentJokeIndex + 1);
    }

    writeJokeToStorage(currentJokeIndex + 1);

  }

  useEffect(() => {
    readJokeFromStorage();
    getJokes();
  }, [currentJokeIndex]);

  return (
    <Fragment>

      <SafeAreaView style={styles.container}>

        <View style={styles.headerContainer}>
          <Text style={styles.title}>A joke a day keeps the doctor away</Text>
          <Text style={styles.subTitle}>If you joke wrong way, you teeth have to pay. (Serious)</Text>
        </View>

        <View style={styles.contentContainer}>
          {isLoading
            ? <ActivityIndicator />
            : isFinished == true
              ? <Text style={styles.defaultText}>That's all the jokes for today! Come back another day!</Text>
              : <Text style={styles.defaultText}>
                {currentJokeIndex < jokeList.length && jokeList[currentJokeIndex].noidung}
              </Text>
          }
        </View>

        {isFinished
          ? <></>
          : <View style={styles.footer}>
            <TouchableOpacity onPress={moveToNextJoke}>
              <Text style={styles.buttonFunny}>
                This is Funny!
              </Text>
            </TouchableOpacity >
            <TouchableOpacity onPress={moveToNextJoke}>
              <Text style={styles.buttonNotFunny}>
              This is not funny!
              </Text>
            </TouchableOpacity >
          </View>
        }

      </SafeAreaView >
      <SafeAreaView style={{ flex: 0, backgroundColor: 'white' }}>
        <View style={{ flex: 1, backgroundColor: 'white' }} />
      </SafeAreaView>
    </Fragment>

  );
}


