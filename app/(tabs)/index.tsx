import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';
import { Stack } from 'expo-router';
import Header from '@/components/Header';
import HomePageChart from '@/components/HomePageChart';
import ExpenseBlock from '@/components/ExpenseBlock';
import ExpenseList from '@/data/expenses.json'

export default function Page() {

    return (
        <>
            <Stack.Screen options={{
                header: () => <Header />
            }} />

            <View style={styles.container}>
                <ScrollView>
                    <View >
                        <View style={styles.headerWrapper}>
                            <View style={styles.headerTextWrapper}>
                                <Text style={styles.headerText}>My <Text style={styles.textBold}>Expenses</Text></Text>
                                <Text style={styles.headerText}><Text style={[styles.textBold, { fontSize: 36 }]}>$1,475.</Text >00</Text>
                            </View>
                            <View style={styles.chart}>
                                <HomePageChart />
                            </View>
                        </View>
                        <View style={styles.expenseBlock}>
                            <ExpenseBlock expenseList={ExpenseList} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.grey,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        color: Colors.white,
        fontSize: 16
    },
    textBold: {
        fontWeight: '700'
    },
    headerTextWrapper: {
        gap: 10
    },
    chart: {
        paddingVertical: 20,
        alignItems: 'center'
    }
})
