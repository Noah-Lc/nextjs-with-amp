<template>
  <header>
		<div id="nav-wrapper" class="content-width">
			<div class="logo">
				<a href="/">
					<amp-img src="/logo.svg" layout="responsive" width="180" height="60"></amp-img>
				</a>
			</div>
			<div class='links'>
				<a class="link" href="#about">Home</a>
				<a class="link" href="#products">Page</a>
			</div>
		</div>
	</header>
</template>

<style>
/* Header */
header {
  background: white;
  padding: 25px 0px;
  position: -webkit-sticky;  
  position: sticky;
  top: 0px;
  z-index: 100;
  -webkit-box-shadow: 0 0 5px rgba(0,0,0,.2);
  -moz-box-shadow: 0 0 5px rgba(0,0,0,.2);
  box-shadow: 0 0 5px rgba(0,0,0,.2);
}

#nav-wrapper {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}

.logo {
  width: 150px;
}

.logo amp-img {
  max-height: 41px;
}

.links {
  display: flex;
  justify-content: flex-end;
}

.links a {
  cursor: pointer;
  padding: 0 18px 0;
  font-size: 16px;
  font-weight: 600;
}

.links .link {
  webkit-transition: color .4s ease;
  -moz-transition: color .4s ease;
  -o-transition: color .4s ease;
  transition: color .4s ease;
  color: var(--black);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  
}

.links .link:hover {
  color: var(--main);
}
</style>
