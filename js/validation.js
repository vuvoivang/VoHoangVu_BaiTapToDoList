function Validation() {
    this.checkNull = function (input, id, mess) {
        if (input == "") {
            getEleId(id).style.display = "block";
            getEleId(id).innerHTML = mess;
            return false;
        }
        getEleId(id).style.display = "none";
        return true;
    }
    this.checkCoincide = function (input, arr, id, mess) {
        var isValid = true;
        arr.forEach(function (item) {
            if (item != null) {
                if (input == item.taskName) {
                    isValid = false;

                }

            }
        })
        if (!isValid) {
            getEleId(id).style.display = "block";
            getEleId(id).innerHTML = mess;
            return false;
        }
        getEleId(id).style.display = "none";
        return true;
    }
}