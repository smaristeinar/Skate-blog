<nav>
<div class="hamburger-menu">
    <div id="menu__toggle"> 
      <span></span> 
      <span></span>
      <span></span>
    <div>
   

    <ul class="menu__box">
      <li><a class="menu__item" href="/">Home</a></li>
			<li><a class="menu__item" href="#">About</a></li>
			<li><a class="menu__item" href="#">Team</a></li>
			<li><a class="menu__item" href="#">Contact</a></li>
			<li><a class="menu__item" href="#">Twitter</a></li>
    </ul>
</div>
<h1>SkateBlog</h1>
</nav>

<style>
nav{
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: #CFD8DC;
}
h1{
  
}

#menu__toggle {
  opacity: 0;
}
#menu__toggle + .menu__btn > span {
  transform: rotate(45deg);
}
#menu__toggle + .menu__btn > span::before {
  top: 0;
  transform: rotate(0deg);
}
#menu__toggle + .menu__btn > span::after {
  top: 0;
  transform: rotate(90deg);
}
#menu__toggle ~ .menu__box {
  left: 0 !important;
}
.menu__btn {
  width: 26px;
  height: 26px;
  cursor: pointer;
}
.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  width: 26px;
  z-index: 2;
  background-color: #616161;
  transition-duration: .25s;
}
.menu__btn > span::before {
  content: '';
  top: -8px;
}
.menu__btn > span::after {
  content: '';
  top: 8px;
}
.menu__box {
  display: block;
  position: fixed;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 80px 0;
  list-style: none;
  background-color: #ECEFF1;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, .4);
  transition-duration: .25s;
}
.menu__item {
  display: block;
  padding: 12px 24px;
  color: #333;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  transition-duration: .25s;
  text-align: center;
}
.menu__item:hover {
  background-color: #CFD8DC;
}   
</style>