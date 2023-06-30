import { useState } from 'react';
import { YMaps, Map, Placemark, GeolocationControl, ZoomControl } from '@pbe/react-yandex-maps';
interface Position {
    name: string;
    coordinates: number[];
    proprities: any
}

function MapsYandex({ positions, markerColor, width, height }: any) {
    return (
        <YMaps query={{ lang: 'en_US' }} >
            <Map defaultState={{ center: positions[0]?.coordinates, zoom: 8 }} width={width} height={height}>
                {positions.map((position: Position, index: number) => (
                    <Placemark
                        key={index}
                        geometry={position.coordinates}
                        options={{ iconColor: markerColor, balloonContent: '<strong>crocodile\'s nose </strong> color' }}
                        properties={{}}


                    />
                ))}
                <GeolocationControl options={{ float: "left" }} />
                <ZoomControl options={{ float: "right" }} />
            </Map>
        </YMaps>
    );
}

export default MapsYandex;
