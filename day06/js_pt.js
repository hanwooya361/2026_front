const departments = [
    { id: 1, name: '컴퓨터공학과' },
    { id: 2, name: '경영학과' },
    { id: 3, name: '디자인학과' }
  ];

  // 2. 학생 정보
  // departmentId로 학생의 소속 학과를 연결
  const students = [
    { id: 1, name: '김철수', departmentId: 1 },
    { id: 2, name: '이영희', departmentId: 2 },
    { id: 3, name: '박민수', departmentId: 1 },
    { id: 4, name: '최지은', departmentId: 3 }
  ];

  // 3. 교과목 정보
  // departmentId로 어느 학과가 개설한 과목인지 연결
  const courses = [
    { id: 1, name: '자바스크립트', departmentId: 1 },
    { id: 2, name: '데이터베이스', departmentId: 1 },
    { id: 3, name: '마케팅원론', departmentId: 2 },
    { id: 4, name: '경영학개론', departmentId: 2 },
    { id: 5, name: '디자인기초', departmentId: 3 }
  ];

  // 4. 수강신청 내역
  // studentId와 courseId로 학생과 과목을 연결
  const enrollments = [
    { id: 1, studentId: 1, courseId: 1 },
    { id: 2, studentId: 1, courseId: 2 },
    { id: 3, studentId: 2, courseId: 3 },
    { id: 4, studentId: 3, courseId: 1 },
    { id: 5, studentId: 4, courseId: 5 }
  ];

  let student = students.find(function (item) {
    return item.id === 1;
  });

  let department = departments.find(function (item) {
    return item.id === student.departmentId;
  });

   let html = '';

  html += student.name + '의 학과: ' + department.name + '<br>';

  for (let i = 0; i < enrollments.length; i++) {
    if (enrollments[i].studentId === student.id) {
      let course = courses.find(function (item) {
        return item.id === enrollments[i].courseId;
      });

      html += '수강 과목: ' + course.name + '<br>';
    }
  }

  document.querySelector('#result').innerHTML = html;