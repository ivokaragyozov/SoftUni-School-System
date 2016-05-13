var app = app || {};

(function (schoolSystem) {

    function Student(name) {
        this._grades = [];
        schoolSystem.Human.call(this, name);
    }

    Student.extends(schoolSystem.Human);

    Student.prototype.addGrade = function (grade) {
        this._grades.push(grade);
    };
    Student.prototype.getGrades = function () {
        return this._grades;
    };

    schoolSystem.Student = Student;

}(app));