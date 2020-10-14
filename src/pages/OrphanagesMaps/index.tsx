import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import MapMarkerImg from '../../assets/img/Map-marker.svg';

import 'leaflet/dist/leaflet.css';
import {
  Aside,
  H2,
  Header,
  Img,
  PageMap,
  P,
  Footer,
  Strong,
  CreateOrphanageLink,
} from './styles';

const OrphanagesMaps: React.FC = () => {
  return (
    <PageMap>
      <Aside>
        <Header>
          <Img src={MapMarkerImg} alt='' />
          <H2>Escolha um orfanato no mapa</H2>
          <P>Muitas crianças estão esperando a sua visita :)</P>
        </Header>
        <Footer>
          <Strong>Florianópolis</Strong>
          <span>Santa Catarina</span>
        </Footer>
      </Aside>
      <Map
        center={[-27.6013709, -48.5537863]}
        zoom={12}
        style={{ width: '100%', height: '100%' }}
      >
        {/* <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        /> */}
        <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      </Map>

      <CreateOrphanageLink to=''>
        <FiPlus size={35} color='#fff' />
      </CreateOrphanageLink>
    </PageMap>
  );
};

export default OrphanagesMaps;
