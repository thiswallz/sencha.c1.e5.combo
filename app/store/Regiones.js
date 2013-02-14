Ext.define('Ejemplo5Combo.store.Regiones', {
    extend: 'Ext.data.Store',
    requires: [
    	'Ejemplo5Combo.model.Region'
    ],
	config:{
		storeId : 'mgrRegionId',
	    model: 'Ejemplo5Combo.model.Region',
        autoSync: true,
        autoLoad: true,
	    proxy:{
            type:'ajax',
            url: 'http://localhost/sencha/c1.core/services/buscaregiones.php',
            reader: {
                type:'json',
                rootProperty:'data'
            }
        }
	}
});