import { View, Text, StyleSheet, TextInput, Image, BackHandler, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityIndicator } from 'react-native-paper';
import { FlatList } from 'react-native-gesture-handler';
import filter from 'lodash.filter';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

const API_ENDPOINT = `https://randomuser.me/api/?results=30`;

const SearchbarPage = () => {

    const [isLoading, setIsLoading] = useState(false);

    const[searchText, setSearchText] = useState();

    const [data, setData] = useState([]);
    
    const [error, setError] = useState(null);

    const [fullData, setFullData] = useState([]);

    const [searchQuery, setSearchQuery] = useState("");

    const navigation = useNavigation();

    //clicking mobile back button mapapapunta sa homepage na search
    useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate('HomePage');
        return true;
      };

      const backHandler = BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => {
        backHandler.remove();
      };
    }, [navigation])
    );

    useEffect(() =>{
        setIsLoading(true);
        fetchData(API_ENDPOINT);
    }, []);

    const fetchData = async (url) =>{
        try{
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results);

            console.log(json.results);

            setFullData(json.results);
            setIsLoading(false);
        }
        catch(error){
            setError(error);
            console.log(error);
        }
    }
    
    const handleSearch = (query) => {
        setSearchQuery(query);
        const formattedQuery = query.toLowerCase();
        const filteredData = filter(fullData, (user) =>{
            return contains(user, formattedQuery);
        });
        setData(filteredData);
    };

    //try clear button
    const handleClearSearch = () =>{
        setSearchQuery('');
    };

    const contains = ({name, email}, query) =>{
        const {first, last} = name;

        if (
            first.includes(query) ||
            last.includes(query) ||
            email.includes(query)
        ){
            return true;
        }

        return false;
    }

    if(isLoading){
        return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size={"large"} color='violet' />
        </View>
        );
    }

    if(error){
        return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}> 
            <Text>Please Check Your Internet Connection...</Text>
        </View>
        );
    }
 
    return (
    <SafeAreaView style ={styles.backgroundcontainer}>
    
    <TextInput 
      placeholder="Search"
      clearButtonMode='always'
      autoCorrect={false}
      value={searchQuery}
      onChangeText={(query) => handleSearch(query)}
      style={styles.searchBox}/>

      {/*Clear Button */}
      {searchQuery !== '' &&(
        <TouchableOpacity 
        onPress={handleClearSearch} 
        style={{padding: 10, alignSelf: 'flex-end', marginTop: -45, marginRight: 80,}}>
            <MaterialCommunityIcons name='close-circle-outline' size={25} color="gray"/>
        </TouchableOpacity>
      )}

      {/*Search Button */}
      <TouchableOpacity 
        onPress={null} 
        style={{padding: 10, alignSelf: 'flex-end', marginTop: -47, marginRight: 35,}}>
            <MaterialCommunityIcons name='magnify' size={30} color="gray"/>
      </TouchableOpacity>

      <FlatList
      data={data}
      keyExtractor={(item) => item.login.username}
      renderItem={({item}) => (
        <View style={styles.itemContainer}>
            <Image 
            source={{uri: item.picture.thumbnail}}
            style ={styles.image} />
            <View>
                <Text style = {styles.textName}>{item.name.first}{item.name.last}</Text>
                <Text style = {styles.textEmail}>{item.email}</Text>
            </View>
        </View>
      )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    searchBox: {
        paddingHorizontal: 20, 
        paddingVertical: 10, 
        borderColor: 'white', 
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#C39BD3",
        height: 40,
        width: '80%',
        alignSelf: 'center',
    },
    itemContainer:{
        flexDirection: "row",
        alignItems: 'center',
        marginLeft: 35,
        marginTop: 10,
    },
    image:{
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    textName:{
        fontSize: 17,
        marginLeft: 10,
        fontWeight: "600",
    },
    textEmail:{
        fontSize: 14,
        marginLeft: 10,
        color: 'gray',
    },
    backgroundcontainer:{
        backgroundColor: "#D7BDE2", 
    },
});


export default SearchbarPage;