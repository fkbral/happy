import React from 'react';
import { Link } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet';

import { FiPlus } from 'react-icons/fi';
import { Container } from './styles';

import mapMarkerImg from '../../assets/map-marker.svg';
import 'leaflet/dist/leaflet.css';

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
      </Map>

      <Link to="app">
        <FiPlus size={32} color="#fff" />
      </Link>
    </Container>
  );
};

export default OrphanagesMap;
