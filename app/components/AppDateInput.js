import { Pressable, StyleSheet, View } from "react-native";
import React, { useState } from "react";

import DateTimePicker from "@react-native-community/datetimepicker";

import AppTextInput from "./AppTextInput";

export default function AppDateInput({style, ...otherProps }) {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [enteredDate, setEnteredDate] = useState("");

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };
  const onChange = ({ type }, selectedDate) => {
    if (type === "set") {
      toggleDatePicker();
      const currentDate = selectedDate;
      setDate(currentDate);
      setEnteredDate(date.toDateString());
    } else {
      toggleDatePicker();
    }
  };
  return (
    <View>
      {showPicker && (
          <DateTimePicker
            mode="date"
            display="spinner"
            value={date}
            onChange={onChange}
          />
      )}
      {!showPicker && (
        <Pressable
          onPress={toggleDatePicker}
        >
          <AppTextInput
            iconName="calendar-month"
            value={enteredDate}
            onFocus={toggleDatePicker}
            style={style}
            {...otherProps}
          />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
