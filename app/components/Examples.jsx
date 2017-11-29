let React = require('react');
let {Link} = require('react-router');

let Examples = () => (
    <div>
        <h1 className="text-center page-title">Examples</h1>
        <p>Here are some examples locations to try out:</p>
        <ol>
            <li>
                <Link to={'/?location=Tehran'}>Tehran</Link>
            </li>
            <li>
                <Link to={'/?location=Tabriz'}>Tabriz</Link>
            </li>
        </ol>
    </div>
);
module.exports = Examples;