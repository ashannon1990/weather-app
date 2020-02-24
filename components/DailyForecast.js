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
        flexDirection: 'row',
        fontSize: 20
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
                <Text style={styles.condition}>{props.day} - </Text>
            </View>
            <Text style={styles.condition}>{props.maxTemp + '\u00B0'}/{props.minTemp + '\u00B0'}</Text>
        </View>
    );
};

export default FiveDayForecast;