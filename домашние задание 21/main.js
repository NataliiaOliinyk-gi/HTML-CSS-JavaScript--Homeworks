// Создайте класс CopyEntity. У него должен быть статический метод copyObject, который бы копировал любой объект. Метод copyObject принимает любой объект и возвращает его копию.
// Например:
// const arr1 = [1, 2, 3];
// const arr2 = CopyEntity.copyObject(arr1);
// arr1[0] = 999;
// console.log(arr1);
// console.log(arr2);

class CopyEntity {
    static copyObject(obj) {
        // return Array.isArray(obj) ? [...obj] : { ...obj }; // поверхностная копия
        return JSON.parse(JSON.stringify(obj)); // глубокая копия
    }
}
const arr1 = [1, 2, 3];
const arr2 = CopyEntity.copyObject(arr1);
arr1[0] = 999;
console.log(arr1);
console.log(arr2);

