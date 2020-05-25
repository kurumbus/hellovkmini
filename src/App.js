import React, {Component} from 'react';
import {
    Avatar,
    Banner,
    Button,
    Card,
    Div,
    Gallery,
    Group,
    Header,
    Link,
    List,
    Panel,
    PanelHeader,
    platform,
    RichCell,
    Root,
    Spinner,
    View
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Dropzone from "react-dropzone";
import request from "superagent";
import SimpleExample from "./components/SimpleExample";
import './css/style.css'
import WikiExtract from "./components/WikiExtract";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = App.getInitState();
    }

    static getInitState() {
        return {
            activePanel: 'mainPanel',
            pagesWithMatchingImages: [],
            webEntities: [],
            showSpinner: false,
            visuallySimilarImages: [],
            landmarks: [],
            slideIndex: 0,
        };
    }

    onDropFiles() {
        let _this = this;
        return function (files) {
            _this.setState({
                showSpinner: true, pagesWithMatchingImages: [], webEntities: [],
                visuallySimilarImages: [], slideIndex: 0, landmarks: [],
            });
            const req = request.post('https://ocr.kurumbus.com/api/web');
            files.forEach(file => {
                req.attach('file', file);
            });
            req.then(res => {
                console.log(res);

                _this.setState({
                    pagesWithMatchingImages: res.body.pages_with_matching_images ?? [],
                    webEntities: res.body.web_entities ?? [],
                    landmarks: res.body.landmarks ?? [],
                    visuallySimilarImages: res.body.visually_similar_images ?? [],
                    showSpinner: false,
                });
            });
        };
    }

    render() {
        const osname = platform();
        return (
            <Root activeView="mainView">
                <View id="mainView" activePanel={this.state.activePanel}>
                    <Panel id="mainPanel">
                        <PanelHeader>
                            Лапа - котина любимица
                        </PanelHeader>
                        <Group>
                            <List>
                                <Div>
                                    <Dropzone onDrop={this.onDropFiles()}>
                                        {({getRootProps, getInputProps}) => (
                                            <section>
                                                <Banner {...getRootProps()}
                                                        mode="image"
                                                        size="m"
                                                        header="Выберите файл"
                                                        subheader={<span>Выберите файл для распознавания</span>}
                                                        background={
                                                            <div
                                                                style={{
                                                                    backgroundColor: '#5b9be6',
                                                                    backgroundImage: 'url(https://sun9-31.userapi.com/PQ4UCzqE_jue9hAINefBMorYCdfGXvcuV5nSjA/eYugcFYzdW8.jpg)',
                                                                    backgroundPosition: 'right bottom',
                                                                    backgroundSize: '102%',
                                                                    backgroundRepeat: 'no-repeat',
                                                                }}
                                                            >
                                                                <input {...getInputProps()} />
                                                            </div>
                                                        }
                                                        asideMode="dismiss"
                                                        actions={<Button mode="overlay" size="l">Подробнее</Button>}
                                                />
                                            </section>
                                        )}
                                    </Dropzone>
                                </Div>
                            </List>
                        </Group>
                        {
                            this.state.showSpinner && (
                                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                    <Spinner size="large" style={{ marginTop: 20 }} />
                                </div>
                            )
                        }
                        {
                            this.state.webEntities.length > 0 &&
                            <Group  header={<Header mode="secondary">Результат распознавания:</Header>}>

                                <Div>
                                    {
                                        this.state.webEntities.join(', ')
                                    }
                                </Div>
                            </Group>
                        }
                        {
                            this.state.landmarks.length > 0 &&
                            <Group header={<Header mode="secondary">Места на фотографии:</Header>}>
                                {
                                    this.state.landmarks.map((landmark, i) => {
                                        console.log(landmark.wiki);
                                        return (
                                            <Div style={{marginVertical: 20}} key={JSON.stringify(landmark)}>
                                                <Card>
                                                    <Div>{landmark.title}</Div>
                                                    { landmark.locations.length > 0 &&
                                                        <SimpleExample lat={landmark.locations[0].latitude}
                                                                       lng={landmark.locations[0].longitude}
                                                        />
                                                    }
                                                    { landmark.wiki &&
                                                    <Div>
                                                        {
                                                            landmark.wiki.map(article => {
                                                                return (
                                                                    <Div key={JSON.stringify(article)}>
                                                                        <Div>
                                                                            {article.title}
                                                                        </Div>
                                                                        <Div>
                                                                            {   article.thumbnail && article.thumbnail.source &&
                                                                                <Avatar size={72} mode="image"
                                                                                        src={article.thumbnail.source}
                                                                                />
                                                                            }

                                                                        </Div>
                                                                    </Div>
                                                                )
                                                            })
                                                        }
                                                    </Div>
                                                    }
                                                </Card>
                                            </Div>
                                        )
                                    })
                                }
                            </Group>
                        }
                        {
                            this.state.pagesWithMatchingImages.length > 0 &&
                            <Group header={<Header mode="secondary">Связанные ссылки:</Header>}>
                                {
                                    this.state.pagesWithMatchingImages.map(page =>
                                        <RichCell
                                            key={JSON.stringify(page)}
                                            disabled
                                            multiline
                                            before={<Avatar size={72} mode="image" src={this.getPageImage(page)}/>}
                                            actions={
                                                <React.Fragment>
                                                    <Link href={page.url} target="_blank">
                                                        <Button>
                                                            Открыть
                                                        </Button>
                                                    </Link>
                                                </React.Fragment>
                                            }
                                        >
                                            {page.page_title}
                                        </RichCell>
                                    )
                                }
                            </Group>
                        }

                        {
                            this.state.visuallySimilarImages.length > 0 &&
                            <Group header={<Header mode="secondary">Похожие картинки:</Header>}>

                                <Gallery
                                    slideWidth="90%"
                                    align="center"
                                    style={{ height: 300 }}
                                    slideIndex={this.state.slideIndex}
                                    onChange={slideIndex => this.setState({slideIndex})}
                                >
                                    {
                                        this.state.visuallySimilarImages.map(image =>
                                            <div style={{
                                                backgroundImage: 'url('+image+')',
                                                backgroundPosition: 'right bottom',
                                                backgroundSize: '100%',
                                                backgroundRepeat: 'no-repeat',
                                            }} key={image}/>
                                        )
                                    }
                                </Gallery>
                            </Group>
                        }

                    </Panel>
                </View>
            </Root>
        );
    }

    getPageImage(page) {
        if (page.partial_matching_images && page.partial_matching_images.length > 0) {
            return  page.partial_matching_images[0].url;
        }

        if (page.full_matching_images && page.full_matching_images.length > 0) {
            return  page.full_matching_images[0].url;
        }
        return 'https://sun6-16.userapi.com/TsyTWRNoAgLrdrGDa8Y-ixTzN2z7_4r5tuSO6Q/nC9XgsF2loA.jpg'
    }

}

export default App;