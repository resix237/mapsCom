import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import MapsYandex from '@/components/MapsYandex';

const positions = [
    { name: 'Position', coordinates: [53.751244, 37.618423] },
    { name: 'Position 2', coordinates: [52.751456, 37.617822] },
    { name: 'Position 3', coordinates: [50.751687, 37.617331] },
];

function maps() {
    return (
        <div>
            <h1>Carte avec marqueurs</h1>
            <div>
                <MapsYandex positions={positions} markerColor="blue" />
            </div>
        </div>
    )
}

export default maps;
