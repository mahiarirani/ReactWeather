let React = require('react');
let {Link, IndexLink} = require('react-router');

let Nav = React.createClass({
    onSearch: function (e) {
        e.preventDefault();

        let location = this.refs.location.value;
        let encodedLocation = encodeURIComponent(location);

        if (location && location.length > 0){
            this.refs.location.value = "";
            window.location.hash = `#/?location=${encodedLocation}`;
        }

    },
    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather</li>
                        <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                        </li>
                        <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
                        <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li><input type="search" placeholder="Enter city name" ref="location"/></li>
                            <li><input type="submit" value="Search" className="button"/></li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = Nav;