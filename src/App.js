import React, {Component} from 'react';
import { Root, View, Panel, PanelHeader, Button, platform, Div, Group, List, Cell, IOS, Link, colors, HeaderButton } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

class App extends Component {

    constructor(props) {
        super(props);
    }

    static getInitState() {
        return {
        };
    }

    render() {
        const osname = platform();

        return (
            <Root activeView="mainView">
                <View id="mainView" activePanel={this.state.activePanel}>
                    <Panel id="mainPanel">
                        <PanelHeader>
                            Relax
                        </PanelHeader>
                        <Div className="footer">
                            <Button type="cell" align="center" onClick={this.openCredits.bind(this)}>О
                                программе</Button>
                        </Div>
                    </Panel>
                    <Panel id="creditsPanel">
                        <PanelHeader>
                            О программе
                        </PanelHeader>
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
