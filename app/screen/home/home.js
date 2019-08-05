import React, { Component } from "react";
import { View, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator, Text } from "react-native";

export const urlPoster = 'https://image.tmdb.org/t/p/w500/'
const api_key = '7c74275931a77950a117248957624363'
const page = '1'
const language = 'en-US'
export const urlDBMovie = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=${language}&page=${page}`


export default class Home extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      dataList: null,
      id: 0,
      showToast: false
    }
  }

  componentDidMount() {
   
    fetch(urlDBMovie)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataList: responseJson.results,
          id: responseJson.results.id
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }


  render() {
    if (!this.state.dataList) {
      return (
        <ActivityIndicator
          animating={true}
          style={styles.indicator}
          size="large"
        />
      );
    }
    return (
        <View style={styles.container}>
          <FlatList
            data={this.state.dataList}
            renderItem={({ item }) =>
                <TouchableOpacity 
                onPress={() => this.props.navigation.navigate("Detail", { item })}
                >
                  <View style={styles.item} >
                    <Image style={styles.poster} source={{ uri: urlPoster + item.poster_path }}></Image>
                    <View style={styles.infoFilm}>
                      <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
            }
            keyExtractor={({ id }, index) => index.toString()}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80
  },
  container: {
    flex: 1,
    height: 150,
  },

  item: {
      flex:1,
    flexDirection: 'row',
    marginBottom: 10,
    alignContent: "center",
    alignItems: "center"
  },

  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  poster: {
    width: 120,
    height: '100%'
  },

  infoFilm: {
    marginLeft: 10,
    flex: 1,
    height: 150,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
 
});

