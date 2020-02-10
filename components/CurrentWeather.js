import React from 'react';
import { Text, View, Image } from 'react-native';

const styles = {
    currentMainDiv: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    currentTemp: {
        fontSize: 50
    },
    iconAndDescript: {
        flexDirection: 'column'
    }
}

const CurrentWeather = props => {
    return (
        <View>
            <View style={styles.currentMainDiv}>
                <Text style={styles.currentTemp}>{props.currentTemp + '\u00B0'}</Text>
                <View>
                    <Image
                        style={{ width: 80, height: 80 }}
                        source={{ uri: 'http://openweathermap.org/img/wn/' + props.icon + '@2x.png' }}
                    />
                    <Text>
                        {props.main}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default CurrentWeather;