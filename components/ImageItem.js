import React from 'react'
import {Image, Text, StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native'
import {connect} from 'react-redux'


class ImageItem extends React.Component {
    render() {
        return (
            <TouchableOpacity
                onPress={()=>console.warn('asd')} // item.image[1] get large image
                style={{flex: 1, flexDirection: 'column'}}>
                <Image onLoad={this.loading} style={styles.image}
                       source={{uri: this.props.url}}  // item.image[0] get large image
                />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        height: 200,
    }
});

export default connect(null)(ImageItem)