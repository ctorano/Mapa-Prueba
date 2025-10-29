var wms_layers = [];

var lyr_Ortoimagen_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.ign.es/wms-inspire/pnoa-ma",
                              attributions: ' ',
                              params: {
                                "LAYERS": "OI.OrthoimageCoverage",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Ortoimagen',
                            popuplayertitle: 'Ortoimagen',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortoimagen_0, 0]);
var lyr_MapasrasterdelIGN_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.ign.es/wms-inspire/mapa-raster",
                              attributions: ' ',
                              params: {
                                "LAYERS": "mtn_rasterizado",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Mapas raster del IGN',
                            popuplayertitle: 'Mapas raster del IGN',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MapasrasterdelIGN_1, 0]);
var format_MunicipiodePiloa_2 = new ol.format.GeoJSON();
var features_MunicipiodePiloa_2 = format_MunicipiodePiloa_2.readFeatures(json_MunicipiodePiloa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipiodePiloa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipiodePiloa_2.addFeatures(features_MunicipiodePiloa_2);
var lyr_MunicipiodePiloa_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicipiodePiloa_2, 
                style: style_MunicipiodePiloa_2,
                popuplayertitle: 'Municipio de Piloña',
                interactive: true,
                title: '<img src="styles/legend/MunicipiodePiloa_2.png" /> Municipio de Piloña'
            });
var format_Itinerarios_3 = new ol.format.GeoJSON();
var features_Itinerarios_3 = format_Itinerarios_3.readFeatures(json_Itinerarios_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Itinerarios_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Itinerarios_3.addFeatures(features_Itinerarios_3);
var lyr_Itinerarios_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Itinerarios_3, 
                style: style_Itinerarios_3,
                popuplayertitle: 'Itinerarios',
                interactive: true,
    title: 'Itinerarios<br />\
    <img src="styles/legend/Itinerarios_3_0.png" /> GR 105 - Ruta de las Peregrinaciones<br />\
    <img src="styles/legend/Itinerarios_3_1.png" /> GR 108 - Travesía Andariega<br />\
    <img src="styles/legend/Itinerarios_3_2.png" /> GR 109 - Camino Natural de la Cordillera Cantábrica<br />' });
var format_reasrecreativas_4 = new ol.format.GeoJSON();
var features_reasrecreativas_4 = format_reasrecreativas_4.readFeatures(json_reasrecreativas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasrecreativas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasrecreativas_4.addFeatures(features_reasrecreativas_4);
var lyr_reasrecreativas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasrecreativas_4, 
                style: style_reasrecreativas_4,
                popuplayertitle: 'Áreas recreativas',
                interactive: true,
                title: '<img src="styles/legend/reasrecreativas_4.png" /> Áreas recreativas'
            });
var format_BienesdeIntersCultural_5 = new ol.format.GeoJSON();
var features_BienesdeIntersCultural_5 = format_BienesdeIntersCultural_5.readFeatures(json_BienesdeIntersCultural_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BienesdeIntersCultural_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BienesdeIntersCultural_5.addFeatures(features_BienesdeIntersCultural_5);
var lyr_BienesdeIntersCultural_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BienesdeIntersCultural_5, 
                style: style_BienesdeIntersCultural_5,
                popuplayertitle: 'Bienes de Interés Cultural',
                interactive: true,
                title: '<img src="styles/legend/BienesdeIntersCultural_5.png" /> Bienes de Interés Cultural'
            });
var format_Mirador_6 = new ol.format.GeoJSON();
var features_Mirador_6 = format_Mirador_6.readFeatures(json_Mirador_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mirador_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mirador_6.addFeatures(features_Mirador_6);
var lyr_Mirador_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mirador_6, 
                style: style_Mirador_6,
                popuplayertitle: 'Mirador',
                interactive: true,
                title: '<img src="styles/legend/Mirador_6.png" /> Mirador'
            });

