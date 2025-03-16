const company = {
    name: "RikkeiSoft",
    location: "Ha Noi",
    employees: [
        { name: "Nguyen Van Luan", position: "Developer" },
        { name: "Nguyen Van Hoang", position: "Tester" },
        { name: "Hoang Nam Cao", position: "Manager" }
    ]
};
console.log(`Ten cong ty: ${company.name}`);
company.employees.forEach((item) =>
console.log(item.name))