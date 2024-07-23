import { View, Text, FlatList, ListRenderItem, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { ExpenseType } from '@/type'
import Colors from '@/constants/Colors'
import { Feather } from '@expo/vector-icons'

export default function ExpenseBlock({ expenseList }: { expenseList: ExpenseType[] }) {
    const renderItem: ListRenderItem<Partial<ExpenseType>> = ({ item, index }) => {
        if (index === 0) {
            return (
                <TouchableOpacity onPress={() => { }}>
                    <View style={styles.blockAddItem}>
                        <Feather name='plus' size={22} color={'#ccc'} />
                    </View>
                </TouchableOpacity>
            )
        }
        let amount = item.amount?.split('.');
        return (
            <View style={[styles.expenseBlock, {
                backgroundColor:
                    item.name == "Food"
                        ? Colors.blue
                        : item.name == "Saving"
                            ? Colors.white
                            : item.name == 'Miscleneous'
                                ? '#FFA5BA'
                                : Colors.tintColor
            }]}>
                <Text style={[styles.blockHeader, {
                    color:
                        item.name == "Housing"
                            ? Colors.white
                            : Colors.black,
                }]}>{item.name}</Text>
                <Text style={[styles.blockAmount, {
                    color:
                        item.name == "Housing"
                            ? Colors.white
                            : Colors.black,
                }]}>${amount[0]}.<Text style={styles.blockAmountSpan}>{amount[1]}</Text></Text>
                <View style={styles.blockPercentWrapper}>
                    <Text style={[styles.blockPercent, {
                        color:
                            item.name == "Housing"
                                ? Colors.white
                                : Colors.black,
                    }]}>{item.percentage}%</Text>
                </View>


            </View>
        )
    }

    const staticItem = [{ name: 'Add Item' }];
    return (
        <View style={{ marginVertical: 20 }}>
            <FlatList data={staticItem.concat(expenseList)} renderItem={renderItem} horizontal showsHorizontalScrollIndicator={false} />
        </View>
    )
}
const styles = StyleSheet.create({
    expenseBlock: {
        backgroundColor: Colors.tintColor,
        width: 130,
        padding: 15,
        borderRadius: 15,
        marginRight: 20,
        gap: 20,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    blockHeader: {
        color: Colors.white,
        fontSize: 14
    },
    blockAmount: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: '600'
    },
    blockAmountSpan: {
        fontWeight: '400',
        fontSize: 12
    },
    blockPercentWrapper: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 15,
        paddingHorizontal: 8,
        paddingVertical: 4

    },
    blockPercent: {
        color: Colors.white,
        fontSize: 14
    },
    blockAddItem: {
        flex: 1,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginRight: 20,
        borderRadius: 10
    }
})