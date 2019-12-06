import React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, Button, Picker, Switch, TextInput} from 'react-native';

const rubroDefault = {
    id:null,
    descripcion:'',
    orden:-1,
    destacar:false,
};

const Rubro = () => {

    const [flag, setFlag] = useState(false);
    const [rubro, setRubro] = useState(rubroDefault);
    const [guardar, setGuardar] = useState(false);

    useEffect(() => {
        const doPost = () => {

        };

        if(guardar){
            //llamar a algo que guarde
            doPost;
        }
    }
    , [guardar]);
    
    const actualizarEstado = (nombre, valor) => {
        const rubroNuevo = {...rubro, [nombre]:valor};
        setRubro(rubroNuevo);
    }

    const doGuardar = () => {
        setGuardar(true);
    }


    return (
        <View >
            <Text>Rubro</Text>
            <Text>Nombre</Text>
            <TextInput value={rubro.descripcion}
            onChangeText={val => actualizarEstado ('descripcion', val)}/>
            <Text>Orden en el catalogo</Text>
        <Picker selectedValue = {rubro.orden}
        onValueChange = {val => actualizarEstado ('orden', val)}>
            <Picker.Item label="#1" value="1" />
            <Picker.Item label="#2" value="2" />
        </Picker>
        <Text>Destacar</Text>
        <Switch 
            value = {flag}
            onValueChange = {val => actualizarEstado ('destacar', val)}
        />
        
        <Button title="Guardar"
               onPress = {doGuardar}
           />
        
        </View>

    )
}

export default Rubro;