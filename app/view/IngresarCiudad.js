Ext.define('Ejemplo5Combo.view.IngresarCiudad', {
    extend: 'Ext.form.Panel',
    alias: "widget.ingresarciudad",    
    requires: [
        'Ext.TitleBar',
        'Ext.form.*',
        'Ext.field.*'
    ],
    config: {
        width: '100%',
        height: '100%',        
        items: [{
            xtype: 'fieldset',
            title: 'Nueva Ciudad',
            items: [{
                label : 'Nombre',
                xtype: 'textfield',
                required: true,
                name: 'nombre'                
            },{
                xtype: 'selectfield',
                label : 'Region',
                placeHolder: 'Region',
                store: 'mgrRegionId',
                valueField:'id',
                displayField:'codigo',
                name: 'region'
            }]
        },            
        {           
            xtype:'container',
            flex : 1,
            layout : {
                type : 'hbox',
                align: 'center'
            },
            items:[{
                xtype: 'button',
                action: 'ingresar',
                ui : 'confirm',
                text: 'Boton',
                width: '90%',
                margin: 7
            }]
        }]
    }
});