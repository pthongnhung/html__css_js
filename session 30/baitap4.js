let courses = [];  // Mảng lưu trữ các khóa học
let users = [];    // Mảng lưu trữ các người dùng

// Chức năng quản lý khóa học

function addCourse() {
    let id = +prompt("Nhập ID khóa học: ");
    let name = prompt("Nhập tên khóa học: ");
    let instructor = prompt("Nhập tên giáo viên dạy khóa học: ");

    // Tạo khóa học mới và thêm vào danh sách khóa học
    let newCourse = { id, name, instructor, students: [] };
    courses.push(newCourse);
    console.log("Khóa học đã được thêm.");
}

function searchCourseByName() {
    let courseName = prompt("Nhập tên khóa học cần tìm: ");
    let foundCourses = courses.filter(course => course.name.toLowerCase().includes(courseName.toLowerCase()));

    if (foundCourses.length > 0) {
        console.log("Khóa học tìm thấy: ");
        console.log(foundCourses);
    } else {
        console.log("Không tìm thấy khóa học.");
    }
}

function deleteCourse() {
    let courseId = +prompt("Nhập ID khóa học cần xóa: ");
    let courseIndex = courses.findIndex(course => course.id === courseId);

    if (courseIndex !== -1) {
        // Xóa tất cả khóa học khỏi danh sách registeredCourses của người dùng
        users.forEach(user => {
            user.registeredCourses = user.registeredCourses.filter(courseId => courseId !== courseId);
        });

        // Xóa khóa học khỏi danh sách courses
        courses.splice(courseIndex, 1);
        console.log("Khóa học đã bị xóa.");
    } else {
        console.log("Khóa học không tồn tại.");
    }
}

// Chức năng quản lý người dùng

function addUser() {
    let id = +prompt("Nhập ID người dùng: ");
    let name = prompt("Nhập tên người dùng: ");
    let newUser = { id, name, registeredCourses: [] };
    users.push(newUser);
    console.log("Người dùng đã được thêm.");
}

function registerCourse() {
    let userId = +prompt("Nhập ID người dùng: ");
    let user = users.find(user => user.id === userId);

    if (user) {
        let courseId = +prompt("Nhập ID khóa học cần đăng ký: ");
        let course = courses.find(course => course.id === courseId);

        if (course) {
            // Kiểm tra xem người dùng đã đăng ký khóa học này chưa
            if (!user.registeredCourses.includes(courseId)) {
                user.registeredCourses.push(courseId);
                course.students.push(userId);  // Thêm người dùng vào danh sách học viên của khóa học
                console.log(`${user.name} đã đăng ký khóa học ${course.name}`);
            } else {
                console.log(`${user.name} đã đăng ký khóa học này rồi.`);
            }
        } else {
            console.log("Khóa học không tồn tại.");
        }
    } else {
        console.log("Người dùng không tồn tại.");
    }
}

function unregisterCourse() {
    let userId = +prompt("Nhập ID người dùng: ");
    let user = users.find(user => user.id === userId);

    if (user) {
        let courseId = +prompt("Nhập ID khóa học cần hủy đăng ký: ");
        let courseIndex = user.registeredCourses.indexOf(courseId);

        if (courseIndex !== -1) {
            user.registeredCourses.splice(courseIndex, 1);  // Xóa khóa học khỏi danh sách đăng ký của người dùng
            let course = courses.find(course => course.id === courseId);
            course.students = course.students.filter(studentId => studentId !== userId);  // Xóa người dùng khỏi danh sách học viên của khóa học
            console.log(`${user.name} đã hủy đăng ký khóa học ${course.name}`);
        } else {
            console.log(`${user.name} chưa đăng ký khóa học này.`);
        }
    } else {
        console.log("Người dùng không tồn tại.");
    }
}

function showCoursesOfUser() {
    let userId = +prompt("Nhập ID người dùng: ");
    let user = users.find(user => user.id === userId);

    if (user) {
        let registeredCourses = user.registeredCourses.map(courseId => {
            return courses.find(course => course.id === courseId).name;
        });
        console.log(`${user.name} đã đăng ký các khóa học: `);
        console.log(registeredCourses);
    } else {
        console.log("Người dùng không tồn tại.");
    }
}

// Chức năng menu chính

let choice;
do {
    console.log("----- Quản lý khóa học -----");
    console.log("1. Quản lý khóa học");
    console.log("2. Quản lý người dùng");
    console.log("3. Thoát");
    choice = +prompt("Nhập lựa chọn của bạn: ");

    switch (choice) {
        case 1:
            let courseChoice;
            do {
                console.log("----- Quản lý khóa học -----");
                console.log("1. Thêm khóa học");
                console.log("2. Tìm kiếm khóa học theo tên");
                console.log("3. Xóa khóa học");
                console.log("4. Quay lại");
                courseChoice = +prompt("Nhập lựa chọn của bạn: ");
                switch (courseChoice) {
                    case 1: addCourse(); break;
                    case 2: searchCourseByName(); break;
                    case 3: deleteCourse(); break;
                    case 4: break;
                    default: console.log("Lựa chọn không hợp lệ"); break;
                }
            } while (courseChoice !== 4);
            break;

        case 2:
            let userChoice;
            do {
                console.log("----- Quản lý người dùng -----");
                console.log("1. Thêm người dùng");
                console.log("2. Đăng ký khóa học");
                console.log("3. Hủy đăng ký khóa học");
                console.log("4. Hiển thị danh sách khóa học của người dùng");
                console.log("5. Quay lại");
                userChoice = +prompt("Nhập lựa chọn của bạn: ");
                switch (userChoice) {
                    case 1: addUser(); break;
                    case 2: registerCourse(); break;
                    case 3: unregisterCourse(); break;
                    case 4: showCoursesOfUser(); break;
                    case 5: break;
                    default: console.log("Lựa chọn không hợp lệ"); break;
                }
            } while (userChoice !== 5);
            break;

        case 3:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ.");
    }
} while (choice !== 3);
