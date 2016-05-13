var app = app || {};

(function (schoolSystem) {

    function Semester(_name) {
        this.setName(_name);
    }

    Semester.prototype.setName = function (_name) {
        var pattern = /^[A-Za-z ]+$/g;

        if(pattern.test(_name)) {
            this._name = _name;
        } else {
            throw new ArgumentException('letters and spaces only');
        }
    };
    Semester.prototype.getName = function () {
        return this._name;
    };

    schoolSystem.Semester = Semester;

}(app));