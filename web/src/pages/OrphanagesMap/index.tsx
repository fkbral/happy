import React from 'react';
import { Link } from 'react-router-dom';
import { Map, Marker, TileLayer, Popup } from 'react-leaflet';

import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Container } from './styles';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../../assets/map-marker.svg';
import mapIcon from '../../utils/mapIcon';

const OrphanagesMap: React.FC = () => {
  const latitude = Number(process.env.REACT_APP_MAP_LATITUDE) || -23.5878431;
  const longitude = Number(process.env.REACT_APP_MAP_LONGITUDE) || -46.6585225;

  return (
    <Container>
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Ícone do Mapa" />

          <h1>Escolha um orfanato no mapa</h1>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>São Paulo</strong>
          <p>São Paulo</p>
        </footer>
      </aside>

      <Map
        center={[latitude, longitude]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker icon={mapIcon} position={[latitude, longitude]}>
          <Popup
            closeButton={false}
            minWidth={240}
            maxWidth={240}
            className="map-popup"
          >
            Lar das meninas
            <Link to="/orphanages/1">
              <FiArrowRight size={20} color="#fff" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="/orphanages/create">
        <FiPlus size={32} color="#fff" />
      </Link>
    </Container>
  );
};

export default OrphanagesMap;
