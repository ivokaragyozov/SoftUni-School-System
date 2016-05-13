var app = app || {};

(function (schoolSystem) {

    function Human(name) {
        this.setName(name);
    }

    Human.prototype.setName = function (name) {
        var pattern = /^[A-Za-z ]+$/g;

        if(pattern.test(name)) {
            this._name = name;
        } else {
            throw new ArgumentException('letters and spaces only');
        }
    };
    Human.prototype.getName = function () {
        return this._name;
    };


    schoolSystem.Human = Human;

}(app));