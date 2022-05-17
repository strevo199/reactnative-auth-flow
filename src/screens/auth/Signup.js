import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  COLORS,
  FONTS,
  profile4,
  facebook,
  google,
  apple,
  img7,
  SIZES,
} from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import {BtnFlied, InputFlied, ParagraphText} from '../../components';

export const Signup = ({navigation}) => {

  const [fullName, setfullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  
  
  const handleSignup = () => {
    console.log("handleSignup----------",password);
  }

  return (
    <ImageBackground
      source={profile4}
      resizeMode="cover"
      style={{
        flex: 1,
      }}>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <View
          style={{
            marginLeft: SIZES.padding * 2,
          }}> 
          <ParagraphText
            message= {'Sign up'}
            style={{color: COLORS.lightGray, ...FONTS.largeTitle}}
          />
        </View>
        <View
          style={{
            backgroundColor: COLORS.transparentBlack,
            borderRadius: SIZES.radius,
            padding: SIZES.padding,
            marginHorizontal: SIZES.padding,
            marginVertical: SIZES.padding * 2,
          }}>
          
          {/* emial */} 
          
          <View>
            <InputFlied
              setTarget={setfullName}
              style={{
                borderColor: COLORS.primary,
                borderWidth: 2,
                backgroundColor: COLORS.lightGray,
              }}
              placeholder={'Enter full Name'}

            />
          </View>
          {/* emial */} 
          
          <View>
            <InputFlied
              setTarget={setEmail}
              style={{
                borderColor: COLORS.primary,
                borderWidth: 2,
                backgroundColor: COLORS.lightGray,
              }}
              placeholder={'Enter Email'}

            />
          </View>
          {/* password */}

          <View>
            <InputFlied
              setSecureTextEntry={true}
              setTarget={setPassword}
              style={{
                borderColor: COLORS.primary,
                borderWidth: 2,
                backgroundColor: COLORS.lightGray,
              }}
              placeholder={'password'}
            />
          </View>
          <View
            style={{
              marginTop: SIZES.base,
            }}>
            <BtnFlied title={'Agree and continue'}
              onpress ={handleSignup}
            />
          </View>
          

          {/*  */}
          <View style ={{marginVertical: SIZES.padding}}>
            <ParagraphText
              style={{color: COLORS.white}}
              message={"By selecting Agree and continue below,"}
            />
            <View style ={{flexDirection: 'row'}}>
              <ParagraphText
                style={{color: COLORS.white}}
                message={"i agree to "}
              />

              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <ParagraphText
                  style={{color: COLORS.links}}
                  message={'Terms and Privacy Policy'}
                />
              </TouchableOpacity>

            </View>
          </View>
          {/*  */}
          <View style = {{flexDirection: 'row'}}>
                <ParagraphText
                  style={{color: COLORS.white}}
                  message={'Already have an account, '}
                />
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}>
              <ParagraphText
                style={{color: COLORS.links}}
                message={'Login '}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({});