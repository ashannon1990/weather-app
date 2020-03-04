import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    daily: {
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


const DailyForecast = (props) => {
    return (
        <View style={styles.daily}>
            <View style={styles.iconAndContion}>
                <Text style={styles.condition}>{props.day} - </Text>
            </View>
            <Text style={styles.condition}>{props.maxTemp + '\u00B0'}/{props.minTemp + '\u00B0'}</Text>
        </View>
    );
};

export default DailyForecast;