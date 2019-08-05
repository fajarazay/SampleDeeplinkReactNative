import React, { Component } from "react";
import { View, Text } from "react-native";

export default class DetailMovie extends Component<{}> {
    render() {
        const { idFilm } = this.props.navigation.state.params;

        return (
            <View>
                <Text>Halaman Detail {idFilm}</Text>
            </View>
        );
    }
}