Ext.define('Ejemplo5Combo.model.Ciudad', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'id', type: 'auto'},
            {name: 'nombre', type: 'auto'},
            {name: 'id_region', type: 'auto'}    
        ]
    }
});