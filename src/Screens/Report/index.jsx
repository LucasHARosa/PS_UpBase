import { Alert, Text, TouchableOpacity, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { styles } from "./styles";

import React, {useState} from "react";
export function Report() {
  const options = [{
    id: 1,
    text: 'O profissional não compareceu.'
  },
  {
    id: 2,
    text: 'O profissional não prestou um bom serviço.'    
  },
  { 
    id: 3,
    text: 'Outro:'
  }]


  const [selected, setSelected] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function toggleCheckbox(id){
    const newSelected = [...selected];
    if(newSelected.includes(id)){
      newSelected.splice((newSelected.indexOf(id)), 1);
      if(id === 3){
        setTitle('');
        setDescription('');
      }
    }else{
      newSelected.push(id);
    }
    setSelected(newSelected);
  }
  function handleReport(){
    setTitle('');
    setDescription('');
    setSelected([]);
  }
  function handleOnPress(){
    let message = '';
    selected.forEach((id) => {
      if(id !== 3){
        const option = options.find((option) => option.id === id);
        message += `${option.text}\n\n`;
      }
    });
    
    if(selected.includes(3)){
      message += `${title}: `;
      message += `${description}\n`;
    }
    
    Alert.alert("Reportando",message,[
      {
        text: "Confirmar",
        onPress: () => handleReport(),
      },
      {
        text: "Cancelar",
        style: "cancel",
      }
    ]);
  }
  return(
    <>
      
      <View style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity>
            <Icon name="arrowleft" size={30} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.titulo}>Reportar</Text>
          <Icon name="arrowleft" size={16} color="#006557" />
        </View>

        <View style={styles.containerForm}>
          <View style={styles.containerCheck}>
            {options.map((option, index) => (
              <View key={index} style={styles.checkboxInput}>
                <TouchableOpacity
                  style={styles.touchable}
                  onPress={() => toggleCheckbox(option.id)}
                >
                  {selected.includes(option.id) ? 
                    <Icon name="check" size={20} color="green" /> 
                    : 
                    null
                  }
                </TouchableOpacity>
                <Text style={styles.opText}>{option.text}</Text>
              </View>
            ))}
          </View>
          <View style={styles.containerInput}>
            <TextInput
              editable={selected.includes(3)} 
              style={styles.inputTitle}
              placeholder="Título"
              placeholderTextColor="#424F4D"
              onChangeText={(text) => setTitle(text)}
              value={title}
            />
            <TextInput
              editable={selected.includes(3)}
              style={styles.inputDescription}
              placeholder="Especifique aqui o que houve."
              placeholderTextColor="#424F4D"
              onChangeText={(text) => setDescription(text)}
              value={description}
            />
          </View>
          <TouchableOpacity 
            style={styles.button}
            disabled={selected.length === 0}
            onPress={handleOnPress}
          >
            <Text style={styles.buttonText}>Reportar</Text>
          </TouchableOpacity>
        </View>

      </View>
    </>
  )
}

