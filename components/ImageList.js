import React from 'react'
import {View, Button, Text, FlatList, Image} from 'react-native'
import {connect} from 'react-redux'
import {newPage, firstPage, getData, refreshOn, refreshOff} from "../actions";
import ImageItem from "./ImageItem";


class ImageList extends React.Component {
    componentDidMount(): void {
        this.fetchData()
    }

    fetchData = () => {
        this.props.getData(this.props.page)
    }

    refresh = () => {
        this.props.firstPage()
        this.fetchData()
    }
    loadMore = () => {
        this.props.newPage()
        this.fetchData()
    }

    render() {
        console.warn('imageList', this.props)

        return (

            <FlatList data={this.props.data}
                      renderItem={(item) => <ImageItem url={item.item.images[0].url}/>}
                      numColumns={2}
                      keyExtractor={(item, index) => index}
                      onEndReachedThreshold={0}
                      onEndReached={ this.loadMore}
                      refreshing={this.props.refreshing}
                      onRefresh={this.props.refreshOn}
            />
        );
    }

}


const mapStateToProps = (state) => {
    return {
        page: state.page,
        refreshing: state.refreshing,
        data: [...state.data]
    }
}

export default connect(mapStateToProps, {getData, newPage, firstPage, refreshOn, refreshOff})(ImageList);