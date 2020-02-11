import React from 'react';
import { Text, View } from 'react-native'

const SnarkyMessage = (props) => {
        let snarky = ''
        let currentCondition = props.currentCondition;
        switch(currentCondition) {
            case 'Thunderstorm':
                snarky = 'Ohhh, a thunderstorm. If your home, enjoy it. If your driving, sucks to be you.'
                break;
            case 'Drizzle':
                snarky = 'A nice light drizzle is about as boring as bad weather can be.'
                break;
            case 'Rain':
                snarky = 'This is a perfect day to drink coffee by the fire place. Too bad you don\'t have a fire place'
                break;
            case 'Snow':
                snarky = 'Wait... this is Florida. Why the f*** is it snowing?!!!'
                break;
            case 'Mist':
                snarky = 'It\'s not that bad out I guess... not good though'
                break;
            case 'Squall':
                snarky = 'WTF is a squall?'
                break;
            case 'Tornado':
                snarky = 'I dare you to go play outside!'
                break;
            case 'Clear':
                snarky = 'It\'s nice, but boring today.'
                break;
            case 'Clouds':
                snarky = 'Oh look, clouds. That one looks like a giraffe.'
            default:
                'nothing going on I guess' 
        
    }
    return (
        <View>
            <Text>
                {snarky}
            </Text>
        </View>
    );
};

export default SnarkyMessage;