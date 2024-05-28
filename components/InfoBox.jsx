import { View, Text } from 'react-native'
import React from 'react'

const InfoBox = ({ title, subtitle, containerStyles, titleStyle }) => {
  return (
    <View className={containerStyles}>
      <Text className={`text-white text-center font-psemibold ${titleStyle}`}>{title}</Text>
      <Text className="text-center font-pregular text-sm text-gray-100">{subtitle}</Text>
    </View>
  )
}

export default InfoBox