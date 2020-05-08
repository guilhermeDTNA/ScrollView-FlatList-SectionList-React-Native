import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, SectionList } from 'react-native';

export default class PrimeiroProjeto extends Component {

  constructor(props){
    super(props);
    this.state={
      flatData:[
        {key:"1", nome:'Guilherme', idade:21, type:'foto'},
        {key:"2", nome:'Teste1', idade:25, type:'text'},
        {key:"3", nome:'Teste2', idade:60, type:'video'},
        {key:"4", nome:'Teste3', idade:19, type:'music'}
      ],
      //Cada seção possui um título e os dados
      listData:[
        {title:'B', data:[
          {key:"1", nome:'Guilherme', idade:21}
        ]},
        {title:'C', data:[
          {key:"2", nome:'Teste', idade:60},
          {key:"3", nome:'Teste1', idade:34},
          {key:"4", nome:'Teste2', idade:100},
        ]},
        {title:'D', data:[
          {key:"5", nome:'Teste3', idade:78},
          {key:"6", nome:'Teste4', idade:14}
        ]},
      ]
    };

  }

  flatRender(item){
    return (
      <View style={styles.flatItem}>
        <Text style={styles.flatNome}>{item.nome}</Text>
        <Text style={styles.flatIdade}>{item.idade} anos</Text>
      </View>
      
    );
  };

  listSectionRender(section){
    return(
      <Text style={styles.section}>Letra {section.title}</Text>
    )
  };

  listRender(item){
    return(
      <Text style={styles.item}>{item.nome} - {item.idade} anos </Text>
    );
  }

  render() {

    //O ScrowView carrega todos os elementos da tela de uma vez na memória
    //FlatList carrega na memória a medida que aparece na tela
    //SectionList é igual ao FlatList, porém é dividido em seções

    return(

      <View style={styles.body}>
      
        <View style={styles.espaco}>
        <Text></Text>
        <Text style={{textAlign:'left'}}>ScrollView:</Text>
        </View>
       
        <ScrollView style={styles.scroll} pagingEnabled={true} >
          <View style={styles.quadrado1}></View>
          <View style={styles.quadrado2}></View>
          <View style={styles.quadrado1}></View>
          <View style={styles.quadrado2}></View>
          <View style={styles.quadrado1}></View>
          <View style={styles.quadrado2}></View>
          <View style={styles.quadrado1}></View>
          <View style={styles.quadrado2}></View>
        </ScrollView>
        
        <View style={styles.espaco}>
        <Text></Text>
        <Text style={{textAlign:'left'}}>FlatList:</Text>
        </View>

        <FlatList style={styles.flatList} data={this.state.flatData} renderItem={({item}) => this.flatRender(item)} />

        <View style={styles.espaco}>
        <Text></Text>
        <Text style={{textAlign:'left'}}>SectionList:</Text>
        </View>

        <SectionList style={styles.SectionList} sections={this.state.listData} renderItem={({item})=>this.listRender(item)} renderSectionHeader={({section})=>this.listSectionRender(section)} />

    </View>

    );

    
  }
}

const styles = StyleSheet.create({
  body:{
    paddingTop:20,
    flex:1
  },

  scroll:{
    flex:1
  },

  quadrado1:{
    backgroundColor:'#FF0000',
    height:200
  },

  quadrado2:{
    backgroundColor:'#00FF00',
    height:300
  },

  header:{
    backgroundColor:'#0000FF',
    height:100
  },
  
  footer:{
    backgroundColor:'#0000FF',
    height:50
  },
  flatNome:{
    fontSize:18,
  },
  flatList:{
    //backgroundColor:'#FF0000',
    height:200,
    flex:1
  },
  flatIdade:{
    fontSize:14
  },

  flatItem:{
    padding:10,
    borderWidth:1,
    borderColor:'black'
  },

  espaco:{
    backgroundColor:'white',
    width:200,
    height:40
  },

  item:{
    fontSize: 18,
    height:40,
    padding:10
  },

  section:{
    backgroundColor:'#CCCCCC',
    fontSize:14,
    padding:10
  },

  SectionList:{
    //backgroundColor:'#FF0000',
    height:200,
    flex:1
  },

});
