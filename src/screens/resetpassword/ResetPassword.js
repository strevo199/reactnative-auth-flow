import { StyleSheet, Text, TextInput,View } from 'react-native'
import React, {useState} from 'react'
import { COLORS, SIZES,FONTS } from '../../constants/theme';
import {InputFlied, HeaderText,ParagraphText, BtnFlied} from '../../components/paraText';

export const ResetPassword = ({navigation}) => {
    const [email, setEmail] = useState('')

    const handleSubmit = () => {
        console.log('email---------',email)
        if (email) {
            navigation.navigate('EmailComfirm')
        }
    }

  return (
    <View style ={styles.container}>
      {/*  */}
      <View style ={{ marginHorizontal: SIZES.padding}}>
        <HeaderText
          message = {"Reset password"}
        />
      </View>
      {/*  */}
      <View style ={{ marginHorizontal: SIZES.padding}}>
        <ParagraphText
          message = {"Enter the email asscoiated with your account and wee'll send an email with instruction to reset your password."}
        />
      </View>
      {/*  */}
      <View style ={{marginHorizontal: SIZES.padding, marginTop: SIZES.padding * 1.2}}>
        <ParagraphText
          message={"Email address :"}
          style ={{...FONTS.body2}}
        />
        <View>
          <InputFlied
           placeholder = {'Ener your email..'}
           setTarget = {setEmail}
           setSecureTextEntry={false}
          />
        </View>
        {/*  */}
        <View style ={{marginVertical: SIZES.base}}>
          <BtnFlied
            title ={"Send Instructions"}
            onpress = {handleSubmit}

          />
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    }
})