import React from 'react';
import {View, Text, Button, Picker, Switch, TextInput, FlatList} from 'react-native';

const ListaRubro = () => {

    const[listaRubro, setListaRubo] = useState([]);

    useEffect(
        () => {
            const doGet = () => {
                fetch(/*ipservidor*/)
                .then(res => res.json())
                .then( lista => {
                    setListaRubro(lista);
                    setActualizar(false);
                });
            };
            if (actualizar){
                doGet();
            }
        }
    ,[actualizar]);
    return <View>
        <FlatList
            data = {listaRubro}
            renderItem = {item => <Text>item.descripcion</Text>}
            keyExtractor = {item => item.id}
        />
    </View>
}

export default ListaRubro