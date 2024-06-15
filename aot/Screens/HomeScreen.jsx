import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, TouchableOpacity } from 'react-native';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { getCurrentUser } from '../services/authService';
import { getAllUserData, getCurrentUserData } from '../services/FirestoreService';

const HomeScreen = ({navigation}) => {


  // const currentUser = getCurrentUser()
  // const userId = currentUser.uid

  // const [userData, setUserData] = useState([])

  // useEffect(()=>{
  //   handleGettingUser()
  // }, [])

  // const [users, setUsers] = useState([])

  // const handleGettingUser = async () => {
  //   var usersData = await getAllUserData()
  //   setUsers(usersData)
  // }

  // const getCurrentUserData = async () => {
  //   var currentUserid = userId
  // }

  //////////////////////////////////////////////////// |              | //////////////////////////////////////////////////
  //////////////////////////////////////////////////// V Experimental V //////////////////////////////////////////////////
  const [userData, setUserData] = useState({ gamerTag: '', playerLevel: 0 });

  useEffect(() => {
    const fetchUserData = async () => {
      const currentUser = getCurrentUser();
      if (currentUser) {
        const data = await getCurrentUserData(currentUser.uid);
        if (data) {
          setUserData(data);
        }
      }
    };

    fetchUserData();
  }, []);
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
            <Text style={styles.statsText}>RB</Text>
            <Text style={styles.statsText}>1.4K</Text>
            <Text style={styles.statsText}>BR 6.7</Text>
          </View>
        </View>
        {/* //////////////////////Lower Section////////////////////////////////// */}
        <TouchableOpacity style={styles.homeNav}>
          <Image source={require('../assets/icons/ribbon.png')} style={styles.navIcon}/>
          <Text style={styles.homeNavText}>Battle Pass</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.homeNav}>
          <Image source={require('../assets/icons/Leaderboard.png')} style={styles.navIcon}/>
          <Text style={styles.homeNavText}>Leaderboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.homeNav}>
          <Image source={require('../assets/icons/addNew.png')} style={styles.navIcon}/>
          <Text style={styles.homeNavText}>Add New Score</Text>
        </TouchableOpacity>
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
      homeNav: {
        width: '85%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#171717',
        padding: 12,
        borderRadius: 10,
        marginBottom: 15,
        alignSelf: 'center',
        borderColor: '#E53935',
        borderWidth: 1,
      },
      navIcon: {
        height: 30,
        width: 30
      },
      homeNavText: {
        color: 'white',
        fontSize: 24,
        marginLeft: 10,
        fontWeight: '400',
        
      },
})