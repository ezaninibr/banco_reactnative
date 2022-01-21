import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Switch, ScrollView } from 'react-native';

import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      idade: '',
      limite: 0,
      sexo: "Masculino",
      estudante: false,
    };

  }

  render() {
    return (
      <View style={estilo.container}>
        <ScrollView>
          <Text style={estilo.titulo}>Banco React</Text>
          <Text style={estilo.subtitulo}>Dados de Cadastro</Text>
          <View style={estilo.celula}>
            <Text>Seu nome</Text>
            <TextInput
              style={estilo.caixaTexto}
              value={this.state.nome}
              onChangeText={(valorDigitado) => this.setState({ nome: valorDigitado })}
            />
          </View>
          <View style={estilo.celula}>
            <Text>Sua idade</Text>
            <TextInput
              style={estilo.caixaTexto}
              value={this.state.idade}
              onChangeText={(idadeDigitada) => this.setState({ idade: idadeDigitada })}
            />
          </View>
          <View style={estilo.celula}>
            <Text>Opção sexual</Text>
            <Picker
              selectedValue={this.state.sexo}
              onValueChange={(itemValue, itemIndex) => this.setState({ sexo: itemValue })}
            >
              <Picker.Item value="Masculino" label="Masculino" />
              <Picker.Item value="Feminino" label="Feminino" />
              <Picker.Item value="Outros" label="Outros" />
            </Picker>
          </View>
          <View style={estilo.celula}>
            <Text>Limite desejado</Text>
            <Slider
              minimumValue={0}
              maximumValue={2000}
              onValueChange={(limiteSelecionado) => this.setState({ limite: limiteSelecionado })}
              value={this.state.limite}
            />
            <Text>R$ {this.state.limite.toFixed(2)}</Text>
          </View>
          <View style={estilo.celula}>
            <Text>Você é estudante</Text>
            <Switch
              value={this.state.estudante}
              onValueChange={(opcao) => this.setState({ estudante: opcao })}
            />
          </View >
          <View style={estilo.celula}>
            <Button
              onPress={() => {
                if (this.state.nome == '' || this.state.idade == '' || this.state.limite == 0) {
                  alert("Preencha todos os dados!")
                } else {
                  alert("Nome: " + this.state.nome + "\n" +
                    "Idade: " + this.state.idade + "\n" +
                    "Sexo: " + this.state.sexo + "\n" +
                    "Limite: R$ " + this.state.limite.toFixed(2) + "\n" +
                    "Estudante: " + this.state.estudante
                  )
                }
              }}
              title="Abrir conta" />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  celula: {
    padding: 10,
    marginTop: 5,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 35,
    color: '#0099FF',
    fontWeight: 'bold'
  },
  subtitulo: {
    textAlign: 'center',
    fontSize: 20,
    color: '#555',
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  caixaTexto: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    margin: 5,
    borderColor: "#ccc",
    color: "#0099FF",
  }
});

export default App;