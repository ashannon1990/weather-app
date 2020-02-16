import React from 'react';
import { Text, View, Image } from 'react-native';

const styles = {
    dailyForecast: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    iconAndContion: {
        display: 'flex',
        flexDirection: 'row'
    },
    temps: {
        fontSize: 20
    },
    condition: {
        fontSize: 20
    }
}

const FiveDayForecast = (props) => {
    return (
        <View style={styles.dailyForecast}>
            <View style={styles.iconAndContion}>
                <Image
                    style={{ width: 40, height: 40 }}
                    source={{ uri: 'http://openweathermap.org/img/wn/' + props.icon + '@2x.png' }}
                />
                <Text style={styles.condition}>{props.day} - {props.condition}</Text>
            </View>
            <Text style={styles.condition}>{props.maxTemp + '\u00B0'}/{props.minTemp + '\u00B0'}</Text>
        </View>
    );
};

export default FiveDayForecast;