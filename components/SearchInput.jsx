import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'

const SearchInput = ({ title, value, handleChangeText, otherStyles, keyboardType, placeholder, ...props }) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary items-center flex-row space-x-4">
      <TextInput
        value={value}
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        placeholder={placeholder}
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        secureTextEntry={title === 'Password' && !showPassword}
      />
      <TouchableOpacity>
        <Image 
          source={icons.search}
          className="w-5 h-5"
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  )
}

export default SearchInput