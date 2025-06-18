import React, { useState } from 'react';
import { View, Text, Modal, FlatList, Pressable, } from 'react-native';
import { shadow } from '../../theme';
import { styles } from './styles-dropdown';
const Dropdown = ({ label, listDisc = false, options, placeholder = 'Select an option...', onContinue, }) => {
    const [selectedValue, setSelectedValue] = useState(null);
    const [visible, setVisible] = useState(false);
    const handleSelect = (value) => {
        setSelectedValue(value);
        setVisible(false);
        onContinue?.(value);
    };
    return (<View style={styles.wrapper}>
      {label && <Text style={styles.label}>{label}</Text>}

      <Pressable style={[styles.dropdown, shadow.sm]} onPress={() => setVisible(true)}>
        <Text style={styles.dropdownText}>
          {selectedValue
            ? options.find((opt) => opt.value === selectedValue)?.label
            : placeholder}
        </Text>
      </Pressable>

      <Modal animationType="fade" transparent visible={visible} onRequestClose={() => setVisible(false)}>
        <Pressable style={styles.modalOverlay} onPress={() => setVisible(false)}>
          <View style={styles.modalContent}>
            <FlatList data={options} keyExtractor={(item) => item.value} renderItem={({ item }) => (<Pressable onPress={() => handleSelect(item.value)} style={styles.option}>
                  <Text style={styles.optionText}>
                    {listDisc ? `• ${item.label}` : item.label}
                  </Text>
                </Pressable>)}/>
          </View>
        </Pressable>
      </Modal>
    </View>);
};
export default Dropdown;
