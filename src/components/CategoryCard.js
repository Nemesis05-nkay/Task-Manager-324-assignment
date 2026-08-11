import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, radius } from '../theme';

export default function CategoryCard({ item }) {
  return (
    <TouchableOpacity activeOpacity={0.85} style={styles.card}>
      <View style={[styles.iconWrap, { backgroundColor: item.tint }]}>
        <Ionicons name={item.icon} size={24} color={item.iconColor} />
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.meta}>{item.tasks} tasks</Text>
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${Math.min(item.tasks * 8, 100)}%`, backgroundColor: item.iconColor }]} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 150, backgroundColor: colors.surface, borderRadius: radius.lg,
    padding: 16, marginRight: 14, borderWidth: 1, borderColor: colors.border,
  },
  iconWrap: { width: 46, height: 46, borderRadius: radius.md, alignItems: 'center', justifyContent: 'center' },
  title: { marginTop: 14, fontSize: 16, fontWeight: '700', color: colors.text },
  meta: { marginTop: 4, fontSize: 13, color: colors.muted },
  track: { marginTop: 14, height: 6, borderRadius: radius.pill, backgroundColor: colors.track, overflow: 'hidden' },
  fill: { height: 6, borderRadius: radius.pill },
});