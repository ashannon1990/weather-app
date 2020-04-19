import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    hourly: {
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
})


const HourlyForecast = (props) => {
    return (
        <View style={styles.hourly}>
            <View style={styles.iconAndContion}>
                <Text style={styles.condition}>{props.time} - {props.precip}%</Text>
            </View>
            <Text style={styles.condition}>{props.temp + '\u00B0'}</Text>
        </View>
    );
};

export default HourlyForecast;