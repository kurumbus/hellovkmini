// gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max

import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { Div } from '@vkontakte/vkui';
import "leaflet/dist/leaflet.css"
import request from "superagent";


export default class SimpleExample extends Component<{}> {



    render() {
        const apiUrl = 'https://en.wikipedia.org/w/api.php';

        const params = {
            format: 'json',
            action: 'query',
            generator: 'search',
            gsrnamespace: '0',
            gsrsearch: 'test',
            gsrlimit: '2',
            prop: 'pageimages|extracts',
            pilimit: 'max',
            exintro: true,
            explaintext: true,
            exsentences: 1,
            exlimit: 'max',
            titles: 'Karl Marx'
        };

        const req = request.get(apiUrl, params);
        req.then(res => {
            console.log(res);
        });

        return (
            <Div>

            </Div>
        )
    }
}

