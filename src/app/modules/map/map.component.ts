import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';
import {Circle as CircleStyle, Fill, Style} from 'ol/style';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import {Draw, Modify, Snap} from 'ol/interaction';
     
@Component({
    selector: 'map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit { 
    name= '';

    map: Map;

    source = new VectorSource();

    style = new Style({
        image: new CircleStyle({
            radius: 7,
            fill: new Fill({
                color: '#ffcc33',
            }),
        }),
    });

    modify = new Modify({
        source: this.source,
        style: this.style
    });

    draw = new Draw({
        source: this.source,
        type: 'Point',
    });

    snap = new Snap({source: this.source});

    ngOnInit(): void {
        this.map = new Map({
        view: new View({
            center: [0, 0],
            zoom: 1,
        }),
        layers: [
            new TileLayer({
                source: new OSM(),
            }),
            new VectorLayer({
                source: this.source,
                style: this.style
            })
        ],
        target: 'ol-map'
        });
    } 

    addInteractions(): void {
        this.map.addInteraction(this.modify);
        this.map.addInteraction(this.draw);
        this.map.addInteraction(this.snap);
    }
}