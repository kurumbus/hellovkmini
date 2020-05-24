import React, {Component} from 'react';
import { Root, View, Panel, PanelHeader, Button, platform, Div, Group, List, Cell, IOS, Link, colors, HeaderButton } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = App.getInitState();
    }

    static getInitState() {
        return {
            activePanel: 'mainPanel'
        };
    }

    render() {
        const osname = platform();

        return (
            <Root activeView="mainView">
                <View id="mainView" activePanel={this.state.activePanel}>
                    <Panel id="mainPanel">
                        <PanelHeader>
                            HELLO OCR
                        </PanelHeader>
                        <Div className="footer">
                            <Button type="cell" align="center" onClick={() => {}}>
                                О программе HELLO OCR
                            </Button>
                        </Div>
                    </Panel>
                </View>
            </Root>
        );
    }

    openCredits() {
        this.setState({activePanel: 'creditsPanel'});
    }

    openMain() {
        this.setState({activePanel: 'mainPanel'});
    }
}

export default App;
