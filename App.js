import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Header from './src/components/Header';
import SearchBar from './src/components/SearchBar';
import SectionHeader from './src/components/SectionHeader';
import CategoryCard from './src/components/CategoryCard';
import TaskCard from './src/components/TaskCard';
import { categories } from './src/data/categories';
import { tasks } from './src/data/tasks';
import { colors } from './src/theme';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safe} edges={['top']}>
        <StatusBar style="dark" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          <Header />

          <View style={{ height: 22 }} />
          <SearchBar />

          <View style={{ height: 28 }} />
          <SectionHeader title="Categories" />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.catRow}
            contentContainerStyle={{ paddingRight: 10 }}
          >
            {categories.map((c) => (
              <CategoryCard key={c.id} item={c} />
            ))}
          </ScrollView>

          <View style={{ height: 26 }} />
          <SectionHeader title="Ongoing Task" />
          <View style={{ height: 14 }} />
          {tasks.map((t) => (
            <TaskCard key={t.id} item={t} />
          ))}

          <Text style={styles.footer}>{tasks.length} ongoing tasks</Text>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: 20, paddingTop: 8, paddingBottom: 40 },
  catRow: { marginTop: 16, marginHorizontal: -20, paddingHorizontal: 20 },
  footer: { textAlign: 'center', color: colors.muted, fontSize: 12, marginTop: 6 },
});