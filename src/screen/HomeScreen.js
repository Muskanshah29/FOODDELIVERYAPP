import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const HomeScreen = ({navigation}) => {
    const data = [
        {
            id: '1',
            source: require('../asset/images/b1.png'),
            name: 'Cheeseburger ',
            type: 'Wendys Burger'

        },
        {
            id: '2',
            source: require('../asset/images/b2.png'),
            name: 'Hamburger',
            type: 'Veggie Burger'
        },
        {
            id: '3',
            source: require('../asset/images/b3.png'),
            name: 'Hamburger',
            type: 'Chicken Burger'
        },
        {
            id: '4',
            source: require('../asset/images/b4.png'),
            name: 'Hamburger',
            type: 'Fried Chicken Burger'
        },
        {
            id: '5',
            source: require('../asset/images/b1.png'),
            name: 'Cheeseburger ',
            type: 'Wendys Burger'

        },
        {
            id: '6',
            source: require('../asset/images/b2.png'),
            name: 'Hamburger',
            type: 'Veggie Burger'
        },

    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={()=>navigation.navigate('Details')}>
            <View style={styles.imageContainer}>
                <View style={styles.innerImageContainer}>
                    <Image source={item.source} style={styles.image} />
                </View>
                <View>
                    <Text style={{ color: 'black', marginLeft: 8, fontWeight: 'bold' }}>{item.name}</Text>
                    <Text style={{ marginLeft: 8, fontSize: 12 }}>{item.type}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    const ItemSeparator = () => (
        <View style={{ height: 20 }} />
    );

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Foodgo</Text>
                    <Text style={styles.subtitle}>Order your favourite food!</Text>
                </View>
                <View style={styles.searchContainer}>
                    <Icon name="search1" size={22} color="grey" style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search for food"
                        placeholderTextColor="grey"
                    />
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.menuContainer}>
                    {['All', 'Combos', 'Sliders', 'Classic'].map((item, index) => (
                        <View
                            key={index}
                            style={[
                                styles.menuItem,
                                item === 'All' && { backgroundColor: '#EF2A39' }
                            ]}
                        >
                            <Text
                                style={[
                                    styles.menuText,
                                    item === 'All' && { color: 'white' }
                                ]}
                            >
                                {item}
                            </Text>
                        </View>
                    ))}
                </ScrollView>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    columnWrapperStyle={styles.columnWrapper}
                    ItemSeparatorComponent={ItemSeparator}
                />
            </View>
        </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    header: {
        marginBottom: 20
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 25
    },
    subtitle: {
        color: 'grey',
        fontSize: 15,
        fontWeight: '500'
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 10
    },
    searchIcon: {
        marginRight: 10
    },
    searchInput: {
        flex: 1,
        color: 'black'
    },
    menuContainer: {
        marginTop: 25
    },
    menuItem: {
        backgroundColor: '#f0f0f0',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        marginRight: 10,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    menuText: {
        color: 'black',
        fontSize: 14
    },
    flatList: {
        marginTop: 20
    },
    columnWrapper: {
        justifyContent: 'space-between'
    },
    imageContainer: {
        backgroundColor: 'white',
        height: 200,
        width:150,
        flex: 1,
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    innerImageContainer: {
        //backgroundColor: 'pink',
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    image: {
        alignContent: 'center'
    }
});
