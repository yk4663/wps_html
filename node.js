<form name="LoginForm" method="post" action="selProduct.html">
<input type="text" name="username"/>
<input type="submit" value="Login"/>
</form>

request.setCharacterEncoding("UTF-8")

session.setAttribute("username", request.getParameter("username"));
