import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Screens/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { NavigationContainer } from '@react-navigation/native';
import RegisterScreen from './Screens/RegisterScreen';
import HomeScreen from './Screens/HomeScreen';
import LeaderboardScreen from './Screens/LeaderboardScreen';
import NewScoreScreen from './Screens/NewScoreScreen';



const Stack = createNativeStackNavigator();
const getSignedIn = () => {
  const [ loggedIn, setLoggedIn ] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged( auth, (user) => {
      if (user) {
        setLoggedIn(true);
        console.log("<== Current user Logged In ==> " + user.email)
      } else {
        setLoggedIn(false);
        console.log("==> No Users Logged In <==")
      }
    })
    return unsubscribe
  }, [])

  return loggedIn
}

const Tab = createBottomTabNavigator()

export default function App() {

  const isSignedIn = getSignedIn();

  return (
    <NavigationContainer>
      
      {isSignedIn ? (
        <Tab.Navigator>
          <Tab.Screen options={{ headerShown:false }} name="Home" component={HomeScreen} />
          <Tab.Screen options={{ headerShown: false }} name="Leaderboard" component={LeaderboardScreen} />
          <Tab.Screen options={{ headerShown: false }} name="Add New Score" component={NewScoreScreen} />
        </Tab.Navigator>
          
        
      ) : (
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown:false }} name="Login" component={LoginScreen} />
          <Stack.Screen options={{ headerShown:false }} name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      )}
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
