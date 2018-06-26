const React = require('react');
import { RedocStandalone } from 'redoc';

class docApi extends React.Component {
    render() {
        return (
            <div>
                <RedocStandalone
                    specUrl="https://rebilly.github.io/ReDoc/openapi.yaml"
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
