//############################################################################
//
//   OpenERP, Open Source Management Solution
//   This module copyright
//     (c) 2017 Giuseppe Stoduto <gstoduto@gmail.com>
//
//   This program is free software: you can redistribute it and/or modify
//   it under the terms of the GNU Affero General Public License as
//   published by the Free Software Foundation, either version 3 of the
//   License, or (at your option) any later version.
//
//   This program is distributed in the hope that it will be useful,
//   but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//   GNU Affero General Public License for more details.
//
//   You should have received a copy of the GNU Affero General Public License
//   along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
//############################################################################
// "use strict";
openerp.molino_withholding = function(instance, local) {
    var _t = instance.web._t,
        _lt = instance.web._lt;
    var QWeb = instance.web.qweb;

    instance.web.form.FieldOne2Many.include({

        start: function() {

            // this._super.apply(this, arguments);

            var self = this;

            var destroy = function() {
                self.is_loaded = self.is_loaded.then(function() {
                    self.viewmanager.destroy();
                    return $.when(self.load_views()).done(function() {
                        self.reload_current_view();
                    });
                });
            };

            this.is_loaded.done(function() {
                if (typeof self.field.views.tree !== 'undefined') {
                    _fields = self.field.views.tree.arch.children;
                    // Cerca se esiste il widget hide_column
                    _.each(_fields, function(el) {
                        if (el.attrs.widget == 'hide_column') {
                            var _checkbox = $(":checkbox[name='" + el.attrs.check_field + "']");
                            // Soluzione valida ma non mostra la colonna se il campo viene modificato
                            // da un evento esterno.
                            // _checkbox.on("change", self, destroy);
                            //
                            // Molto meglio del metodo sopra indicato.
                            self.field_manager.on("field_changed:" + _checkbox[0].name, self, destroy);
                        }
                    });
                }
            });
            // return this._super(this, arguments);
            // non da problemi anche così.
            return this._super();
        },
    });


    instance.web.ListView.include({

        setup_columns: function (fields, grouped) {

            var registry = instance.web.list.columns;
            this.columns.splice(0, this.columns.length);
            this.columns.push.apply(this.columns,
                _(this.fields_view.arch.children).map(function (field) {
                    var id = field.attrs.name;
                    return registry.for_(id, fields[id], field);
            }));
            if (grouped) {
                this.columns.unshift(
                    new instance.web.list.MetaColumn('_group', _t("Group")));
            }

            this.visible_columns = this.effective_column(this.columns);
            this.aggregate_columns = _(this.visible_columns).invoke('to_aggregate');
        },

        effective_column: function(columns)
        {
           result = _.filter(columns, function (column) {
                    if (column.widget == 'hide_column' && column.check_field !== '') {
                        var $checkbox = $(":checkbox[name='" + column.check_field + "']");
                        if ($checkbox.prop('checked')){
                            column.invisible = '0';
                            column.modifiers.invisible = false;
                            return true;
                        } else{
                            column.invisible = '1';
                            column.modifiers.invisible = true;
                            return false;
                        }
                    } else {
                        return column.invisible !== '1';
                    }
                });
           return result;
        },
    });
};
