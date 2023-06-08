import { Link, useSearchParams, SplashScreen } from 'expo-router'
import { useEffect, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View, Image } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import * as SecureStore from 'expo-secure-store'
import { api } from '../../src/lib/api'

import Logo from '../../src/assets/logo.svg'
import Icon from '@expo/vector-icons/Feather'

import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'

dayjs.locale(ptBr)

interface Memories {
  id: string
  coverUrl: string
  content: string
  createdAt: string
}

export default function DetailsMemory() {
  const [loading, setLoading] = useState(true)
  const [memories, setMemories] = useState<Memories>()
  const { bottom, top } = useSafeAreaInsets()

  const { id } = useSearchParams()

  async function loadMemory() {
    try {
      const token = await SecureStore.getItemAsync('token')
      const response = await api.get(`/memories/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setMemories(response.data)
      setLoading(false)
    } catch (error) {
      console.error('Erro ao obter os dados da API:', error)
    }
  }
  useEffect(() => {
    loadMemory()
  }, [])

  return (
    <ScrollView
      className="flex-1"
      style={{ paddingBottom: bottom, paddingTop: top }}
    >
      <View className="mt-4 flex-row items-center justify-between px-8">
        <Logo />

        <View className="flex-row gap-2">
          <Link href="/" asChild>
            <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-purple-500">
              <Icon name="arrow-left" size={16} color="#000" />
            </TouchableOpacity>
          </Link>
        </View>
      </View>

      <View className="mt-6 space-y-10">
        {loading ? (
          <SplashScreen />
        ) : (
          <View key={memories.id} className="space-y-4">
            <View className="flex-row items-center gap-2">
              <View className="h-px w-5 bg-gray-50" />
              <Text className="font-body text-xs text-gray-100">
                {dayjs(memories.createdAt).format('D[ de ]MMMM[, ] YYYY')}
              </Text>
            </View>
            <View className="space-y-4 px-8">
              <Image
                source={{
                  uri: memories.coverUrl,
                }}
                className="aspect-video w-full rounded-lg"
                alt=""
              />
              <Text className="text-justify font-body text-base leading-relaxed text-gray-100">
                {memories.content}
              </Text>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  )
}
