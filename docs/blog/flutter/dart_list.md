---
title: dart的中的List属性与方法
sidebarDepth: 2
tags:
  - Flutter
  - Dart
---

## List

- List([int length]) 创建一个空数组或者 length 长度的数组
- List.filled(int length,E fill,{bool growable:false}) 创建一个 list，每个元素共享相同的值，growable 表示是 list 长度是否可变，默认 false 固定长度

```
List a = new List.filled(10, 1);
print(a);//[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
```

- List.from(iterable elements,{bool growable:true})

```
List a = new List.from([1, "2", 3, 4]);
print(a);//[1, 2, 3, 4]
```

- List.generate(int length, E generator(int index) 创建一个元素，每个位置创建一个新对象

```
<!-- more -->
List a = new List.generate(10, (value) => value + 1);
print(a);//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

- List.unmodifiable(Iterable elements) 创建一个不可修改的 List
- first List 中第一个元素
- last List 中最后一个元素
- length List 的长度
- reversed 返回翻转 List 后的值，不改变原 List
- add() 向数组中添加一个元素
- addAll() 向数组中添加一个带有 Iterable 接口的类

```
List a = new List.from([1, "2", 3, 4]);
a.addAll([5, 6]);
print(a);// [1, 2, 3, 4, 5, 6]
```

- asMap() 返回一个不可修改的 Map,keys 为 List 顺序

```
List a = new List.from([1, "2", 3, 4]);
Map b = a.asMap();
print(b);
print(a);
CONSOLE:
{0: 1, 1: 2, 2: 3, 3: 4}
[1, 2, 3, 4]
```

- cast<R>() 如果 List 中所有类型满足 R,正常工作并返回 List，如果有一个不满足，将会抛出错误

```
 List a = new List.from([1,"2", 3, 4]);
print(a.cast<int>());//抛出错误：type 'String' is not a subtype of type 'int' in type cas
```

- clear() 删除所有元素
- fillRange(int start,int end,[E fillValue]) 在选择的范围插入一个新的元素

```
List a = [1, 2, 3, 4];
a.fillRange(1, 3, 'test');
print(a);//[1, test, test, 4]
```

- getRange(int start,int end) 返回一个从 start 到 end 的 Iterable

```
List a = [1, 2, 3, 4];
print(a.getRange(1, 3));//(2, 3)
print(a);//[1, 2, 3, 4]

```

- indexOf() 找到第一个满足条件的下标

```
List a = [1, 2, 3, 4];
print(a.indexOf(3));//2
```

- indexWhere(bool test(E element),[int start=0]) 迭代 list，返回第一个满足条件的下标

```
 List a = [1, 2, 3, 4];
print(a.indexWhere((value) => value % 2 == 0));//1
```

- insert(int index,E element) 在 index 处插入一个元素

```
List a = [1, 2, 3, 4];
a.insert(2, 'Elfecho');
print(a);//[1,2,Elfecho,3,4]
```

- insertAll(int index,iterable<E> iterable) 在 index 处插入一个数组

```
List a = [1, 2, 3, 4];
a.insertAll(2, ['Elfecho', 'good']);
print(a);//[1, 2, [Elfecho, good], 3, 4]
```

- lastIndexOf(E element, [ int start ]) 类似 indexOf，迭代从后往前
- lastIndexWhere(bool test(E element), [ int start ]) 类似 indexWhere，迭代从后往前
- remove(Object value) 删除第一个匹配到的 value

```
List a = [1, 2, 3, 4, 3];
a.remove(3);
print(a);// [1,2,4,3]
```

- removeAt(int index) 删除 index 处的数据

```
List a = [1, 2, 3, 4, 3];
a.removeAt(3);
print(a);//[1, 2, 3, 3]
```

- removeLast() 删除最后一个数据
- removeRange(int start,int end) 删除 start 到 end 处的数据

```
List a = [1, 2, 3, 4, 3];
a.removeRange(2, 3);
print(a);//[1,2,4,3]
```

- removeWhere() 迭代数据，删除回调中返回 true 的数据

```
List a = [1, 2, 3, 4, 3];
a.removeWhere((value) => value % 2 == 0);
print(a);//[1,3,3]
```

- replaceRange(int start,int end,iterable<E> replacement) 删除 start 到 end 的数据插入 replacement

```
List a = [1, 2, 3, 4, 3];
a.replaceRange(2, 4, [10, 11, 12, 13]);
print(a);//[1, 2, 10, 11, 12, 13, 3]
```

- retainWhere(bool test(E element)) 删除不满足条件的数据

```
List a = [1, 2, 3, 4, 3];
a.retainWhere((value) => value % 2 == 0);
print(a);//[2, 4]
```

- setAll(int index,iterable<E> iterable) 从 index 开始插入一个 iterable 数据（对比 insertAll)

```
List a = [1, 2, 3, 4, 5];
a.setAll(2, ['Elfecho', 'good']);
print(a); //[1, 2, Elfecho, good, 5]
```

它与 insertAll 的区别是 insertAll 不会删除原数组的值，setAll 会删除插入处一个或多个值

- setRange(int start,int end,Iterable<E> iterable,[int skipCount=0]) 从原数组 start 处开始到 end 结束替换一个 iterable，可选参数 skipCount 表示从 iterable 第 skipCount 处开始复制

```
List<int> list1 = [1, 2, 3, 4];
List<int> list2 = [5, 6, 7, 8, 9];
list1.setRange(1, 3, list2, 2);
print(list1.join(', ')); // 1, 7, 8, 4
```

- shuffle([Random random]) 随机排列 list
- sort(int compare(E a,E b)) 排序,类似 js 中的 sort

```
List<int> list = [1, 2, 3, 4, 9, 8, 7, 6];
list.sort((a, b) => a - b);
print(list);//[1, 2, 3, 4, 6, 7, 8, 9]
```

- sublist(int start,[int end]) 提取 list 数据

```
List<int> list = [1, 2, 3, 4, 9, 8, 7, 6];
print(list.sublist(2, 5));
```

- contains(Object element) 比较原数组中是否包含 element

```
List<int> list = [1, 2, 3, 4];
List<int> list2 = [1, 2, 3, 4];
print(list.contains(1));//true
print(list2.contains(5));//false
```

- elementAt(int index) 返回 index 处的数据

```
List<int> list = [1, 2, 3, 4];
print(list.elementAt(2));//3
```

- every(bool test(E element)) list 每一项是否满足条件

```
List<int> list = [1, 2, 3, 4];
List<int> list1 = [0, 2, 4, 6];
print(list.every((item) => item % 2 == 0));//false
print(list1.every((item) => item % 2 == 0));//true
```

- expand(Iterable<T> f(E element)) 展开 list (类似 js 中的 flat)

```
var pairs = [[1, 2], [3, 4]];
var flattened = pairs.expand((pair) => pair).toList();
print(flattened); // => [1, 2, 3, 4];

var input = [1, 2, 3];
var duplicated = input.expand((i) => [i, i]).toList();
print(duplicated); // => [1, 1, 2, 2, 3, 3]
```

- firstWhere(bool test(E element),{E orElse()}) 迭代元素返回第一个满足 test，如果没有，返回 orElse 调用结果

```
var list = [1, 2, 2, 4];
var res = list.firstWhere((pair) => pair == 2);
print(res);//2
```

- fold<T>(T initialValue,T combine(T previousValue,E element)) 把 initialValue 作为初始值，迭代原数组，返回新的 value，类似 js 中的 reduce，eg:

```
var value = initialValue;
for (E element in this) {
  value = combine(value, element);
}
return value;
```

- followedBy(iterable<E> other) 将 other 数据添加到原数组，返回 Iterable 类型

```
List a = new List.from([1, 2, 3, 4]);
Iterable b = a.followedBy([1, 2, 3]);
print(b);//(1, 2, 3, 4, 1, 2, 3)
```

- forEach(void f(E element)) 迭代数组

```
List list = [1, 2, 3, 4];
list.forEach((item) {
    print(item);
});
//1,2,3,4
```

- join([String separator='']) 把数组转成字符串中间用 separator 隔开

```
var list = [1, 2, 2, 4];
var res = list.join('*');
print(res);//1*2*3*4
```

- lastWhere(bool test(E element),{E orElse})

```
var list = [1, 2, 2, 4];
var res = list.lastWhere((pair) => pair == 2);
print(res);//3
```

- map<T>(T f(E e)) 迭代数组并返回一个新的数组，新数组长度跟原数组长度一样

```
var list = [1, 2, 2, 4];
var res = list.map((pair) => pair * 2);
print(res);//(2, 4, 4, 8)
```

- noSuchMethod(Invocation invocation) 访问不存在的方法或属性调用
- reduce(E combine(E value,E element)) value 为初始值为原始数组第一项，后面是 combine 返回的项

```
List a = new List.from([1, 2, 3, 4]);
var b = a.reduce((a, b) {
  print(a.toString() + ',' + b.toString());
  return a + b;
});
print(b);
//1,2
//3,3
//6,4
//10
```

- singleWhere(bool test(E element),{E orElse()}) 检查元素以查看是否 test(element)返回 true。如果只满足一个元素 test，则返回该元素。如果找到多个匹配元素，则抛出 StateError。如果未找到匹配元素，则返回结果 orElse。如果 orElse 省略，则默认为抛出 StateError
- skip(int count) 返回原数组 count 后面的元素

```
 List a = new List.from([1, 2, 3, 4]);
print(a.skip(2));//(3, 4)  //返回Iterable类型
print(a);//[1, 2, 3, 4]
```

- skipWhile(bool test(E value))

```
List a = new List.from([1, 2, 3, 4]);
print(a.skipWhile((value) {
  print(value);
  if (value == 3) {
    return false;
  }
  return true;
}));
print(a);
输出:
1
2
3
(3, 4)
[1, 2, 3, 4]
```

- take(int count)

```
List a = new List.from([1, 2, 3, 4]);
print(a.take(2));//(1,2)
```

- takeWhile(bool test(E value)) 遍历迭代器，直到找到 test 返回为 false 的元素，停止遍历返回找到的 iterable

```
List a = new List.from([1, 2, 3, 4]);
print(a.takeWhile((value) => value != 2));
//(1)
```

- toList({bool growable:true}) 将 Iterable 类转为 List
- toSet() 将 Iterable 类及其子类转为 Set
- toString()
- where(bool test(E element)) 遍历元素，返回所有满足条件的元素,类似 js 中的 filter

```
List a = new List.from([1, 2, 3, 4]);
print(a.where((value) => value != 2));//（1，3，4）
```

- whereType<T>() 找到原 list 中带有 T 类型的元素

```
List a = new List.from([1, "2", 3, 4]);
print(a.whereType<String>());//(2)
```
