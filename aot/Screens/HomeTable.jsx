import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { collection, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

const HomeTableCard = (props) => {
    
    const { homeData } = props

    var dummyHomeData = [
        {battleRating: "4.7", battleType: "GRB", score: "0000"},
        {battleRating: "4.7", battleType: "GRB", score: "0000"},
        {battleRating: "4.7", battleType: "GRB", score: "0000"},
    ]

    const [tableData, setTableData] = useState([])

    useFocusEffect(
        React.useCallback(() => {
            console.log("Focused")

            const userRef = doc(db, "users", homeData.id)

            const scoreRef = collection(userRef, "scores")

            const unsubscribe = onSnapshot(scoreRef, (querySnapshot) => {
                const scoreData = []

                querySnapshot.forEach((doc) => {
                    scoreData.push(doc.data())
                    console.log("Current score: ", doc.data());
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
                            <Text style={styles.scoreText}>{data.battleRating}</Text>
                            <Text style={styles.scoreText}>{data.battleType}</Text>
                            <Text style={styles.scoreText}>{data.score}</Text>
                        </View>
                    ))
                ): <Text> No Recent Scores </Text>}
            </View>
        </View>
    )
}

export default HomeTableCard

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