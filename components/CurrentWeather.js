import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';

let deviceHeight = Dimensions.get('window').height
let deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    headerText:{
        fontSize: 25
    },
    currentMainDiv: {
        display: 'flex',
        height: (.8 * deviceHeight),
        width: deviceWidth,
        padding: 10,
        justifyContent: 'space-between',
        marginBottom: 15
    },
    currentTemp: {
        fontSize: 60
    },
    iconAndDescript: {
        flexDirection: 'column'
    },
    wind: {
        fontSize: 25
    }
})

const CurrentWeather = props => {
    return (
        <View>
            <View style={styles.currentMainDiv}>
                <View>
                <Text style={styles.currentTemp}>{props.currentTemp + '\u00B0'}</Text>
                <View style={styles.iconAndDescript}>
                    <Text>
                        {props.summary}
                    </Text>
                </View>
                </View>
                <View>
                    <Text style={styles.wind}>Wind: {props.windSpeed} mph</Text>
                </View>
            </View>
        </View>
    )
}

export default CurrentWeather;