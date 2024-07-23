import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '@/constants/Colors'
/* import { TouchableOpacity } from 'react-native-gesture-handler' */

export default function Header() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.profileWrapper}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                        style={styles.profileImg}
                    />
                    <View >
                        <Text style={[styles.profileText, { fontSize: 12 }]}>Hi, Jason</Text>
                        <Text style={[styles.profileText, { fontSize: 16 }]}>
                            Your <Text style={styles.boldText}>Budget</Text>
                        </Text>
                    </View>

                </View >
                <TouchableOpacity
                    onPress={() => { }}
                    style={styles.btnWrapper}>
                    <Text style={styles.btnText}>My Transactions</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black,
        paddingBottom: 50
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 70,
        alignItems: 'center',
        paddingHorizontal: 20
    },
    profileWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    profileText: {
        color: Colors.white,
    },
    boldText: {
        fontWeight: '700'
    },
    profileImg: {
        height: 50,
        width: 50,
        borderRadius: 30
    },
    btnWrapper: {
        borderColor: '#666',
        borderWidth: 1,
        padding: 8,
        borderRadius: 10
    },
    btnText: {
        color: Colors.white,
        fontSize: 12
    }
})