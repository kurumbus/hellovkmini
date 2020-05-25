import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { Div } from '@vkontakte/vkui';
import "leaflet/dist/leaflet.css"


export default class SimpleExample extends Component<{}> {

    render() {
        const position = [this.props.lat, this.props.lng];
        return (
                <Map center={position} zoom={13} className="small-map">
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </Map>
        )
    }
}
