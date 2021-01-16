function Task_list() {
    this.arr = [];
    this.add = function (task) {
        this.arr.push(task);
    }
    this.findIndex = function (id) {
        return this.arr.findIndex(function (item) {
            return id === item.id;
        });
    }
    // this.delete = function (id) {
    //     this.arr.forEach(function (item, i) {
    //         if (item.id == id) {
    //             this.arr.splice(i, 1);
    //         }
    //     })
    // }
    this.delete = function (id) {
        var index = this.findIndex(id);
        if (index !== -1) this.arr.splice(index, 1);
    }
    this.changeStatus = function (id) {
        this.arr.forEach(function (item) {
            if (item.id === id) {
                item.status = !item.status;
            }
        })
    }
}