import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
interface Position {
    name: string;
    coordinates: number[];
}

function MapsYandex({ positions, markerColor }: any) {
    return (
        <YMaps query={{ lang: 'en_US' }}>
            <Map defaultState={{ center: positions[0]?.coordinates, zoom: 8 }}>
                {positions.map((position: Position, index: number) => (
                    <Placemark
                        key={index}
                        geometry={position.coordinates}
                        options={{ iconColor: markerColor }}
                        properties={{ iconContent: position.name }}
                    />
                ))}
            </Map>
        </YMaps>
    );
}

export default MapsYandex;
