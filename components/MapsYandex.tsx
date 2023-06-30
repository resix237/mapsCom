import { useState } from 'react';
import { YMaps, Map, Placemark, GeolocationControl, ZoomControl, Clusterer } from '@pbe/react-yandex-maps';
interface Position {
    name: string;
    coordinates: number[];
    properties: {
        balloonContent?: string;
    };
}

function MapsYandex({ positions, markerColor, width, height }: any) {
    const [selectedPlacemark, setSelectedPlacemark] = useState<Position | null>(null);

    const handlePlacemarkClick = (placemark: any) => {
        setSelectedPlacemark(placemark);
    };
    const handleBalloonClose = () => {
        setSelectedPlacemark(null);
    };
    return (
        <YMaps query={{ lang: 'en_US' }} >
            <Map defaultState={{ center: positions[0]?.coordinates, zoom: 8 }} width={width} height={height}>

                {positions.map((position: Position, index: number) => (
                    <Placemark
                        key={index}
                        geometry={position.coordinates}
                        options={{ iconColor: markerColor, balloonContent: '<strong>crocodile\'s nose </strong> color' }}
                        properties={position.properties}
                        onClick={() => handlePlacemarkClick(position)}


                    />
                ))}

                <GeolocationControl options={{ float: "left" }} />
                <ZoomControl options={{ float: "right" }} />


                {selectedPlacemark && (
                    <div className="custom-popup custom-popup absolute bg-white p-4 rounded shadow">
                        <h4 className='text-lg font-bold mb-2'>{selectedPlacemark.name}</h4>
                        <p>{selectedPlacemark.properties?.balloonContent}</p>
                    </div>
                )}
            </Map>

        </YMaps>
    );
}

export default MapsYandex;
