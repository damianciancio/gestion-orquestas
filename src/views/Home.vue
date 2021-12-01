<template>
    <div class="main-container">
        <header>HEADER</header>
        <b-navbar toggleable="lg">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#">Link</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="#">asd</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <main>
            <aside>
				<div>
					<heading>
						Próximos shows!
					</heading>
					<ul>
						<li>Mar del plata, 5/12/2021</li>
					</ul>
				</div>
			</aside>
            <section>
				<article>
					<heading>
						<h1>Charagua</h1>
						<h2>Suena la orilla</h2>
					</heading>
				</article>
			</section>
        </main>
        <footer>Charagua, suena la orilla </footer>
    </div>
</template>
<style language="scss" scoped>
.main-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}
header {
    min-height: 100px;
    padding: 20px;
    background-color: black;
    color: white;
}
nav {
    min-height: 75px;
    border-top: 4px solid #0e4749;
    color: #0e4749;
}

aside {
    flex: 1;
    padding: 20px;
}

main {
	display: flex;
    flex-grow: 1;
    flex-direction: row;
    width: 100%;
}

section {
    height: 100%;
    flex: 5;
    padding: 20px;
}

footer {
    color: white;
    background-color: black;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
}
@media screen and (max-width: 992px) {
	main {
		display: inline-block;
	}
}
</style>