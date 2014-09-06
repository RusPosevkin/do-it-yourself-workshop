modules.define('form', ['i-bem__dom'], function(provide, BEMDOM) {
    
    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    this.bindTo('submit', function(e) {
                        this._onSubmit(e);
                    });
                    // подписаться на БЭМ-событие `submit`
                    // и вывести в консоль сообщение 'BEM-event'
                    this.on('submit', function() {
                        console.log('BEM-event');
                    });
                }
            }
        },

        _onSubmit: function(e) {
            // отменить дефолтное поведение 
            e.preventDefault();
            // сгенерировать БЭМ-событие `submit`
            this.emit('submit');
        },
        getVal: function() {
            return this.domElem.serialize();
        }
    }));
});

