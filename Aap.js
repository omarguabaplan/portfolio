}
class About extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Kira",
      text: "Hello! My name is Kira and I want to be a frontend developer. You can see some of my projects below or in my codepen profile"
    };
  }
  render() {
    return (
      <div className="about" id="About">
        <h1 className="about__title">{this.state.name}</h1>
        <p className="about__text">{this.state.text}</p>
      </div>
    );
  }
}
class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      nav: ["About", "Portfolio", "Contact"]
    };
  }
  render() {
    let navigation = this.state.nav.map(item => {
      return <a className="nav__link" href={'#'+item}>{item}</a>;
    });
    return <ul className="nav" id="nav">{navigation}</ul>;
  }
}
class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <About />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
