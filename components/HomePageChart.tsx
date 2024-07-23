import { View, Text } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';
import { PieChart } from 'react-native-gifted-charts';

export default function HomePageChart() {
    const pieData = [
        {

            value: 47,
            color: Colors.tintColor,
            focused: true,
            text: '47%'
        },
        {
            value: 40,
            color: Colors.blue,
            text: '40%'
        },
        {
            value: 16,
            color: Colors.white,
            text: '16%'
        },
        {
            value: 3,
            color: '#FFA5BA',
            gradienCenterColor: '#FF7F97',
            text: '3%'
        }
    ]
    return (
        <View>
            <PieChart
                data={pieData}
                donut
                showGradient
                sectionAutoFocus
                semiCircle
                focusOnPress
                radius={70}
                innerRadius={55}
                innerCircleColor={Colors.grey}
                centerLabelComponent={() => {
                    return (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text
                                style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>
                                47%
                            </Text>

                        </View>
                    );
                }}
            />
        </View>
    )
}