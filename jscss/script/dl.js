document.writeln("<style>");
document.writeln("<!-- 灯笼1 -->");
document.writeln(".deng-box {");
document.writeln("	position: fixed;");
document.writeln("	top: -40px;");
document.writeln("	right: -20px;");
document.writeln("	z-index: 999;");
document.writeln("}");
document.writeln(" ");
document.writeln(".deng-box1 {");
document.writeln("	position: fixed;");
document.writeln("	top: -30px;");
document.writeln("	right: 10px;");
document.writeln("	z-index: 999;");
document.writeln("}");
document.writeln(" ");
document.writeln(".deng-box1 .deng {");
document.writeln("	position: relative;");
document.writeln("	width: 120px;");
document.writeln("	height: 90px;");
document.writeln("	margin: 50px;");
document.writeln("	background: #d8000f;");
document.writeln("	background: rgba(216, 0, 15, 0.8);");
document.writeln("	border-radius: 50% 50%;");
document.writeln("	-webkit-transform-origin: 50% -100px;");
document.writeln("	-webkit-animation: swing 5s infinite ease-in-out;");
document.writeln("	box-shadow: -5px 5px 30px 4px rgba(252, 144, 61, 1);");
document.writeln("}");
document.writeln(" ");
document.writeln(".deng {");
document.writeln("	position: relative;");
document.writeln("	width: 120px;");
document.writeln("	height: 90px;");
document.writeln("	margin: 50px;");
document.writeln("	background: #d8000f;");
document.writeln("	background: rgba(216, 0, 15, 0.8);");
document.writeln("	border-radius: 50% 50%;");
document.writeln("	-webkit-transform-origin: 50% -100px;");
document.writeln("	-webkit-animation: swing 3s infinite ease-in-out;");
document.writeln("	box-shadow: -5px 5px 50px 4px rgba(250, 108, 0, 1);");
document.writeln("}");
document.writeln(" ");
document.writeln(".deng-a {");
document.writeln("	width: 100px;");
document.writeln("	height: 90px;");
document.writeln("	background: #d8000f;");
document.writeln("	background: rgba(216, 0, 15, 0.1);");
document.writeln("	margin: 12px 8px 8px 8px;");
document.writeln("	border-radius: 50% 50%;");
document.writeln("	border: 2px solid #dc8f03;");
document.writeln("}");
document.writeln(" ");
document.writeln(".deng-b {");
document.writeln("	width: 45px;");
document.writeln("	height: 90px;");
document.writeln("	background: #d8000f;");
document.writeln("	background: rgba(216, 0, 15, 0.1);");
document.writeln("	margin: -4px 8px 8px 26px;");
document.writeln("	border-radius: 50% 50%;");
document.writeln("	border: 2px solid #dc8f03;");
document.writeln("}");
document.writeln(" ");
document.writeln(".xian {");
document.writeln("	position: absolute;");
document.writeln("	top: -20px;");
document.writeln("	left: 60px;");
document.writeln("	width: 2px;");
document.writeln("	height: 20px;");
document.writeln("	background: #dc8f03;");
document.writeln("}");
document.writeln(" ");
document.writeln(".shui-a {");
document.writeln("	position: relative;");
document.writeln("	width: 5px;");
document.writeln("	height: 20px;");
document.writeln("	margin: -5px 0 0 59px;");
document.writeln("	-webkit-animation: swing 4s infinite ease-in-out;");
document.writeln("	-webkit-transform-origin: 50% -45px;");
document.writeln("	background: #ffa500;");
document.writeln("	border-radius: 0 0 5px 5px;");
document.writeln("}");
document.writeln(" ");
document.writeln(".shui-b {");
document.writeln("	position: absolute;");
document.writeln("	top: 14px;");
document.writeln("	left: -2px;");
document.writeln("	width: 10px;");
document.writeln("	height: 10px;");
document.writeln("	background: #dc8f03;");
document.writeln("	border-radius: 50%;");
document.writeln("}");
document.writeln(" ");
document.writeln(".shui-c {");
document.writeln("	position: absolute;");
document.writeln("	top: 18px;");
document.writeln("	left: -2px;");
document.writeln("	width: 10px;");
document.writeln("	height: 35px;");
document.writeln("	background: #ffa500;");
document.writeln("	border-radius: 0 0 0 5px;");
document.writeln("}");
document.writeln(" ");
document.writeln(".deng:before {");
document.writeln("	position: absolute;");
document.writeln("	top: -7px;");
document.writeln("	left: 29px;");
document.writeln("	height: 12px;");
document.writeln("	width: 60px;");
document.writeln("	content: \' \';");
document.writeln("	display: block;");
document.writeln("	z-index: 999;");
document.writeln("	border-radius: 5px 5px 0 0;");
document.writeln("	border: solid 1px #dc8f03;");
document.writeln("	background: #ffa500;");
document.writeln("	background: linear-gradient(to right, #dc8f03, #ffa500, #dc8f03, #ffa500, #dc8f03);");
document.writeln("}");
document.writeln(" ");
document.writeln(".deng:after {");
document.writeln("	position: absolute;");
document.writeln("	bottom: -7px;");
document.writeln("	left: 10px;");
document.writeln("	height: 12px;");
document.writeln("	width: 60px;");
document.writeln("	content: \' \';");
document.writeln("	display: block;");
document.writeln("	margin-left: 20px;");
document.writeln("	border-radius: 0 0 5px 5px;");
document.writeln("	border: solid 1px #dc8f03;");
document.writeln("	background: #ffa500;");
document.writeln("	background: linear-gradient(to right, #dc8f03, #ffa500, #dc8f03, #ffa500, #dc8f03);");
document.writeln("}");
document.writeln(" ");
document.writeln(".deng-t {");
document.writeln("	font-family: 华文行楷,Arial,Lucida Grande,Tahoma,sans-serif;");
document.writeln("	font-size: 3.2rem;");
document.writeln("	color: #dc8f03;");
document.writeln("	font-weight: bold;");
document.writeln("	line-height: 85px;");
document.writeln("	text-align: center;");
document.writeln("}");
document.writeln(" ");
document.writeln(".night .deng-t, ");
document.writeln(".night .deng-box, ");
document.writeln(".night .deng-box1 {");
document.writeln("	background: transparent !important;");
document.writeln("}");
document.writeln(" ");
document.writeln("@-moz-keyframes swing {");
document.writeln("	0% {");
document.writeln("		-moz-transform: rotate(-10deg)");
document.writeln("	}");
document.writeln(" ");
document.writeln("	50% {");
document.writeln("		-moz-transform: rotate(10deg)");
document.writeln("	}");
document.writeln(" ");
document.writeln("	100% {");
document.writeln("		-moz-transform: rotate(-10deg)");
document.writeln("	}");
document.writeln("}");
document.writeln(" ");
document.writeln("@-webkit-keyframes swing {");
document.writeln("	0% {");
document.writeln("		-webkit-transform: rotate(-10deg)");
document.writeln("	}");
document.writeln(" ");
document.writeln("	50% {");
document.writeln("		-webkit-transform: rotate(10deg)");
document.writeln("	}");
document.writeln(" ");
document.writeln("	100% {");
document.writeln("		-webkit-transform: rotate(-10deg)");
document.writeln("	}");
document.writeln("}");
document.writeln("</style>");
document.writeln("<!-- 灯笼1 -->");
document.writeln("<div class=\'deng-box\'>");
document.writeln("	<div class=\'deng\'>");
document.writeln("		<div class=\'xian\'></div>");
document.writeln("		<div class=\'deng-a\'>");
document.writeln("			<div class=\'deng-b\'><div class=\'deng-t\'>节</div></div>");
document.writeln("		</div>");
document.writeln("		<div class=\'shui shui-a\'><div class=\'shui-c\'></div><div class=\'shui-b\'></div></div>");
document.writeln("	</div>");
document.writeln("</div>");
document.writeln("<!-- 灯笼2 -->");
document.writeln("<div class=\'deng-box1\'>");
document.writeln("	<div class=\'deng\'>");
document.writeln("		<div class=\'xian\'></div>");
document.writeln("		<div class=\'deng-a\'>");
document.writeln("			<div class=\'deng-b\'><div class=\'deng-t\'>春</div></div>");
document.writeln("		</div>");
document.writeln("		<div class=\'shui shui-a\'><div class=\'shui-c\'></div><div class=\'shui-b\'></div></div>");
document.writeln("	</div>");
document.writeln("</div>");
document.writeln("");