import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { COLORS, SIZES, FONTS } from '../../constants/theme';
import { BtnFlied, HeaderText, hidenEye, InputFlied, ParagraphText } from '../../components';

export const NewPassword = () => {

  const [password, setpassword] = useState('')
  const [confrimPassword, setconfrimPassword] = useState('')

  const handlePasswordReset = () => {
    if (password === confrimPassword) {
        console.log("COnfrim-----------");
    } 
  }

  return (
    <View style ={{
        backgroundColor: COLORS.white,
        flex: 1
    }}>
      <View style ={{marginHorizontal: SIZES.padding}}>
          <HeaderText
            message={"Create new password"}
          />
      </View>
      <View style ={{marginHorizontal: SIZES.padding}}>
          <ParagraphText
            message={"You new password must be different"}
          />
          <ParagraphText
            message={"from previous used passwords."}
          />
      </View>
      <View style ={{marginHorizontal: SIZES.padding, marginTop: SIZES.padding}}>
        <ParagraphText
                message={"Password"}
                style ={{...FONTS.body2}}
            />
        <InputFlied
            placeholder={"enter password"}
            style ={{...FONTS.body2}}
            setTarget = {setpassword}
            setSecureTextEntry={true}

        />
        <ParagraphText
                message={"Must be at least * characters"}
                style ={{...FONTS.body4}}
            />
      </View>
      <View style ={{marginHorizontal: SIZES.padding, marginTop: SIZES.padding}}>
        <ParagraphText
                message={"Confirm password"}
               style ={{...FONTS.body2}}
            />
        <InputFlied
            placeholder={"Confirm password"}
            setSecureTextEntry={true}
            setTarget = {setconfrimPassword}
        />
        <ParagraphText
                message={"Both passwords must match"}
                style ={{...FONTS.body4}}
            />
      </View>
      <View style ={{
          marginHorizontal: SIZES.padding,
          marginTop: SIZES.padding
      }}>
        <BtnFlied
            title={"Reset Password"}
            onpress ={handlePasswordReset}
        />

      </View>
    </View>
  )
}


const styles = StyleSheet.create({})