import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { collection, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

const LeaderboardCard = (props) => {

    const { homeData } = props

    const [tableData, setTableData] = useState([])

    useFocusEffect(
        React.useCallback(() => {
            console.log("Focused")

            const userRef = doc(db, "users", homeData.id)

            const scoreRef = collection(userRef, "scores")

            const unsubscribe = onSnapshot(scoreRef, (querySnapshot) => {
                const scoreData = []

                querySnapshot.forEach((doc) => {
                    scoreData.push({ ...doc.data(), id: doc.id });
                    console.log("Current score: ", doc.data());
                    // scoreData.push(doc.data())
                    // console.log("Current score: ", doc.data());
                })
                setTableData(scoreData)
            })

            return () => {
                console.log("Unfocused")
                unsubscribe()
            }
        }, [])
    )

    return (
        <View style={styles.container}>
            <View style={styles.scoreDataBlock}>
                {tableData != [] ? (
                    tableData.map((data) => (
                        <View key={data.id} style={styles.scoreData}>
                            
                            <Text style={styles.scoreText}>{data.battleType}</Text>
                            <Text style={styles.scoreText}>{data.score}</Text>
                            <Text style={styles.scoreText}>{data.battleRating}</Text>
                        </View>
                    ))
                ): <Text> No Recent Scores </Text>}
            </View>
        </View>
    )
}

export default LeaderboardCard

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    scoreData: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    scoreText: {
        color: 'white',
        fontSize: 14,
    }
})