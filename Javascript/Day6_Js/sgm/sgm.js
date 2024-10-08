document.addEventListener("DOMContentLoaded", () => {
    const formArray = []; 

    const addStudent = document.getElementById("add-student");
    const displayGrade = document.getElementById("display-grade");
    const avgGrade = document.getElementById("avg-grade");
    const output = document.getElementById("output-list");
    const averageOutput = document.getElementById("average-output");

    
    addStudent.addEventListener('click', () => {
        const name = document.getElementById("name").value.trim();
        const grade = parseFloat(document.getElementById("grade").value.trim());

        if (name && !isNaN(grade) && (grade>=0 && grade <= 100)) {  
            formArray.push({ 'name': name, 'grade': grade });
            document.getElementById("name").value = "";
            document.getElementById("grade").value = "";
        } else {
            alert('Please enter a valid name and numeric grade');
        }
    });

    displayGrade.addEventListener('click', () => {
        output.innerHTML = "";  

        formArray.forEach(student => {
            const listItem = document.createElement("li");
            listItem.textContent = `${student.name}: ${student.grade}`;
            output.appendChild(listItem);
        });
    });

    avgGrade.addEventListener('click', () => {
        if (formArray.length > 0) {
            const totalGrades = formArray.reduce((total, student) => total + student.grade, 0);
            const average = (totalGrades / formArray.length).toFixed(2);
            averageOutput.textContent = `Average Grade: ${average}`;
        } else {
            averageOutput.textContent = "No grades to calculate.";
        }
    });
});
