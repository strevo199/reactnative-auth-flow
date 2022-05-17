import { StyleSheet, TouchableOpacity, SafeAreaView, Image, Text, View } from 'react-native'
import React from 'react'
import {emailOpen} from '../../constants/icons'
import { COLORS, SIZES, FONTS } from '../../constants/theme';
import { BtnFlied, HeaderText, ParagraphText } from '../../components';
 
export const EmailComfirm = ({navigation}) => {
  return (
    <SafeAreaView style ={{
      flex: 1,
      backgroundColor: COLORS.white
    }}>
      <View
        style ={{
          justifyContent: 'center',
            alignItems: 'center',
            marginTop: SIZES.largeTitle * 1.5
        }}
      >
        <View
          style ={{
            backgroundColor: "#3b0c9813",
            padding: SIZES.h2,
            borderRadius: SIZES.radius,
            justifyContent: 'center',
            alignItems: 'center'
        }}
        >
          <Image
            source={emailOpen}
            resizeMode = "contain"
            style ={{
              width: 100,
              height: 100,
            }}
          />
        </View>
      </View>
      {/*  */}
      <View style ={{
        justifyContent: 'center',
        alignItems: 'center',

      }}>
        <HeaderText
          message={"Check your mail"}
        />
      </View>
      <View style ={{
        alignItems: 'center'
      }}>
        <ParagraphText
          message={"We have sent a password recover"}
        />
        <ParagraphText
          message={"instructions to your email."}
        />
      </View>
      <View style ={{marginVertical: SIZES.padding * 1.5, alignItems: 'center'}}>
        <BtnFlied
          title={"Open email app"}
          style ={{width: "50%"}}
        />
      </View>
      <View style ={{
        alignItems: 'center'
      }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("NewPassword")}
        >
          <ParagraphText
              message={"Skip, i'll confrim later"}
              style ={{...FONTS.body2}}
            />

        </TouchableOpacity>
      </View>
      {/*  */}
      <View style ={{
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: '19%'
        
      }}>
      <ParagraphText
            message={"Did not receive the email? Check your spam filter,"}
          />
      <View style ={{
        flexDirection: 'row',
        marginTop: 5
      }}>
        <ParagraphText
          message={"or"}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPassword')}
        >
          <ParagraphText
          message={"try another email address"}
          style ={{color: COLORS.primary, fontWeight: 'bold', marginLeft:5}}/>
        </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({})