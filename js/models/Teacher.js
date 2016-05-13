var app = app || {};

(function (schoolSystem) {

    function Teacher(name, teacheingSubject) {
        schoolSystem.Human.call(this, name);
        this.setTeachingSubject(teacheingSubject);
    }

    Teacher.extends(schoolSystem.Human);

    Teacher.prototype.setTeachingSubject = function (teachingSubject) {
        if(teachingSubject == null || schoolSystem.Subject.isValidSubject(teachingSubject)) {
            this._teachingSubject = teachingSubject;
        } else {
            throw new ArgumentException('invalid teaching subject');
        }
    };
    Teacher.prototype.getTeachingSubject = function () {
        return this._teachingSubject;
    };
    Teacher.prototype.addGradeToStudent = function (student, gradeParams) {
        student.addGrade(new schoolSystem.Grade(gradeParams.mark, gradeParams.subject || this._teachingSubjext, gradeParams.semester));
    };

    schoolSystem.Teacher = Teacher;

}(app));