Ext.define('Ejemplo5Combo.controller.Ciudades', {
    extend: 'Ext.app.Controller',
    //load stores
    config: {
        refs: {
            ingresarCiudad: 'ingresarciudad'        
        },
        control: {
            'button[action=ingresar]': {
                tap: 'ingresar'
            }
        }
    },
    launch: function() {
        //console.log(this);
    },
    ingresar: function(){
        var form = this.getIngresarCiudad(),
        field, name, isEmpty;
        //validacion basica
        var fields = form.getFields();
        for (name in fields) {
            field = fields[name];
            isEmpty = (!field.getValue() || field.getValue() == "");
            if (isEmpty) {
                Ext.Msg.alert('Error', "Ingrese todos los campos obligatorios");
                return;
            }                    
        }
        form.submit({
            url: 'http://localhost/sencha/c1.core/services/insertaciudad.php',
            method: 'POST',
            waitMsg: {
                xtype: "loadmask"
            },            
            success: function() {
                Ext.Msg.alert('Info', "Ingresado Correctamente");
            },
            failure: function(proxy, response) {
                var ob = response;
                Ext.Msg.alert('Alerta', ob.mensaje)
            }
        });

    }
});