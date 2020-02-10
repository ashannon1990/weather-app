import React from 'react';
import { Text, View, Image } from 'react-native';

const styles = {
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    headerText:{
        fontSize: 20
    },
    currentMainDiv: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    currentTemp: {
        fontSize: 40
    },
    iconAndDescript: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    wind: {
        fontSize: 25
    }
}

const CurrentWeather = props => {
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.headerText}>Right now in {props.city}</Text>
            </View>
            <View style={styles.currentMainDiv}>
                <Text style={styles.currentTemp}>{props.currentTemp + '\u00B0'}</Text>
                <View style={styles.iconAndDescript}>
                    <Image
                        style={{ width: 80, height: 80 }}
                        source={{ uri: 'http://openweathermap.org/img/wn/' + props.icon + '@2x.png' }}
                    />
                    <Text>
                        {props.main}
                    </Text>
                </View>
                <View>
                    <Text style={styles.wind}>Wind: {props.wind} mph</Text>
                </View>
            </View>
        </View>
    )
}

export default CurrentWeather;