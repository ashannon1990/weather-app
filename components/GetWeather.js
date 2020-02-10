import React from 'react';
import { Button, View } from 'react-native'

const GetWeather = (props) => {
    return (
        <View>
            <Button
                title="Get weather"
                onPress={props.clicked}
            />
        </View>
    );
};

export default GetWeather;