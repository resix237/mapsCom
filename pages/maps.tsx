import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import MapsYandex from '@/components/MapsYandex';
import Mapp from '../components/Mapp';

const positions = [
    {
        name: 'Position', coordinates: [3.850908, 11.511931], properties: {
            balloonContent: '<strong>crocodile\'s nose </strong> color'
        }
    },
    {
        name: 'Position 2', coordinates: [3.891000, 11.512411], properties: {
            balloonContent: '<strong>crocodile\'s nose </strong> color'
        }
    },
    {
        name: 'Position 3', coordinates: [3.871000, 11.512411], properties: {
            balloonContent: '<strong>crocodile\'s nose </strong> color'
        }
    },
];

function maps() {
    return (
        <div>
            <h1>Carte avec marqueurs</h1>

            <MapsYandex positions={positions} markerColor="blue" width={500} height={500} />
            {/* <Mapp /> */}
        </div>
    )
}

export default maps;
