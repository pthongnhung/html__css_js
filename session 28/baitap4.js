const rectangle = {
    width: 10,
    height: 5,
    getArea: function area() {
        let hcn = this.width * this.height;
        console.log(`Dien tich hcn: ${hcn}`);
    }
}
rectangle.getArea();