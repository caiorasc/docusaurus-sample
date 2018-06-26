const React = require('react');
import { RedocStandalone } from 'redoc';

class docApi extends React.Component {
    render() {
        return (
            <div>
                <RedocStandalone
                    specUrl="http://rebilly.github.io/RebillyAPI/swagger.json"
                    options={{
                        nativeScrollbars: true,
                        theme: { colors: { main: '#dd5522' } },
                    }}
                />
            </div>
        );
    }
}

module.exports = docApi;
