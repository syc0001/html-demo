#less总结
    变量
        <!-- 变量可以计算 -->
        @color:red;
        @width:100px;
        @xxx:xxx;
        <!-- 其他运算同理 -->
        @sum:1px+2px;
        @mul:1px*2px;
    混合
    .test{
        background-color:red;
    }

    函数
    <!-- 引入后不会出现样式,使用 .test(param) -->
    .test(param){

    }

    嵌套
    .container{
        <!-- div 后代元素 -->
        width:300px;
        div{

        }
        > div{

        }
        + div{

        }
        <!-- .container.test -->
        .test{

        }
        <!-- &代表自身 -->
        &:hover{

        }
        @media (xxx){
            <!-- 使用新的 -->
            width:600px;
        }
    }

    转义
        @min768: ~"(min-width: 768px)";

    映射
        #colors() {
            primary: blue;
            secondary: green;
        }

        .button {
            color: #colors[primary];
            border: 1px solid #colors[secondary];
        }
    导入
        @import "typo.css";