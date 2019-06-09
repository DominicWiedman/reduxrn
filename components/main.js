import React from 'react'
import {View, Text, StyleSheet, Platform} from 'react-native'
import {connect} from 'react-redux'
import { newPage, getData} from "../actions";
import ImageList from './ImageList'

class Main extends React.Component {
    render() {
        const {container} = styles;
        return (
            <View style={container}>
                <ImageList/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 40 : 0,
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    }
});
export default connect(null, null)(Main);