lyr_Ortoimagen_0.setVisible(true);lyr_MapasrasterdelIGN_1.setVisible(true);lyr_MunicipiodePiloa_2.setVisible(true);lyr_Itinerarios_3.setVisible(true);lyr_reasrecreativas_4.setVisible(true);lyr_BienesdeIntersCultural_5.setVisible(true);lyr_Mirador_6.setVisible(true);
var layersList = [lyr_Ortoimagen_0,lyr_MapasrasterdelIGN_1,lyr_MunicipiodePiloa_2,lyr_Itinerarios_3,lyr_reasrecreativas_4,lyr_BienesdeIntersCultural_5,lyr_Mirador_6];
lyr_MunicipiodePiloa_2.set('fieldAliases', {'codigo_ine': 'codigo_ine', 'concejo': 'concejo', 'conceyu': 'conceyu', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_Itinerarios_3.set('fieldAliases', {'ID': 'ID', 'NOMBRE': 'NOMBRE', 'ETIQUETA': 'ETIQUETA', 'TIPO_0632': 'TIPO_0632', 'ID_ITINER': 'ID_ITINER', 'ID_TRAMO': 'ID_TRAMO', 'ID_BIC': 'ID_BIC', 'ID_BICCA': 'ID_BICCA', 'ID_NG': 'ID_NG', 'PRIORIDAD': 'PRIORIDAD', 'F_ALTA': 'F_ALTA', 'NEAR_FID': 'NEAR_FID', 'NEAR_DIST': 'NEAR_DIST', });
lyr_reasrecreativas_4.set('fieldAliases', {'tipo': 'tipo', 'name': 'name', 'ubicación': 'ubicación', 'concejo': 'concejo', 'mup': 'mup', 'n_mup': 'n_mup', 'figu_prote': 'figu_prote', 'mvmc': 'mvmc', 'ficha': 'ficha', 'parking': 'parking', 'acceso_bus': 'acceso_bus', 'acceso_car': 'acceso_car', 'barbacoas': 'barbacoas', 'mesas': 'mesas', 'agua': 'agua', 'paisaje_in': 'paisaje_in', 'trekking': 'trekking', 'bar': 'bar', 'parque_inf': 'parque_inf', 'piscina': 'piscina', 'esqui': 'esqui', 'zona_depor': 'zona_depor', 'futbol': 'futbol', 'titularida': 'titularida', 'Fuente': 'Fuente', 'id': 'id', });
lyr_BienesdeIntersCultural_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'codigo': 'codigo', 'nombre': 'nombre', 'bol_declar': 'bol_declar', 'bol_entorn': 'bol_entorn', 'x_utm_etrs': 'x_utm_etrs', 'y_utm_etrs': 'y_utm_etrs', 'longitud_w': 'longitud_w', 'latitud': 'latitud', 'ficha_bic': 'ficha_bic', 'concejo': 'concejo', 'localidad': 'localidad', });
lyr_Mirador_6.set('fieldAliases', {'codigo': 'codigo', 'nombre': 'nombre', 'poblacion': 'poblacion', 'lugar': 'lugar', 'parroquia': 'parroquia', 'concejo': 'concejo', 'acceso': 'acceso', 'paneles': 'paneles', 'descripcio': 'descripcio', 'web': 'web', 'foto1': 'foto1', 'foto2': 'foto2', 'pan_1': 'pan_1', 'pan_2': 'pan_2', 'bloque_3d': 'bloque_3d', 'visor_3d': 'visor_3d', 'viewshed': 'viewshed', });
lyr_MunicipiodePiloa_2.set('fieldImages', {'codigo_ine': 'TextEdit', 'concejo': 'TextEdit', 'conceyu': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_Itinerarios_3.set('fieldImages', {'ID': 'TextEdit', 'NOMBRE': 'TextEdit', 'ETIQUETA': 'TextEdit', 'TIPO_0632': 'TextEdit', 'ID_ITINER': 'TextEdit', 'ID_TRAMO': 'TextEdit', 'ID_BIC': 'TextEdit', 'ID_BICCA': 'TextEdit', 'ID_NG': 'TextEdit', 'PRIORIDAD': 'Range', 'F_ALTA': 'TextEdit', 'NEAR_FID': 'TextEdit', 'NEAR_DIST': 'TextEdit', });
lyr_reasrecreativas_4.set('fieldImages', {'tipo': 'TextEdit', 'name': 'TextEdit', 'ubicación': 'TextEdit', 'concejo': 'TextEdit', 'mup': 'TextEdit', 'n_mup': 'TextEdit', 'figu_prote': 'TextEdit', 'mvmc': 'TextEdit', 'ficha': 'TextEdit', 'parking': 'TextEdit', 'acceso_bus': 'TextEdit', 'acceso_car': 'TextEdit', 'barbacoas': 'TextEdit', 'mesas': 'TextEdit', 'agua': 'TextEdit', 'paisaje_in': 'TextEdit', 'trekking': 'TextEdit', 'bar': 'TextEdit', 'parque_inf': 'TextEdit', 'piscina': 'TextEdit', 'esqui': 'TextEdit', 'zona_depor': 'TextEdit', 'futbol': 'TextEdit', 'titularida': 'TextEdit', 'Fuente': 'TextEdit', 'id': 'Range', });
lyr_BienesdeIntersCultural_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'codigo': 'TextEdit', 'nombre': 'TextEdit', 'bol_declar': 'TextEdit', 'bol_entorn': 'TextEdit', 'x_utm_etrs': 'TextEdit', 'y_utm_etrs': 'TextEdit', 'longitud_w': 'TextEdit', 'latitud': 'TextEdit', 'ficha_bic': 'TextEdit', 'concejo': 'TextEdit', 'localidad': 'TextEdit', });
lyr_Mirador_6.set('fieldImages', {'codigo': 'TextEdit', 'nombre': 'TextEdit', 'poblacion': 'TextEdit', 'lugar': 'TextEdit', 'parroquia': 'TextEdit', 'concejo': 'TextEdit', 'acceso': 'TextEdit', 'paneles': 'TextEdit', 'descripcio': 'TextEdit', 'web': 'TextEdit', 'foto1': 'TextEdit', 'foto2': 'TextEdit', 'pan_1': 'TextEdit', 'pan_2': 'TextEdit', 'bloque_3d': 'TextEdit', 'visor_3d': 'TextEdit', 'viewshed': 'TextEdit', });
lyr_MunicipiodePiloa_2.set('fieldLabels', {'codigo_ine': 'no label', 'concejo': 'no label', 'conceyu': 'no label', 'shape_Leng': 'no label', 'shape_Area': 'no label', });
lyr_Itinerarios_3.set('fieldLabels', {'ID': 'no label', 'NOMBRE': 'no label', 'ETIQUETA': 'no label', 'TIPO_0632': 'no label', 'ID_ITINER': 'no label', 'ID_TRAMO': 'no label', 'ID_BIC': 'no label', 'ID_BICCA': 'no label', 'ID_NG': 'no label', 'PRIORIDAD': 'no label', 'F_ALTA': 'no label', 'NEAR_FID': 'no label', 'NEAR_DIST': 'no label', });
lyr_reasrecreativas_4.set('fieldLabels', {'tipo': 'no label', 'name': 'no label', 'ubicación': 'no label', 'concejo': 'no label', 'mup': 'no label', 'n_mup': 'no label', 'figu_prote': 'no label', 'mvmc': 'no label', 'ficha': 'no label', 'parking': 'no label', 'acceso_bus': 'no label', 'acceso_car': 'no label', 'barbacoas': 'no label', 'mesas': 'no label', 'agua': 'no label', 'paisaje_in': 'no label', 'trekking': 'no label', 'bar': 'no label', 'parque_inf': 'no label', 'piscina': 'no label', 'esqui': 'no label', 'zona_depor': 'no label', 'futbol': 'no label', 'titularida': 'no label', 'Fuente': 'no label', 'id': 'no label', });
lyr_BienesdeIntersCultural_5.set('fieldLabels', {'OBJECTID': 'no label', 'codigo': 'no label', 'nombre': 'no label', 'bol_declar': 'no label', 'bol_entorn': 'no label', 'x_utm_etrs': 'no label', 'y_utm_etrs': 'no label', 'longitud_w': 'no label', 'latitud': 'no label', 'ficha_bic': 'no label', 'concejo': 'no label', 'localidad': 'no label', });
lyr_Mirador_6.set('fieldLabels', {'codigo': 'no label', 'nombre': 'no label', 'poblacion': 'no label', 'lugar': 'no label', 'parroquia': 'no label', 'concejo': 'no label', 'acceso': 'no label', 'paneles': 'no label', 'descripcio': 'no label', 'web': 'no label', 'foto1': 'no label', 'foto2': 'no label', 'pan_1': 'no label', 'pan_2': 'no label', 'bloque_3d': 'no label', 'visor_3d': 'no label', 'viewshed': 'no label', });
lyr_Mirador_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});