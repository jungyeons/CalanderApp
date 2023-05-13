import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TextInput, TouchableOpacity } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [eventText, setEventText] = useState('');

  const handleDatePress = (day) => {
    setSelectedDate(day.dateString);
    setModalVisible(true);
  };

  const handleSaveEvent = () => {
    // 여기에 일정 저장 또는 처리하는 로직을 추가합니다.
    // 예를 들어, 서버에 일정을 전송하거나 상태를 업데이트할 수 있습니다.

    setEventText('');
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calendar App</Text>
      <CalendarList
        style={styles.calendar}
        onDayPress={handleDatePress}
        markedDates={selectedDate ? { [selectedDate]: { selected: true } } : {}}
      />
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Enter event details"
              value={eventText}
              onChangeText={(text) => setEventText(text)}
            />
            <TouchableOpacity style={styles.button} onPress={handleSaveEvent}>
              <Text style={styles.buttonText}>Save Event</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  calendar: {
    width: '90%',
    height: '80%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
