// BookingPage.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';

const BookingPage = ({ navigation }) => {
  const [events, setEvents] = useState([
    {
      id: 'event1',
      title: 'Event 1',
      details: 'DATE: DD/MM/YYYY\nTIME: 00:00:00\nCONTENT: Event 1 details...',
      booked: false,
    },
    {
      id: 'event2',
      title: 'Event 2',
      details: 'DATE: DD/MM/YYYY\nTIME: 00:00:00\nCONTENT: Event 2 details...',
      booked: false,
    },
    {
      id: 'event3',
      title: 'Event 3',
      details: 'DATE: DD/MM/YYYY\nTIME: 00:00:00\nCONTENT: Event 3 details...',
      booked: false,
    },
    // Add more events as needed
  ]);

  const handleBooking = (eventId) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === eventId ? { ...event, booked: !event.booked } : event
      )
    );
    navigation.navigate('Confirmation');
  };

  const renderEventItem = ({ item }) => (
    <View style={styles.eventDetailsContainer}>
      <Image
        source={require('/home/intern/Desktop/nnn/MyReactNativeApp/assets/events-icon.png')}
      />
      <Text>{item.details}</Text>
      <TouchableOpacity style={styles.button} onPress={() => handleBooking(item.id)}>
        <Text style={styles.buttonText}>
          {item.booked ? `Cancel Booking for ${item.title}` : `Book ${item.title}`}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={events}
      keyExtractor={(item) => item.id}
      renderItem={renderEventItem}
      contentContainerStyle={styles.container}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'pink',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  eventDetailsContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'lightpink', // Change the background color
    borderRadius: 12, // Add border radius
    borderWidth: 1, // Add a border
    borderColor: 'grey', // Border color
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
});

export default BookingPage;
