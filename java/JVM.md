# JVM高级特征与最佳实现

## 第三部分 虚拟机执行子系统

### 6.3 Class类文件的结构

#### 6.3.7 属性表集合

1. Code属性
    + `atrribute_name_index` 指向常量表，代表该属性的名称，固定为“Code” （`CONSTANT_Utf8_info`类型）。
    + `max_stack` 代表操作数栈（Operand Stacks)深度的最大值。
    + `max_local` 代表局部变量表所需的存储空间。
      > byte, char, flot, int, short, bealon和returnAddress占用一个slot。long和double用两个slot。
    + `code_length`和`code`。表示代码长度和代码。`code_length`为u4类型。`code`用于存储字节码指令的字节流。
      > `code_length` **取值范围0~65535**。

   异常处理表
    + `start_pc` 异常监控的起始行。
    + `end_pc` 结束行。
    + `cache_type` 监控的异常类型。
    + `handler_pc` 异常处理代码。
  
    （以上四个属性类型均为`U2`。）
2. 异常属性。方法可能抛出的可检查异样。
    + `attribute_name_index`, CONSTANT_utf8_info。
    + `attribute_lenght`
    + `number_of_exception`
    + `exception_index_table`
3. LineNumberTable 属性。
    | 类型 | 名称 | 数量 |
    | :- | :- | :- | :-
    | u2 | attribute_name_index | 1 |
    | u4 | attribute_length | 1 |
    | u2 | line_number_table_length | 1 |
    | line_number_info | line_number_table | line_number_table |

    **line_number_info:**
    | 类型 | 名称 | 数量 | 描述
    | :- | :- | :- | :-
    | u2 | start_pc | 1 | 字节码行号
    | u2 | line_number | 1 | java代码行号
4. LocalVariableTable属性。用于描述栈帧中局部表量表中的变量和Java源代码中定义的变量之间的关系。
    | 类型 | 名称 | 数量 |
    || :- | :- | :- | :-
    | u2 | attribute_name_index | 1 |
    | u4 | attribute_length | 1 |
    | u2 | local_variable_table_length | 1 |
    | local_variable_info | local_variable_table | local_variable_table_length |

    **line_number_info:**
    | 类型 | 名称 | 数量 | 描述
    | :- | :- | :- | :-
    | u2 | start_pc | 1 | 局部变量在字节码行中偏移 
    | u2 | length | 1 | 作用范围覆盖长度。start_pc和length共同决定局部变量作用域
    |u2| name_index| 1 | 指向常量表中变量名称
    |u2| description_index| 1 | 指向常量表中的变量描述
    |u2| index| 1 | 表示在栈帧中slot的位置
5. LocalVariableTypeTable属性。为泛型添加。
6. SourceFile 属性。描述了Java文件名称。抛出异常时，显示源文件名称。
7. ConstantValue属性。作用是为静态变量赋值。
   > Sun javac 中，如果基本类型或者String类型的常量（static final），虚拟机用ConstantValue赋值。没有final修饰的static变量，用`<clinit>`方法赋值。实例变量用`<init>`赋值。
  
    | 类型 | 名称 | 数量 | 描述
    | :- | :- | :- | :-
    | u2 | attribute_name_index | 1 |
    | u4 | attribute_length | 1 | 固定为2，也就是说ConstantVlaue属性是固定长度
    | u2| constantvalue_index| 1| 字面量常量引用。可以是多种类型，例如CONSTANT_Long_info, CONSTANT_String_info等。
8. InnerClass属性
    | 类型 | 名称 | 数量 | 描述
    | :- | :- | :- | :-
    | u2 | attribute_name_index | 1 |
    | u4 | attribute_length | 1 |
    | u2 | number_of_class | 1 |
    | inner_class_info | inner_classs | 1 |
    **InnerClassInfo:**
    | 类型 | 名称 | 数量 | 描述
    | :- | :- | :- | :-
    | u2 | inner_class_info_index | 1 |
    | u2 | outer_class_info_index | 1 |
    | u2 | inner_name_index | 1 |
    | u2 | inner_classs_access_flag | 1 |
9. Deprecated和Synthetic属性
10. StackMapTable属性。JDK1.7字节码验证器工作需要的数据结构。
11. Signature属性， 出现在类，方法表，属性表结构的属性表中。用来描述泛型信息。
12. BootstrapMethod属性。如果常量池中定义了CONSTANT_InvokeDynamic_info类型常量，那么属性表中必须有BootstrapMethod属性。如果常量池定义多个CONSTANT_InvokeDynamic_info类型，那么只能有个BootstrapMethod。