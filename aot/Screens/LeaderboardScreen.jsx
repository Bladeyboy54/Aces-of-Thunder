import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const battleRating = [
  { label: '1.0', value: '1.0' },
  { label: '1.3', value: '1.3' },
  { label: '1.7', value: '1.7' },
  { label: '2.0', value: '2.0' },
  { label: '2.3', value: '2.3' },
  { label: '2.7', value: '2.7' },
  { label: '3.0', value: '3.0' },
  { label: '3.3', value: '3.3' },
  { label: '3.7', value: '3.7' },
  { label: '4.0', value: '4.0' },
  { label: '4.3', value: '4.3' },
  { label: '5.7', value: '5.7' },
  { label: '6.0', value: '6.0' },
  { label: '6.3', value: '6.3' },
  { label: '6.7', value: '6.7' },
  { label: '7.0', value: '7.0' },
  { label: '7.3', value: '7.3' },
  { label: '7.7', value: '7.7' },
  { label: '8.0', value: '8.0' },
  { label: '8.3', value: '8.3' },
  { label: '8.7', value: '8.7' },
  { label: '9.0', value: '9.0' },
  { label: '9.3', value: '9.3' },
  { label: '9.7', value: '9.7' },
  { label: '10.0', value: '10.0' },
  { label: '10.3', value: '10.3' },
  { label: '10.7', value: '10.7' },
  { label: '11.0', value: '11.0' },
  { label: '11.3', value: '11.3' },
  { label: '11.7', value: '11.7' },
  { label: '12.0', value: '12.0' },
  { label: '12.3', value: '12.3' },
  { label: '12.7', value: '12.7' },
];

const battleType = [
  { label: 'Air Arcade Battle', value: 'AAB' },
  { label: 'Air Realistc Battle', value: 'ARB' },
  { label: 'Ground Arcade Battle', value: 'GAB' },
  { label: 'Ground Realistic Battle', value: 'GRB' },
  { label: 'Naval Arcade Battle', value: 'NAB' },
  { label: 'Naval Realistic Battle', value: 'NRB' },
  { label: 'Simulation Battle', value: 'SB'}
]

const LeaderboardScreen = () => {

  const [value, setValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);


  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled = {true}
    >
      <ImageBackground
        source={require('../assets/BackgroundTexture1.png')}
        style={styles.backgroundImage}
        resizeMode='cover'
      >
        {/* //////////////////////HEADER SECTION////////////////////////////////// */}
        <View 
          style={styles.headingSection}
        >
          <Image 
            source={require('../assets/icons/Leaderboard.png')}
            style={styles.headingIcon}
          />
          <Text
            style={styles.headingText}
          >
            Top Aces
          </Text>
          
        </View>
        {/* -------------------------Filter------------------------------------- */}
        <View style={styles.filterContainer}>
          {/* -------------------------Battle Type -------------------------------- */}
          <View style={styles.dropdownContainer}>
            
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: '#FFFFFF' }]}
              placeholderStyle={styles.placeholderStyle}
              containerStyle={styles.dropdownListContainer}
              itemTextStyle={styles.dropdownListText}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              activeColor='#E53935'
              data={battleType}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? ' TYPE' : '...'}
              searchPlaceholder="Search..."
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setBattleTypeValue(item.value);
                setIsFocus(false);
              }}
              renderLeftIcon={() => (
                <MaterialCommunityIcons
                  name="tank" 
                  size={24} 
                  color="white" 
                />
              )}
            />

          </View>
          <View style={styles.spacer}>
            {/* this is just a spacer   */}
          </View> 
          {/* -------------------------Battle Type -------------------------------- */}
          <View style={styles.dropdownContainer}>
            
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: '#FFFFFF' }]}
              placeholderStyle={styles.placeholderStyle}
              containerStyle={styles.dropdownListContainer}
              itemTextStyle={styles.dropdownListText}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              activeColor='#E53935'
              data={battleRating}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? ' BR' : '...'}
              searchPlaceholder="Search..."
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setBattleTypeValue(item.value);
                setIsFocus(false);
              }}
              renderLeftIcon={() => (
                <FontAwesome5
                  style={styles.icon}
                  color={isFocus ? '#E53935' : '#FFFFFF'}
                  name="fighter-jet"
                  size={20}
                />
              )}
            />

          </View>
        </View>
        <View>
          
        </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
};
export default LeaderboardScreen;

const styles = StyleSheet.create({
  container: {
    width: 360,
    height: 752,
    backgroundColor: '#2F2F2F'
  },
  backgroundImage: {
    width: '100%',
    height: '110%',
    paddingTop: 50
  },
  headingSection: {
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
  headingIcon: {
    height: 30,
    width: 30
  },
  headingText: {
    color: 'white',
    fontSize: 24,
    marginLeft: 20,
    fontWeight: '400',
  },
  filterContainer: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'green',
    alignSelf: 'center',
    marginTop: 16
  },
  dropdownContainer: {
    alignItems: 'center',
    width: '47%',
    // backgroundColor: 'blue'
    
  },
  spacer: {
    width: '6%'
  },
  dropdown: {
    height: 50,
    borderColor: '#E53935',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: '#171717',
    color: '#fff',
    width: '100%'
  },
  icon: {
    marginRight: 5,
  },
  
  placeholderStyle: {
    fontSize: 16,
    color: '#FFFFFF'
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#FFFFFF'
    
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    backgroundColor: '#171717'
  },
  dropdownListContainer: {
    backgroundColor: '#171717',
    color: '#FFFFFF',
    borderRadius: 10,
    borderColor: '#E53935'
  },
  dropdownListText: {
    color: '#FFFFFF'
  },
})