var app = app || {};

(function (schoolSystem) {
    var gradeService = new schoolSystem.GradeService;
    var studentSelector = $("#student-selector");

    schoolSystem.students.forEach(function (student) {
        var studentOption = document.createElement('option');
        studentOption.setAttribute('value', student.getName());
        studentOption.value = student.getName();
        studentOption.innerText = student.getName();
        studentSelector.append(studentOption);
    });

    studentSelector.change(function () {
        var value = $(this).val();
        if (value != "null") {
            loadGradesForStudent($(this).val());
        }
    });

    function loadGradesForStudent(studentName) {
        function findStudentByName(student) {
            return student.getName() == studentName;
        }

        var student = schoolSystem.students.find(findStudentByName);
        var grades = gradeService.getGrades(student);
        console.log(grades);
        $.get("templates/list-grades.html", function (template) {
            $("#grades").html(Mustache.render(template, {Grades: grades}))
        })
    }
}(app));