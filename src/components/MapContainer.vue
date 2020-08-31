<template>
  <l-map style="width: 100%; height: 800px;" :zoom="zoom" :center="center">
    <l-tile-layer :url="url"></l-tile-layer>
    <l-marker :lat-lng="marker">
      <l-popup :content="text"></l-popup>
    </l-marker>
    <l-circle
      :lat-lng="circle.center"
      :radius="circle.radius"
      :color="circle.color"
    />
    <l-polygon :lat-lngs="polygon.latlngs" @click="dialogVisible = true"></l-polygon>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible">
      <span>你点击了parking zone区域</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </l-map>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup, LCircle, LPolygon } from 'vue2-leaflet'

export default {
  name: 'mapView',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LCircle,
    LPolygon
  },
  data () {
    return {
      zoom: 12,
      center: [21.90, 113.25],
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      marker: [21.90, 113.23],
      text: 'this is a marker',
      circle: {
        center: [21.94, 113.25],
        radius: 9000,
        color: 'red'
      },
      polygon: {
        latlngs: [
          [21.86, 113.21],
          [21.83, 113.15],
          [21.82, 113.25],
          [21.85, 113.25],
          [21.86, 113.22]
        ]
      },
      dialogVisible: false
    }
  }
}
</script>

<style>
</style>
