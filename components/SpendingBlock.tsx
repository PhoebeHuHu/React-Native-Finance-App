import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { SpendingType } from '@/type'
import { AirbnbIcon, AmazonIcon, DollarIcon, FigmaIcon, NetflixIcon, ShoopingCartIcon, SpotifyIcon } from '@/constants/icons'
import Colors from '@/constants/Colors'

export default function SpendingBlock({ spendingList }: { spendingList: SpendingType[] }) {
    let icon = <DollarIcon width={22} height={22} color={Colors.white} />

    return (
        <View style={{ marginVertical: 20 }}>
            {spendingList.map((item) => {
                if (item.name == 'AirBnB Rent') {
                    icon = <AirbnbIcon width={22} height={22} color={Colors.white} />
                } else if (item.name == 'Netflix') {
                    icon = <NetflixIcon width={22} height={22} color={Colors.white} />
                } else if (item.name == 'Spotify') {
                    icon = <SpotifyIcon width={22} height={22} color={Colors.white} />
                } else if (item.name == 'Amazon') {
                    icon = <AmazonIcon width={22} height={22} color={Colors.white} />
                } else if (item.name == 'Figma') {
                    icon = <FigmaIcon width={22} height={22} color={Colors.white} />
                } else if (item.name == 'Online Shopping') {
                    icon = <ShoopingCartIcon width={22} height={22} color={Colors.white} />
                }
                return (
                    <View key={item.id} style={styles.dataWrapper}>
                        <View style={styles.iconNameDateWrapper}>
                            <View style={styles.iconWrapper}>
                                {icon}
                            </View>
                            <View style={styles.dateNameWrapper}>
                                <Text style={styles.boldText}>{item.name}</Text>
                                <Text style={styles.dateText}>{item.date}</Text>
                            </View>
                        </View>
                        <Text style={styles.boldText}>${item.amount}</Text>
                    </View>
                )
            })}
        </View>
    )

}

const styles = StyleSheet.create({
    iconWrapper: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start',
        padding: 22,
        borderRadius: 50
    },
    boldText: {
        fontSize: 16,
        color: Colors.white,
        fontWeight: '700'
    },
    dateText: {
        fontSize: 14,
        color: Colors.white
    },
    dateNameWrapper: {
        gap: 10
    },
    iconNameDateWrapper: {
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center'
    },
    dataWrapper: {
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})