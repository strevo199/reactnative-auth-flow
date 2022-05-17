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

export const Login = ({navigation}) => {

  const [emailExist, setemailExist] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailExist = () => {
    console.log("handleEmailExist---------",email);
    if (email) {
      setemailExist(true);
    }
  }
  
  const handleLogin = () => {
    console.log("handleLogin----------",password);
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
            message= {emailExist ? 'Log in': 'Hi!'}
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
          {/*  */} 
          { emailExist && <View
            style={{
              flexDirection: 'row',
              marginVertical: SIZES.base,
            }}>
            <Image
              source={img7}
              resizeMode="contain"
              style={{
                width: 50,
                borderRadius: 25,
                height: 50,
                marginRight: 15,
              }}
            />
            <View>
              <ParagraphText
                message={'Stephen Isaac'}
                style={{color: COLORS.white, ...FONTS.body2}}
              />
              <ParagraphText
                style={{color: COLORS.white, ...FONTS.body3}}
                message={'stephenisaac@gmail.com'}
              />
            </View> 
          </View>}
          {/* emial */} 
          
          {!emailExist && <View>
            <InputFlied
              setTarget={setEmail}
              style={{
                borderColor: COLORS.primary,
                borderWidth: 2,
                backgroundColor: COLORS.lightGray,
              }}
              placeholder={'Enter Email'}

            />
          </View>}
          {/* password */}

          {emailExist && <View>
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
          </View>}
          <View
            style={{
              marginTop: SIZES.base,
            }}>
            <BtnFlied title={'Continue'}
              onpress ={!emailExist ? handleEmailExist : handleLogin}
            />
          </View>

          <View style={{alignItems: 'center', marginVertical: SIZES.base}}>
            <ParagraphText style={{color: COLORS.white}} message={'or'} />
          </View>
          {/*  */}
          <View>
            <BtnFlied
              title={'Continue with Facebook'}
              style={{backgroundColor: COLORS.lightGray}}
              titleStyle={{color: COLORS.dark}}
              icon={facebook}
              iconStyle={{
                left: 0,
                marginLeft: SIZES.base,
              }}
            />
          </View>
          <View style={{marginVertical: SIZES.base + 5}}>
            <BtnFlied
              title={'Continue with Google'}
              style={{backgroundColor: COLORS.lightGray}}
              titleStyle={{color: COLORS.dark}}
              icon={google}
              iconStyle={{
                left: 0,
                marginLeft: SIZES.base,
              }}
            />
          </View>
          <View>
            <BtnFlied
              title={'Continue with Apple'}
              style={{backgroundColor: COLORS.lightGray}}
              titleStyle={{color: COLORS.dark}}
              icon={apple}
              iconStyle={{
                left: 0,
                marginLeft: SIZES.base,
              }}
            />
          </View>

          {/*  */}
          <View style ={{flexDirection: 'row', marginVertical: SIZES.padding}}>
            <ParagraphText
              style={{color: COLORS.white}}
              message={"Don't have an account? "}
            />
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <ParagraphText
                style={{color: COLORS.links}}
                message={'Sign up'}
              />
            </TouchableOpacity>
          </View>
          {/*  */}
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('ResetPassword')}>
              <ParagraphText
                style={{color: COLORS.links}}
                message={'Forgot your password?'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({});
