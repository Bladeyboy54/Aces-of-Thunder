import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, TouchableOpacity } from 'react-native';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { getCurrentUser } from '../services/authService';
import { getAllUserData, getCurrentUserData, getRecentScores } from '../services/FirestoreService';
import HomeTableCard from './HomeTable';

const HomeScreen = ({navigation}) => {

  const [userData, setUserData] = useState({ gamerTag: '', playerLevel: 0 });
  const [recentScores, setRecentScores] = useState([]);
  const [Test, setTest] = useState([])

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const currentUser = getCurrentUser();
        if (currentUser) {
          const data = await getCurrentUserData(currentUser.uid);
          if (data) {
            setUserData(data);
          }
          
        }
      } catch (e){
        console.log("Error fetching user data:", e);
      }
    };

    fetchUserData();
  }, []);
      
  useEffect(() => {
    const fetchRecentScores = async () => {
      try {
        const scores = await getAllUserData();
        setRecentScores(scores);
      } catch (e) {
        console.log("Error fetching recent scores:", e);
      }
    };

    fetchRecentScores();
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/BackgroundTexture1.png')}
        style={styles.backgroundImage}
        resizeMode='cover'
      >
        <View style={styles.userInfoBox}>
          <View style={styles.userInfoContainer}>
            <Image 
              source={require('../assets/profileImg/Cardicon_cosmonaut_ussr_01.png')}
              style={styles.avatar}
            />
            <View style={styles.userInfo}>
              <Text style={styles.username}>{userData.gamerTag}</Text>
              <Text style={styles.level}>Level {userData.playerLevel}</Text>
            </View>
          </View>    
        </View>
        <View style={styles.mainImageContainer}>
          <Image 
            source={require('../assets/img/tiger2.png')} 
            style={styles.mainImage}
          />
            <View style={styles.statsOverlay}>
            <Text style={styles.statsText}>GRB</Text>
            <Text style={styles.statsText}>1.4K</Text>
            <Text style={styles.statsText}>BR 6.7</Text>
          </View>
        </View>
        {/* //////////////////////Lower Section////////////////////////////////// */}
        <Text style={styles.scoresTitle}>Recent Scores</Text>
        <View style={styles.scoresContainer}>
          
          <View style={styles.scoresTable}>
          <View style={styles.tableHeader}>
              <Text style={styles.tableHeaderText}>Battle Rating</Text>
              <Text style={styles.tableHeaderText}>Battle Type</Text>
              <Text style={styles.tableHeaderText}>Score</Text>
            </View>
            
            {recentScores.length > 0 ? (
              recentScores.map((score, index) => index < 1 && (
                <HomeTableCard homeData={score} key={score.id}/>
              ))
            ): null}
          </View>
        </View>

        {/* //////////////////////Lower Section END////////////////////////////////// */}

      </ImageBackground>
    </SafeAreaView>    
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        width: 360,
        height: 752,
        backgroundColor: '#2F2F2F'
        
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        paddingTop: 50
    },
    userInfoBox: {
        width: '85%',
        height: '15%',
        // alignItems: 'center',
        backgroundColor: '#171717',
        padding: 20,
        alignSelf: 'center',
        borderRadius: 15,
        borderColor: '#E53935',
        borderWidth: 1,
        marginBottom: 20,
    },
    userInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        
      },
      avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 15,
      },
      userInfo: {
        flexDirection: 'column',
      },
      username: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
      level: {
        color: '#888',
        fontSize: 14,
      },
      mainImageContainer: {
        // width: 270,
        position: 'relative',
        marginBottom: 20,
        alignItems: 'center',
        
      },
      mainImage: {
        width: 250,
        height: 250,
        borderRadius: 10,
        borderColor: '#E53935',
        borderWidth: 1,
        borderRadius: 150
        
      },
      statsOverlay: {
        position: 'absolute',
        top: 20,
        left: 20,
        right: 20,
        bottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        // borderColor: '#E53935',
        // borderWidth: 1,
      },
      statsText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        margin: 15,
      },
      scoresContainer: {
        width: '85%',
        alignSelf: 'center',
        backgroundColor: '#171717',
        borderRadius: 10,
        padding: 20,
        borderColor: '#E53935',
        borderWidth: 1,
        marginTop: 20,
      },
      scoresTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        // marginBottom: 10,
        width: '85%',
        alignSelf: 'center',
      },
      scoresTable: {
        width: '100%',
      },
      tableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
      },
      tableHeaderText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
      tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
      },
      tableCell: {
        color: 'white',
        fontSize: 14,
      },
})