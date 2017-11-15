[![Build Status](https://travis-ci.org/Odoo-Italia-Associazione/user_contributes.svg?branch=8.0)](https://travis-ci.org/Odoo-Italia-Associazione/user_contributes)
[![license agpl](https://img.shields.io/badge/licence-AGPL--3-blue.svg)](http://www.gnu.org/licenses/agpl-3.0.html)
[![Coverage Status](https://coveralls.io/repos/github/Odoo-Italia-Associazione/user_contributes/badge.svg?branch=8.0)](https://coveralls.io/github/Odoo-Italia-Associazione/user_contributes?branch=8.0)
[![codecov](https://codecov.io/gh/Odoo-Italia-Associazione/user_contributes/branch/8.0/graph/badge.svg)](https://codecov.io/gh/Odoo-Italia-Associazione/user_contributes/branch/8.0)
[![OCA_project](http://www.zeroincombenze.it/wp-content/uploads/ci-ct/prd/button-oca-8.svg)](https://github.com/OCA/user_contributes/tree/8.0)
[![Tech Doc](http://www.zeroincombenze.it/wp-content/uploads/ci-ct/prd/button-docs-8.svg)](http://wiki.zeroincombenze.org/en/Odoo/8.0/dev)
[![Help](http://www.zeroincombenze.it/wp-content/uploads/ci-ct/prd/button-help-8.svg)](http://wiki.zeroincombenze.org/en/Odoo/8.0/man/)

[![en](http://www.shs-av.com/wp-content/en_US.png)](http://wiki.zeroincombenze.org/it/Odoo/7.0/man)

Hide/Show Columns
=================

Shows or hides columns in a list_views

[![it](https://github.com/zeroincombenze/grymb/blob/master/flags/it_IT.png)](https://www.facebook.com/groups/openerp.italia/)

Installation
------------

These instruction are just an example to remember what you have to do:

    git clone https://github.com/Odoo-Italia-Associazione/user_contributes.git
    for module in web_hide_column; do
        mv ODOO_DIR/user_contributes/$module BACKUP_DIR/
        cp -R user_contributes/$module ODOO_DIR/user_contributes/
    sudo service odoo-server restart -i user_contributes -d MYDB

From UI: go to Setup > Module > Install

Configuration
-------------

N/A

Usage
=====

:it:

In una Tree views si può assegnare il widget in questo modo:
```javascript
<field name="withholding_tax_exclude" widget="hide_column" check_field="test_withholding_tax"/>
```
dove:

- hide_column - è il nome di questo widget
- check_field - è il checkbox di controllo per mostrare(true) o nascondere(false) la colonna in oggetto. In questo caso withholding_tax_exclude


Known issues / Roadmap
----------------------

N/A


Bug Tracker
-----------

Have a bug? Please visit https://odoo-italia.org/index.php/kunena/home


Credits
-------

### Contributors

* Giuseppe Stoduto <https://github.com/SGiuseppe>

### Funders

N/A

### Maintainer

[![Odoo Italia Associazione](https://www.odoo-italia.org/images/Immagini/Odoo%20Italia%20-%20126x56.png)](https://odoo-italia.org)

Odoo Italia is a nonprofit organization whose develops Italian Localization for
Odoo.

To contribute to this module, please visit <https://odoo-italia.org/>.


[//]: # (copyright)

----

**Odoo** is a trademark of [Odoo S.A.](https://www.odoo.com/) (formerly OpenERP, formerly TinyERP)

**OCA**, or the [Odoo Community Association](http://odoo-community.org/), is a nonprofit organization whose
mission is to support the collaborative development of Odoo features and
promote its widespread use.

**Odoo Italia Associazione**, or the [Associazione Odoo Italia](https://www.odoo-italia.org/)
is the nonprofit Italian Community Association whose mission
is to support the collaborative development of Odoo designed for Italian law and markeplace.
Since 2017, Odoo Italia Associazione replaces OCA members of Italy are developping code under Odoo Proprietary License.
Odoo Italia Associazione distributes only code under AGPL free license.

[Odoo Italia Associazione](https://www.odoo-italia.org/) è un'Associazione senza fine di lucro
che dal 2017 sostituisce gli sviluppatori italiani di OCA che sviluppano
con Odoo Proprietary License a pagamento.

Odoo Italia Associazione distribuisce il codice esclusivamente con licenza [AGPL](http://www.gnu.org/licenses/agpl-3.0.html)

[//]: # (end copyright)
[//]: # (addons)

[//]: # (end addons)
