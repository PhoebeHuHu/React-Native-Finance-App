import { View, Text, StyleSheet, FlatList, ListRenderItem, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { IncomeType } from '@/type'
import { DollarIcon, WalletAddMoneyIcon, WalletCardIcon } from '@/constants/icons'
import { Feather } from '@expo/vector-icons'

export default function IncomeBlock({ incomeList }: { incomeList: IncomeType[] }) {
    const renderItem: ListRenderItem<IncomeType> = ({ item }) => {
        let icon = <DollarIcon width={22} height={22} color={Colors.white} />
        if (item.name == 'Freelancing') {
            icon = <WalletCardIcon width={22} height={22} color={Colors.white} />
        } else if (item.name == 'Interest') {
            icon = <WalletAddMoneyIcon width={22} height={22} color={Colors.white} />
        }
        let amount = item.amount.split('.')
        return (
            <View style={styles.incomeBlock}>
                <View style={styles.iconsWrapper}>
                    <View style={styles.iconCircle}>
                        {icon}
                    </View>
                    <TouchableOpacity>
                        <Feather name='more-horizontal' size={20} color={Colors.white} />
                    </TouchableOpacity>
                </View>

                <Text style={styles.blockHeader}>{item.name}</Text>
                <Text style={styles.blockAmount}>{amount[0]}.<Text style={styles.blockAmountSpan}>{amount[1]}</Text></Text>
            </View>
        )
    }
    return (
        <View style={{ marginVertical: 20 }}>
            <FlatList data={incomeList} renderItem={renderItem} horizontal showsHorizontalScrollIndicator={false} />
        </View>
    )
}

const styles = StyleSheet.create({
    incomeBlock: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        width: 150,
        gap: 10,
        padding: 15,
        borderRadius: 20,
        marginRight: 20,
    },
    blockHeader: {
        color: Colors.white,
        fontSize: 14
    },
    iconCircle: {
        padding: 5,
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 50,
        alignSelf: 'flex-start'
    },
    iconsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    blockAmount: {
        fontSize: 16,
        fontWeight: '700',
        color: Colors.white
    },
    blockAmountSpan: {
        fontSize: 12,
        fontWeight: '400',
        color: Colors.white
    }
})