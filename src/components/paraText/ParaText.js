import React, {useState} from 'react';
import { View, Text,Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';


export const HeaderText = ({message,style}) => (
    <View style ={{marginVertical: SIZES.padding}}>
        <Text style ={{...FONTS.h1, color: COLORS.dark}} >{message}</Text>
    </View>
)

export const ParagraphText = ({message,style}) => {
    return (
        <View>
            <Text style ={[{color: COLORS.dark ,...FONTS.body3},style]}>{message}</Text>
        </View>
    )
}

export const InputFlied = ({placeholder,style, setTarget, setSecureTextEntry}) => {
    return (
        <TextInput 
            style ={[styles.inputStyle,style]}
            placeholder = {placeholder}
            onChangeText = {(e) => setTarget(e)}
            secureTextEntry={setSecureTextEntry}
          />
    )
}

export const BtnFlied = ({title,style,titleStyle, icon, onpress, iconStyle}) => {


    return (
    <TouchableOpacity
    onPress={onpress}
        style = {[{
            backgroundColor: COLORS.primary,
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: SIZES.base,
            paddingVertical: SIZES.base * 1.3,
            
        },style]}
    >
        <Image
            source= {icon}
            resizeMode = 'contain'
            style ={[{
                width: 25,
                height: 25,
                position: 'absolute',
                
            },iconStyle]}
        />
        <Text style ={[{color: COLORS.white,...FONTS.h3}, titleStyle]}>{title}</Text>
    </TouchableOpacity>)
}


const styles =  StyleSheet.create({
    inputStyle: {
        borderColor: COLORS.gray,
        borderWidth: 0.7,
        height: 50,
        ...FONTS.body3,
        padding: SIZES.base,
        borderRadius: SIZES.base,
        marginVertical: SIZES.base,
      },
      
})

