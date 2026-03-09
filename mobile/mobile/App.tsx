import React, { useEffect, useState } from 'react';
import { PowerSyncContext } from '@powersync/react-native';
import { db } from './src/database/db';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { logWithCaller, errorWithCaller } from './src/utils/utils';

export default function App() {
  const [isDbInitialized, setIsDbInitialized] = useState(false);

  useEffect(() => {
    const initDb = async () => {
      try {
        await db.init();
        setIsDbInitialized(true);
        logWithCaller("PowerSync DB Ready");
      } catch (error) {
        errorWithCaller("Error initializing PowerSync DB: ", error)
      }
    };

    initDb();
  }, []);

  if (!isDbInitialized) {
    return (
      <PowerSyncContext.Provider value={db}> {/* PowerSyncContext.Provider makes db available to all children */}
        {/* Future screens */} 
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>DB active and running</Text>
        </View>
      </PowerSyncContext.Provider>
    )
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
