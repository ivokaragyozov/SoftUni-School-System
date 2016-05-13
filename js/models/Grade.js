var app = app || {};

(function (schoolSystem) {

    function Grade(mark, subject, semester) {
        this.setMark(mark);
        this.setSubject(subject);
        this.setSemester(semester);
    }

    Grade.prototype.setMark = function (mark) {
        if(isNaN(mark)) {
            throw new ArgumentException('not a num');
        } else {
            this._mark = mark;
        }
    };
    Grade.prototype.getMark = function () {
        return this._mark;
    };
    Grade.prototype.setSubject = function (subject) {
        if(subject && schoolSystem.Subject.isValidSubject(subject)) {
            this._subject = subject;
        } else {
            this._subject = this._teachingSubject;
        }
    };
    Grade.prototype.getSubject = function () {
        return this._subject;
    };
    Grade.prototype.setSemester = function (semester) {
        if(semester instanceof schoolSystem.Semester) {
            this._semester = semester;
        } else {
            throw new ArgumentException('invalid semester');
        }
    };
    Grade.prototype.getSemester = function () {
        return this._semester;
    };

    schoolSystem.Grade = Grade;

}(app));