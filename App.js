import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated,} from 'react-native';


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shuffle: 'Press to roll your dice',
      fadeAnim: new Animated.Value(0),
    }
  }
componentDidMount() {
  Animated.timing(                  // Animate over time
    this.state.fadeAnim,            // The animated value to drive
    {
      toValue: 1,                   // Animate to opacity: 1 (opaque)
      duration: 1000,              // Make it take a while
    }
  ).start();                        // Starts the animation
}






  
  randomPress = () => {
    while (true) {
      randNumber = Math.floor((Math.random() * 20) + 1);
      this.setState({
        shuffle: randNumber
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.randomPress}>
          <View style={styles.diceBox}>
            <Text style={{ fontWeight: 'bold' }}>{this.state.shuffle}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  diceBox: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 5,
    width: 100,
    height: 100,
  },
});
