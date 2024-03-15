import React from 'react';
import { View, Text, FlatList, Image, StyleSheet} from 'react-native';

const MovieList = ({ theatersData }) => {
  return (
  
      <View style={styles.container}>
        <FlatList data={theatersData} keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <View style={styles.theaterContainer}>
              <Text style={styles.theaterName}>{item.name}</Text>
              <FlatList
                data={item.movies}
                keyExtractor={(movie) => movie.id}
                renderItem={({ item: movie }) => (
                  <View style={styles.movieContainer}>
                    <Image source={movie.image} style={styles.movieImage} />
                    <View style={styles.movieDetails}>
                      <Text style={styles.movieName}>{movie.name}</Text>
                      <Text style={styles.showtime}>Time:{movie.time}</Text>
                    </View>
                  </View>
                )}
              />
            </View>
          )}
        />
      </View>
   
  );
};

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#2c3e50', // Dark blue background
  },
  theaterContainer: {
    marginBottom: 20,
    marginTop:30,
    backgroundColor: '#3498db', // Blue background
    borderRadius: 10, // Rounded corners
    padding: 10, // Padding inside theater container
  },
  theaterName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#F4CE14', // White text color
  },
  movieContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  movieImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 5,
  },
  movieDetails: {
    flex: 1,
  },
  movieName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff', // White text color
  },
  showtime: {
    fontSize: 14,
    color: '#ecf0f1', // Light gray text color
  },
});

export default MovieList;
