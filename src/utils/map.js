import 'leaflet/dist/leaflet.css'
import $L from 'leaflet'
import markerStyle from '../assets/marker-icon-2x-blue.png'

const createMap = (divId, options) => {
  const map = $L.map(divId, options)
  return map
}

const createTileLayer = async (map, url, options) => {
  const tileLayer = await $L.tileLayer(url, options)
  tileLayer.addTo(map)
  return tileLayer
}

const createPort = (map) => {
  $L.circle([21.94, 113.25], {
    color: 'red',
    fillOpacity: 0,
    radius: 9000
  }).addTo(map)
}

const createTerminal = (map) => {
  var greenIcon = new $L.Icon({
    iconUrl: markerStyle,
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  })
  const marker = $L.marker([21.90, 113.23], { icon: greenIcon })
  marker.on('click', e => {
    $L.popup()
      .setLatLng(e.latlng)
      .setContent('<p>Hello world!<br />This is a nice popup.</p>')
      .openOn(map)
  })
  marker.addTo(map)
}

const createParkingZone = (map) => {
  $L.polygon([
    [21.86, 113.21],
    [21.83, 113.15],
    [21.82, 113.25],
    [21.85, 113.25],
    [21.86, 113.22]
  ]).addTo(map)
}

const showLatlng = (map, e) => {
  $L.popup()
    .setLatLng(e.latlng)
    .setContent('You clicked the map at ' + e.latlng.toString())
    .openOn(map)
}

export default { createMap, createTileLayer, createPort, createTerminal, createParkingZone, showLatlng }
