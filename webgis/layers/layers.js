var wms_layers = [];

        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'GoogleRoad_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>'})],
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });var format_Peta_1 = new ol.format.GeoJSON();
var features_Peta_1 = format_Peta_1.readFeatures(json_Peta_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Peta_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Peta_1.addFeatures(features_Peta_1);var lyr_Peta_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Peta_1, 
                style: style_Peta_1,
    title: 'Peta<br />\
    <img src="styles/legend/Peta_1_0.png" /> 1294<br />\
    <img src="styles/legend/Peta_1_1.png" /> 1410<br />\
    <img src="styles/legend/Peta_1_2.png" /> 3552<br />\
    <img src="styles/legend/Peta_1_3.png" /> 4620<br />\
    <img src="styles/legend/Peta_1_4.png" /> 5377<br />\
    <img src="styles/legend/Peta_1_5.png" /> 5463<br />\
    <img src="styles/legend/Peta_1_6.png" /> 6946<br />\
    <img src="styles/legend/Peta_1_7.png" /> 6968<br />\
    <img src="styles/legend/Peta_1_8.png" /> 7874<br />\
    <img src="styles/legend/Peta_1_9.png" /> 8218<br />\
    <img src="styles/legend/Peta_1_10.png" /> 9200<br />\
    <img src="styles/legend/Peta_1_11.png" /> 9505<br />\
    <img src="styles/legend/Peta_1_12.png" /> 10080<br />\
    <img src="styles/legend/Peta_1_13.png" /> 15387<br />\
    <img src="styles/legend/Peta_1_14.png" /> 16513<br />\
    <img src="styles/legend/Peta_1_15.png" /> 16746<br />\
    <img src="styles/legend/Peta_1_16.png" /> 34020<br />\
    <img src="styles/legend/Peta_1_17.png" /> 47970<br />\
    <img src="styles/legend/Peta_1_18.png" /> 76521<br />\
    <img src="styles/legend/Peta_1_19.png" /> <br />'
        });

lyr_GoogleRoad_0.setVisible(true);lyr_Peta_1.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Peta_1];
lyr_Peta_1.set('fieldAliases', {'Lokasi': 'Lokasi', 'Mangga': 'Mangga', 'Pepaya': 'Pepaya', 'Pisang': 'Pisang', 'Durian': 'Durian', 'Jeruk': 'Jeruk', 'Total Hekt': 'Total Hekt', });
lyr_Peta_1.set('fieldImages', {'Lokasi': 'TextEdit', 'Mangga': 'TextEdit', 'Pepaya': 'TextEdit', 'Pisang': 'TextEdit', 'Durian': 'TextEdit', 'Jeruk': 'TextEdit', 'Total Hekt': 'TextEdit', });
lyr_Peta_1.set('fieldLabels', {'Lokasi': 'inline label', 'Mangga': 'inline label', 'Pepaya': 'inline label', 'Pisang': 'inline label', 'Durian': 'inline label', 'Jeruk': 'inline label', 'Total Hekt': 'inline label', });
lyr_Peta_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});