import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, radius } from '../theme';

export default function SearchBar() {
  return (
    <View style={styles.row}>
      <View style={styles.field}>
        <Ionicons name="search-outline" size={20} color={colors.muted} />
        <TextInput
          placeholder="Search task"
          placeholderTextColor={colors.muted}
          style={styles.input}
        />
      </View>
      <TouchableOpacity activeOpacity={0.85} style={styles.filter}>
        <Ionicons name="options-outline" size={22} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  field: {
    flex: 1, flexDirection: 'row', alignItems: 'center', gap: 10,
    backgroundColor: colors.surface, borderRadius: radius.md,
    paddingHorizontal: 16, height: 52, borderWidth: 1, borderColor: colors.border,
  },
  input: { flex: 1, fontSize: 15, color: colors.text, padding: 0 },
  filter: {
    width: 52, height: 52, borderRadius: radius.md, backgroundColor: colors.primary,
    alignItems: 'center', justifyContent: 'center',
  },
});