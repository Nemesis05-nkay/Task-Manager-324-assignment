import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, radius } from '../theme';

export default function Header() {
  return (
    <View style={styles.row}>
      <View>
        <Text style={styles.hello}>Hello!</Text>
        <Text style={styles.name}>Nana Kwame</Text>
      </View>
      <TouchableOpacity activeOpacity={0.8} style={styles.avatarWrap}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/200?img=12' }}
          style={styles.avatar}
        />
        <View style={styles.badge}>
          <Ionicons name="notifications" size={10} color="#fff" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  hello: { color: colors.muted, fontSize: 15, marginBottom: 4 },
  name: { color: colors.text, fontSize: 24, fontWeight: '700' },
  avatarWrap: { width: 48, height: 48 },
  avatar: { width: 48, height: 48, borderRadius: radius.pill, backgroundColor: colors.primarySoft },
  badge: {
    position: 'absolute', right: -2, top: -2, width: 18, height: 18,
    borderRadius: 9, backgroundColor: colors.primary, alignItems: 'center',
    justifyContent: 'center', borderWidth: 2, borderColor: colors.background,
  },
});